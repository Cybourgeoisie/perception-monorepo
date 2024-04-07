export const LLMConfigs = {
	default: {
		models: {
			openai: {
				fast: "gpt-3.5-turbo-16k",
				best: "gpt-4",
				large: "gpt-4-32k",
			},
			openrouter: {
				fast: "openai/gpt-3.5-turbo-0125", //"openai/gpt-3.5-turbo-16k", // "anthropic/claude-3-sonnet",
				best: "openai/gpt-4",
				large: "openai/gpt-4-32k",
			},
		},
		maxCompletionAttempts: 3,
		temperature: 0.5,
		n: 1,
	},
};
