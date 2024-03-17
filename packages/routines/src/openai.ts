import { config as cfg } from "@config";
import { OpenAI, State } from "@openai";
import { PromptCLI } from "@prompt-cli";
import { Models } from "@models";
import OpenAIClass from "openai";
import natural from "natural";

export class OpenAIRoutine {
	public static getName(): string {
		return "OpenAI chat completion";
	}

	public static getDescription(): string {
		return "Submit prompts to OpenAI's chat completion API";
	}

	public static async promptWithHistory(state: State, callback: (s: OpenAIClass.ChatCompletionMessageParam) => void): Promise<void> {
		// Get the user's prompt
		const prompt = await PromptCLI.text(`Prompt (type "q" to exit):`);
		if (PromptCLI.quitCommands.includes(prompt)) {
			process.exit();
		}

		// Get the request message from the state
		const requestMessage = state.getRequestMessage();

		// Construct the request message based on history
		requestMessage.addHistoryContext();
		requestMessage.addUserPrompt(prompt);

		// Submit the request to OpenAI, and cycle back to handle the response
		const messages = requestMessage.generateMessages();

		const openAI = new OpenAI({
			baseUrl: cfg.USE_OPENROUTER ? "https://openrouter.ai/api/v1" : undefined,
			apiKey: cfg.USE_OPENROUTER ? cfg.OPENROUTER_API_KEY : cfg.OPENAI_API_KEY,
		});

		openAI.getCompletion({
			messages: messages as OpenAIClass.ChatCompletionMessage[],
			model: cfg.USE_OPENROUTER ? Models["claude3-haiku"].model : Models.gpt4.model,
			onMessageCallback: (content: string) => {
				process.stdout.write(content);
			},
			onCompleteCallback: (content: OpenAIClass.ChatCompletionMessage) => {
				requestMessage.addGPTResponse(content);
				callback(content);
			},
		});
	}

	public static async getSummarization(state: State, text: string, question: string): Promise<string> {
		const openAI = new OpenAI({
			baseUrl: "https://openrouter.ai/api/v1",
			apiKey: cfg.OPENROUTER_API_KEY,
		});

		// Get the request message from the state
		const requestMessage = state.getRequestMessage();

		const chunks = this.splitSentencesUsingNLP(text, 8192);
		const summaries = [];

		for (const index in chunks) {
			const chunk = chunks[index];

			const prompt = this.prepareSummaryPrompt(chunk, question);

			requestMessage.addUserPrompt(prompt);

			// Submit the request to OpenAI, and cycle back to handle the response
			const messages = requestMessage.generateMessages();

			console.log(`Submitting chunk ${parseInt(index, 10) + 1} of ${chunks.length} to OpenAI...`);
			const response = await openAI.getCompletion({
				messages: messages as OpenAIClass.ChatCompletionMessage[],
				model: Models.gpt4.model,
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
			model: Models.gpt4.model,
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

	private static splitSentencesUsingNLP(text: string, chunkSize: number): string[] {
		const tokenizer = new natural.SentenceTokenizer();
		const sentences = tokenizer.tokenize(text);

		const chunks = [];
		let currentChunk = "";
		while (currentChunk.length < chunkSize) {
			if (sentences.length === 0) {
				break;
			}

			currentChunk += sentences.shift() + " ";

			if (sentences.length === 0) {
				break;
			}

			if (currentChunk.length + sentences[0].length > chunkSize) {
				chunks.push(currentChunk);
				currentChunk = "";
			}
		}

		// Get the last bit of text
		if (currentChunk.length > 0) {
			chunks.push(currentChunk);
			currentChunk = "";
		}

		return chunks;
	}
}
