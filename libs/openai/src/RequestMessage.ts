import OpenAIClass from "openai";
import { v4 as uuidv4 } from "uuid";

type PromptRecord = OpenAIClass.ChatCompletionMessageParam | string;

type RequestMessageHistoryBlock = {
	prompts: PromptRecord[];
	gptResponse?: OpenAIClass.ChatCompletionMessage;
};

type RequestMessageHistory = RequestMessageHistoryBlock[];

type HistoryItem = {
	prompt: OpenAIClass.ChatCompletionMessageParam;
	response: OpenAIClass.ChatCompletionMessage;
};

export class RequestMessage {
	// Identifiers
	private uuid: string = uuidv4();
	private startDate: Date = new Date();

	private currentPrompts: RequestMessageHistoryBlock = { prompts: [] };
	private history: RequestMessageHistory = []; // Conversational history
	private log: RequestMessageHistory = []; // Total log of all messages
	private includeHistory: boolean = false;
	private tokenLimit: number = 32000;

	public getUUID(): string {
		return this.uuid;
	}

	public getStartDate(): Date {
		return this.startDate;
	}

	public getLogs(): RequestMessageHistory {
		return this.log;
	}

	public setTokenLimit(limit: number): void {
		this.tokenLimit = limit;
	}

	public serialize(): string {
		return JSON.stringify({
			uuid: this.uuid,
			startDate: this.startDate,
			currentPrompts: this.currentPrompts,
			log: this.log,
			includeHistory: this.includeHistory,
		});
	}

	public deserialize(serialized: string): void {
		const data = JSON.parse(serialized);

		this.uuid = data.uuid;
		this.startDate = new Date(data.startDate);
		this.currentPrompts = data.currentPrompts;
		this.log = data.log;
		this.history = structuredClone(data.log);
		this.includeHistory = data.includeHistory;
	}

	public addSystemPrompt(prompt: string): void {
		this.currentPrompts.prompts.push({
			role: "system",
			content: prompt,
		});
	}

	public addUserPrompt(prompt: string): void {
		this.currentPrompts.prompts.push({
			role: "user",
			content: prompt,
		});
	}

	public addHistoryContext(): void {
		this.includeHistory = true;
		this.currentPrompts.prompts.push("HISTORY_CONTEXT_HERE");
	}

	public addGPTResponse(response: OpenAIClass.ChatCompletionMessage): void {
		this.currentPrompts.gptResponse = response;
		this.log.push(structuredClone(this.currentPrompts));
		this.history.push(structuredClone(this.currentPrompts));
		this.currentPrompts = { prompts: [] };
		this.includeHistory = false;
	}

	public estimateCurrentTokenUse(): number {
		const promptsStr = this.currentPrompts.prompts.reduce((acc, item: PromptRecord) => (typeof item === "string" ? acc : acc + String(item.content)), "");
		let historyContent = "";

		if (this.includeHistory) {
			historyContent = this.buildHistoryContent();
		}

		return this.estimateTokens(promptsStr + historyContent);
	}

	public generateMessages(): OpenAIClass.ChatCompletionMessageParam[] {
		// Compile everything into a single prompt
		const messages = [];
		for (const item of this.currentPrompts.prompts) {
			if (typeof item === "string") {
				if (item === "HISTORY_CONTEXT_HERE") {
					const historyContext = this.generateHistoryContext();
					if (historyContext) {
						messages.push(historyContext);
					}
				}
			} else {
				messages.push(item);
			}
		}

		// Return the compiled prompt
		return messages;
	}

	/**
	 * Private Methods
	 */
	private generateHistoryContext(): OpenAIClass.ChatCompletionMessageParam | void {
		// Trim history until it fits within the token limit
		while (this.doesPromptExceedTokens() && this.generateConversationHistory().length > 0) {
			this.history.shift();
		}

		// Return the history context if there is any history
		if (this.generateConversationHistory().length > 0) {
			return {
				role: "system",
				content: this.buildHistoryContent(),
			};
		}
	}

	private generateConversationHistory(): { prompt: OpenAIClass.ChatCompletionMessageParam; response: OpenAIClass.ChatCompletionMessage }[] {
		const conversationHistory = [];

		for (const item of this.history) {
			if (!item.gptResponse) {
				continue;
			}

			for (const prompt of item.prompts) {
				if (typeof prompt === "string") {
					continue;
				}

				if (prompt.role === "user") {
					conversationHistory.push({
						prompt: prompt,
						response: item.gptResponse,
					});

					continue;
				}
			}
		}

		return conversationHistory;
	}

	private doesPromptExceedTokens(): boolean {
		return this.estimateCurrentTokenUse() > this.tokenLimit;
	}

	private estimateTokens(text: string): number {
		const wordCount = text.split(" ").length;
		const charCount = text.length;
		const tokensCountWordEst = wordCount / 0.75;
		const tokensCountCharEst = charCount / 4;

		return Math.floor(Math.max(tokensCountWordEst, tokensCountCharEst));
	}

	private formatHistoryItem(item: HistoryItem): string {
		return "Your Response: " + item.response.content + "\n\n";
		//return `My prompt: ${item.prompt.content}\nYour response: ${item.response.content}\n\n`;
	}

	private buildHistoryContent(): string {
		//const historyContext = `The following is your recent activity history:\n\n`;
		const historyContext = `The following are your recent responses and decisions related to the initial prompt:\n\n`;
		const historyStr = this.generateConversationHistory().reduce((acc, item) => acc + this.formatHistoryItem(item), "");

		return historyContext + historyStr;
	}
}
