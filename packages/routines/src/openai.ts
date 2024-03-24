import { Config } from "@config";
import { OpenAI, State } from "@openai";
import OpenAIClass from "openai";
import natural from "natural";

export type OpenAIRoutinePromptArgs = {
	state: State;
	systemPrompts?: string[];
	userPrompt: string;
	callback: (s: OpenAIClass.ChatCompletionMessageParam) => void;
};

export class OpenAIRoutine {
	public static getName(): string {
		return "OpenAI chat completion";
	}

	public static getDescription(): string {
		return "Submit prompts to OpenAI's chat completion API";
	}

	public static async promptWithHistory(args: OpenAIRoutinePromptArgs): Promise<void> {
		// Get the arguments
		const { state, systemPrompts, userPrompt, callback } = args;

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
		requestMessage.addUserPrompt(userPrompt);

		// Submit the request to OpenAI, and cycle back to handle the response
		const messages = requestMessage.generateMessages();

		const openAI = new OpenAI({
			baseUrl: Config.LLM_API_ENDPOINT === "OpenRouter" ? "https://openrouter.ai/api/v1" : undefined,
			apiKey: Config.LLM_API_ENDPOINT === "OpenRouter" ? Config.OPENROUTER_API_KEY : Config.OPENAI_API_KEY,
		});

		openAI.getCompletion({
			messages: messages as OpenAIClass.ChatCompletionMessage[],
			model: "best",
			onMessageCallback: (content: string) => {
				process.stdout.write(content);
			},
			onCompleteCallback: (response: OpenAIClass.ChatCompletionMessage) => {
				requestMessage.addGPTResponse(response);
				callback(response);
			},
		});
	}

	public static async getSummarization(state: State, text: string, question: string): Promise<string> {
		const openAI = new OpenAI({
			baseUrl: "https://openrouter.ai/api/v1",
			apiKey: Config.OPENROUTER_API_KEY,
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
				model: "best",
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
			model: "best",
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
