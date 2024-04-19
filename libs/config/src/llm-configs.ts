export const LLMConfigs = {
	default: {
		models: {
			openai: {
				fast: "gpt-3.5-turbo-16k",
				best: "gpt-4",
				large: "gpt-4-32k",
			},
			openrouter: {
				fast: "openai/gpt-4-32k", //"meta-llama/llama-3-70b-instruct", // "openai/gpt-3.5-turbo-0125", //"openai/gpt-3.5-turbo-16k", // "anthropic/claude-3-sonnet", // "meta-llama/llama-3-70b-instruct"
				best: "openai/gpt-4-32k", //"meta-llama/llama-3-70b-instruct", //"openai/gpt-4",
				large: "openai/gpt-4-32k", //"meta-llama/llama-3-70b-instruct", //"openai/gpt-4-32k",
			},
			local: {
				fast: "llama3:8b",
				best: "llama3:8b",
				large: "llama3:8b",
			},
		},
		maxCompletionAttempts: 3,
		temperature: 0.5,
		n: 1,
	},
};
