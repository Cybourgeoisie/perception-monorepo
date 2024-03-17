import { config as cfg } from "@config";
import OpenAIClass from "openai";

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
	private currentPrompts: RequestMessageHistoryBlock = { prompts: [] };
	private history: RequestMessageHistory = [];
	private includeHistory: boolean = false;
	private tokenLimit: number = cfg.FAST_TOKEN_LIMIT;

	public setTokenLimit(limit: number): void {
		this.tokenLimit = limit;
	}

	public serialize(): string {
		return JSON.stringify({
			currentPrompts: this.currentPrompts,
			history: this.history,
			includeHistory: this.includeHistory,
		});
	}

	public deserialize(serialized: string): void {
		const data = JSON.parse(serialized);

		this.currentPrompts = data.currentPrompts;
		this.history = data.history;
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

	public generateHistoryContext(): OpenAIClass.ChatCompletionMessageParam | void {
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

	public estimateCurrentTokenUse(): number {
		const promptsStr = this.currentPrompts.prompts.reduce((acc, item: PromptRecord) => (typeof item === "string" ? acc : acc + String(item.content)), "");
		let historyContent = "";

		if (this.includeHistory) {
			historyContent = this.buildHistoryContent();
		}

		return this.estimateTokens(promptsStr + historyContent);
	}

	public doesPromptExceedTokens(): boolean {
		return this.estimateCurrentTokenUse() > this.tokenLimit;
	}

	public estimateTokens(text: string): number {
		const wordCount = text.split(" ").length;
		const charCount = text.length;
		const tokensCountWordEst = wordCount / 0.75;
		const tokensCountCharEst = charCount / 4;

		return Math.floor(Math.max(tokensCountWordEst, tokensCountCharEst));
	}

	private formatHistoryItem(item: HistoryItem): string {
		return `My prompt: ${item.prompt.content}\nYour response: ${item.response.content}\n\n`;
	}

	private buildHistoryContent(): string {
		const historyContext = `The following is your recent activity history:\n\n`;
		const historyStr = this.generateConversationHistory().reduce((acc, item) => acc + this.formatHistoryItem(item), "");

		return historyContext + historyStr;
	}

	public addGPTResponse(response: OpenAIClass.ChatCompletionMessage): void {
		this.currentPrompts.gptResponse = response;
		this.history.push(this.currentPrompts);
		this.currentPrompts = { prompts: [] };
		this.includeHistory = false;
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

		// If using debug mode, print out the messages
		//console.debug(messages);

		// Return the compiled prompt
		return messages;
	}

	public generateConversationHistory(): { prompt: OpenAIClass.ChatCompletionMessageParam; response: OpenAIClass.ChatCompletionMessage }[] {
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
}
