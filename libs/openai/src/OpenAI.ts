import OpenAIClass from "openai";
import { LLMConfigs } from "@config";
import { IncomingMessage } from "http";
import { ModelFactory } from "./ModelFactory";

export type OpenAICompletionArguments = {
	messages: OpenAIClass.ChatCompletionMessage[];
	model?: string;
	temperature?: number;
	n?: number;
	onMessageCallback?: (response: string) => void;
	onCompleteCallback?: (response: OpenAIClass.ChatCompletionMessage) => void;
	numCompletionAttempts?: number;
};

export type OpenAIConfig = {
	baseUrl?: string | undefined;
	apiKey: string;
};

export class OpenAI {
	private openai: OpenAIClass;
	private apiKey: string;
	private service: "OpenAI" | "OpenRouter" | "local" = "OpenAI";
	private maxCompletionAttempts: number = 3;

	constructor(config: OpenAIConfig) {
		// Verify that we have an API key
		if (!config.apiKey) {
			throw new Error('OpenAI config "apiKey" must be set to start the program.');
		}

		this.service = config.baseUrl?.includes("openrouter") ? "OpenRouter" : !config.baseUrl ? "OpenAI" : "local";
		this.apiKey = config.apiKey;
		this.maxCompletionAttempts = LLMConfigs.default.maxCompletionAttempts || 3;
		this.openai = new OpenAIClass({
			baseURL: config.baseUrl,
			apiKey: config.apiKey,
		});
	}

	public async getCompletion(args: OpenAICompletionArguments): Promise<OpenAIClass.ChatCompletionMessage> {
		// Retrieve the arguments
		const {
			messages,
			numCompletionAttempts = 0,
			temperature = args.temperature || LLMConfigs.default.temperature,
			n = args.n || LLMConfigs.default.n,
			onMessageCallback,
			onCompleteCallback,
		} = args;

		// Parse the model
		let { model } = args;
		if (model === "best" || model === "fast" || model === "large") {
			model = ModelFactory.getDefaultModel(this.service, model);
		}

		console.log(`Using ${this.service} (${model}, T=${temperature}) to respond...`);

		try {
			const response = await this.openai.chat.completions.create({
				model: model,
				messages: messages,
				temperature: temperature,
				n: n,
				stream: true,
			});

			const stream = response as unknown as IncomingMessage;
			const contentChunks = [];

			try {
				for await (const chunk of stream) {
					const delta = chunk.choices[0].delta;
					const content = delta.content;

					if (content === undefined) {
						continue;
					}

					if (onMessageCallback) {
						onMessageCallback(content);
					}

					contentChunks.push(content);
				}
			} catch (e: any) {
				// Notify the user of an error
				console.error(e.message);

				// If we exceed the number of valid attempts, fail out
				if (numCompletionAttempts >= this.maxCompletionAttempts) {
					console.error(`Exceeded maximum number of completion attempts (${this.maxCompletionAttempts})`);
					process.exit();
				}

				// Try to run again
				this.getCompletion({ ...args, numCompletionAttempts: (args.numCompletionAttempts || 0) + 1 });
			}

			return new Promise((resolve) => {
				// End the line
				if (onMessageCallback) {
					onMessageCallback("\n");
				}

				// Construct the ChatCompletionResponseMessage
				const response: OpenAIClass.ChatCompletionMessage = {
					content: contentChunks.join(""),
					role: "assistant",
				};

				// Return the content
				if (onCompleteCallback) {
					onCompleteCallback(response);
				}

				resolve(response);
			});
		} catch (error) {
			console.error(`Error with OpenAI API, attempt ${args.numCompletionAttempts} out of ${this.maxCompletionAttempts}: ${error.message}`);

			// Wait just a bit before trying again
			await new Promise((resolve) => setTimeout(resolve, 500));

			// If we exceed the number of valid attempts, fail out
			if (numCompletionAttempts >= this.maxCompletionAttempts) {
				console.error(`Exceeded maximum number of completion attempts (${this.maxCompletionAttempts})`);
				process.exit();
			}

			// Try to run again
			return this.getCompletion({ ...args, numCompletionAttempts: (args.numCompletionAttempts || 0) + 1 });
		}
	}

	public async getOpenRouterLimits(): Promise<any> {
		const response = await fetch("https://openrouter.ai/api/v1/auth/key", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${this.apiKey}`,
			},
		});

		return response.json();
	}

	public async getOpenRouterModels(): Promise<any> {
		const response = await fetch("https://openrouter.ai/api/v1/models", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${this.apiKey}`,
			},
		});

		return response.json();
	}
}
