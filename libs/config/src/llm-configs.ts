export const LLMConfigs = {
	default: {
		models: {
			openai: {
				fast: "gpt-3.5-turbo-16k",
				best: "gpt-4",
			},
			openrouter: {
				fast: "openai/gpt-3.5-turbo-16k",
				best: "openai/gpt-4",
			},
		},
		maxCompletionAttempts: 3,
		temperature: 0.5,
		n: 1,
	},
};
