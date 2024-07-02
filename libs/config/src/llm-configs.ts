export const LLMConfigs = {
	models: {
		openai: {
			fast: "gpt-3.5-turbo-16k",
			best: "gpt-4",
			large: "gpt-3.5-turbo-16k",
		},
		openrouter: {
			fast: "openai/gpt-3.5-turbo-16k",
			best: "meta-llama/llama-3-70b-instruct", //"openai/gpt-4",
			large: "openai/gpt-3.5-turbo-16k", //"openai/gpt-4-32k",
		},
		local: {
			fast: "llama3:8b",
			best: "llama3:8b",
			large: "llama3:8b",
		},
		anthropic: {
			fast: "claude-3-5-sonnet-20240620",
			best: "claude-3-5-sonnet-20240620",
			large: "claude-3-opus-20240229",
		},
	},
	maxCompletionAttempts: 3,
	default: {
		openai: {
			temperature: 0.5,
			n: 1,
		},
		anthropic: {
			temperature: 0.5,
			max_tokens: 4096,
		},
	},
};
