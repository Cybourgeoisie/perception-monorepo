import OpenAI, { type ClientOptions } from "openai";
import Anthropic from "@anthropic-ai/sdk";
import { LLMConfigs } from "@config";
import { IncomingMessage } from "http";
import { ModelFactory } from "./ModelFactory";
import { MessageCreateParamsBase } from "@anthropic-ai/sdk/resources/messages.mjs";

export type LlmApiChatCompletionArguments = {
	onMessageCallback?: (response: string) => void;
	onCompleteCallback?: (response: OpenAI.ChatCompletionMessage) => void;
	numCompletionAttempts?: number;
};

export type OpenAICompletionArguments = OpenAI.ChatCompletionCreateParams & LlmApiChatCompletionArguments;
export type AnthropicCompletionArguments = MessageCreateParamsBase & LlmApiChatCompletionArguments;

export class LlmApi {
	private config: ClientOptions;
	private service: "OpenAI" | "OpenRouter" | "Anthropic" | "local" = "OpenAI";
	private maxCompletionAttempts: number = 3;

	constructor(config: ClientOptions & { service: string }) {
		// Verify that we have an API key
		if (!config.apiKey) {
			throw new Error('OpenAI config "apiKey" must be set to start the program.');
		}

		this.service = config.service as "OpenAI" | "OpenRouter" | "Anthropic" | "local";
		delete config.service;

		this.config = config;
		this.maxCompletionAttempts = LLMConfigs.maxCompletionAttempts || 3;
	}

	public async getCompletion(args: OpenAICompletionArguments | AnthropicCompletionArguments): Promise<OpenAI.ChatCompletionMessage> {
		// Apply Defaults
		let serviceDefaults: any;
		if (this.service === "OpenAI" || this.service === "OpenRouter" || this.service === "local") {
			serviceDefaults = LLMConfigs.default.openai;
		} else if (this.service === "Anthropic") {
			serviceDefaults = LLMConfigs.default.anthropic;
		}

		for (const key in serviceDefaults) {
			if (args[key] === undefined) {
				args[key] = serviceDefaults[key];
			}
		}

		// Parse the model
		if (args.model === "best" || args.model === "fast" || args.model === "large") {
			args.model = ModelFactory.getDefaultModel(this.service, args.model);
		}

		console.log(`Using ${this.service} (${args.model}, T=${args.temperature}) to respond...`);

		if (this.service === "Anthropic") {
			return await this.anthropicCompletion(args as AnthropicCompletionArguments);
		}

		// Default, for OpenAI, OpenRouter, and local
		return await this.openAiCompletion(args as OpenAICompletionArguments);
	}

	private async openAiCompletion(args: OpenAICompletionArguments): Promise<OpenAI.ChatCompletionMessage> {
		// Retrieve the arguments
		const { numCompletionAttempts = 0, onMessageCallback, onCompleteCallback } = args;

		try {
			const openai = new OpenAI(this.config);
			const response = await openai.chat.completions.create({
				...args,
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
				const response: OpenAI.ChatCompletionMessage = {
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

	private async anthropicCompletion(args: AnthropicCompletionArguments): Promise<OpenAI.ChatCompletionMessage> {
		// Retrieve the arguments
		const { numCompletionAttempts = 0, onMessageCallback, onCompleteCallback } = args;

		// If there are system prompts, need to convert those to user prompts
		for (const message of args.messages) {
			if ((message.role as string) === "system") {
				message.role = "user";
			}
		}

		// If there are multiple user messages in sequence, need to group them to a single user message
		const messages = [];
		let userMessage = "";
		for (const message of args.messages) {
			if ((message.role as string) === "user") {
				userMessage += message.content + "\n\n";
			} else {
				if (userMessage) {
					messages.push({ role: "user", content: userMessage });
					userMessage = "";
				}
				messages.push(message);
			}
		}
		if (userMessage) {
			messages.push({ role: "user", content: userMessage });
		}
		args.messages = messages;

		try {
			const anthropic = new Anthropic(this.config);

			const contentChunks = [];
			const response = anthropic.messages.stream(args).on("text", (text) => {
				if (onMessageCallback) {
					onMessageCallback(text);
				}

				contentChunks.push(text);
			});
			await response.finalMessage();

			return new Promise((resolve) => {
				// End the line
				if (onMessageCallback) {
					onMessageCallback("\n");
				}

				// Construct the ChatCompletionResponseMessage
				const response: OpenAI.ChatCompletionMessage = {
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
			console.error(`Error with Anthropic API, attempt ${args.numCompletionAttempts} out of ${this.maxCompletionAttempts}: ${error.message}`);

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
				Authorization: `Bearer ${this.config.apiKey}`,
			},
		});

		return response.json();
	}

	public async getOpenRouterModels(): Promise<any> {
		const response = await fetch("https://openrouter.ai/api/v1/models", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${this.config.apiKey}`,
			},
		});

		return response.json();
	}
}
