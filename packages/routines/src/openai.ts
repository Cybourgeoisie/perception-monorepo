import { Config } from "@config";
import { OpenAI, State, ModelFactory } from "@openai";
import { TextPreprocessor } from "@common";
import OpenAIClass from "openai";
import fs from "fs";
import path from "path";

export type OpenAIRoutinePromptArgs = {
	llm?: { provider: string; model: string };
	state: State;
	systemPrompts?: string[];
	userPrompts: string[];
	callback: (s: OpenAIClass.ChatCompletionMessageParam) => void;
};

export class OpenAIRoutine {
	public static getName(): string {
		return "OpenAI chat completion";
	}

	public static getDescription(): string {
		return "Submit prompts to OpenAI's chat completion API";
	}

	public static getOpenAiParameters(llm?: OpenAIRoutinePromptArgs["llm"]): { baseUrl: string; apiKey: string } {
		// If we have a specific LLM Provider, use that
		const llm_api_endpoint = llm?.provider || Config.LLM_API_ENDPOINT;

		if (llm_api_endpoint === "OpenRouter") {
			return {
				baseUrl: "https://openrouter.ai/api/v1",
				apiKey: Config.OPENROUTER_API_KEY,
			};
		} else if (llm_api_endpoint === "OpenAI") {
			return {
				baseUrl: undefined,
				apiKey: Config.OPENAI_API_KEY,
			};
		} else if (llm_api_endpoint === "local") {
			return {
				baseUrl: Config.LOCAL_API_ENDPOINT,
				apiKey: Config.LOCAL_API_KEY,
			};
		}

		throw new Error("Invalid LLM_API_ENDPOINT: `" + llm_api_endpoint + "`");
	}

	public static async promptWithHistory(args: OpenAIRoutinePromptArgs): Promise<void> {
		// Get the arguments
		const { state, systemPrompts, userPrompts, callback } = args;

		// Get the request message from the state
		const requestMessage = state.getRequestMessage();

		// Set up the system prompts
		if (systemPrompts) {
			for (const systemPrompt of systemPrompts) {
				requestMessage.addSystemPrompt(systemPrompt);
			}
		}

		// Add the history context
		requestMessage.addHistoryContext();

		// Add the user prompt
		for (const userPrompt of userPrompts) {
			requestMessage.addUserPrompt(userPrompt);
		}

		// Submit the request to OpenAI, and cycle back to handle the response
		const messages = requestMessage.generateMessages();

		const openAI = new OpenAI(this.getOpenAiParameters(args.llm));

		openAI.getCompletion({
			messages: messages as OpenAIClass.ChatCompletionMessage[],
			model: args.llm?.model || "fast",
			onMessageCallback: (content: string) => {
				process.stdout.write(content);
			},
			onCompleteCallback: (response: OpenAIClass.ChatCompletionMessage) => {
				// Update the request message with the response
				requestMessage.addGPTResponse(response);

				// Save the log
				this.saveLog(state);

				// Call the callback with the response
				callback(response);
			},
		});
	}

	public static saveLog(state: State): void {
		const requestMessage = state.getRequestMessage();
		const uuid = requestMessage.getUUID();
		const startDate = requestMessage.getStartDate();

		// Get day, month, year
		const year = startDate.getFullYear();
		const month = startDate.getMonth() + 1;
		const day = startDate.getDate();
		const date = `${year}-${month}-${day}`;

		// Create the directory if it doesn't exist
		if (!fs.existsSync(path.resolve(process.cwd(), "data/logs", date))) {
			fs.mkdirSync(path.resolve(process.cwd(), "data/logs", date), { recursive: true });
		}

		// Get hour & minute
		const hour = startDate.getHours().toString().padStart(2, "0");
		const minute = startDate.getMinutes().toString().padStart(2, "0");
		const time = `${hour}-${minute}`;

		// Save the log
		fs.writeFileSync(path.resolve(process.cwd(), "data/logs", date, `${time}-${uuid}.json`), requestMessage.serialize());
	}

	public static async getSummarization(state: State, text: string, question: string, llm?: { provider: string; model: string }): Promise<string> {
		const openAI = new OpenAI(this.getOpenAiParameters(llm));

		// Get the model
		const model = llm?.model || ModelFactory.getDefaultModel(llm.provider, "fast");
		const contextSize = ModelFactory.getModelContextLength(llm.provider, model);

		// Get the request message from the state
		const requestMessage = state.getRequestMessage();

		const chunks = TextPreprocessor.splitSentencesUsingNLP(text, contextSize);
		const summaries = [];

		// If we have a LOT of chunks, then limit to first 25
		if (chunks.length > 25) {
			console.log(`Detected ${chunks.length} chunks, limiting to first 25...`);
			chunks.splice(25);
		}

		for (const index in chunks) {
			const chunk = chunks[index];

			const prompt = this.prepareSummaryPrompt(chunk, question);

			requestMessage.addUserPrompt(prompt);

			// Submit the request to OpenAI, and cycle back to handle the response
			const messages = requestMessage.generateMessages();

			console.log(`Submitting chunk ${parseInt(index, 10) + 1} of ${chunks.length} to OpenAI...`);
			const response = await openAI.getCompletion({
				messages: messages as OpenAIClass.ChatCompletionMessage[],
				model,
				onMessageCallback: (response) => {
					process.stdout.write(response);
				},
			});

			requestMessage.addGPTResponse(response);

			summaries.push(response.content);
		}

		// If there was only one chunk, just return that
		if (summaries.length === 1) {
			return summaries[0];
		}

		// Ask once more for a summary of the summaries
		const prompt = this.prepareSummaryPrompt(summaries.join("\n"), question);

		requestMessage.addUserPrompt(prompt);

		// Submit the request to OpenAI, and cycle back to handle the response
		const messages = requestMessage.generateMessages();

		console.log(`Summarizing all chunk summaries with OpenAI...`);
		const response = await openAI.getCompletion({
			messages: messages as OpenAIClass.ChatCompletionMessage[],
			model,
			onMessageCallback: (response) => {
				process.stdout.write(response);
			},
		});

		requestMessage.addGPTResponse(response);

		return response.content;
	}

	private static prepareSummaryPrompt(text: string, question: string): string {
		return `"""${text}""" Using the above text, answer the following question: "${question}" -- if the question cannot be answered using the text, summarize the text and include as much relevant information as possible.`;
	}
}
