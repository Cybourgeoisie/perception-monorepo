export const LocalModels = {
	"ollama/llama3-8b": {
		"id": "llama3:8b",
		"name": "Meta: Llama 3 8B",
		"description": "",
		"pricing": {
			"prompt": "0.00000001",
			"completion": "0.00000001",
			"image": "0",
			"request": "0",
		},
		"context_length": 8192,
		"architecture": {
			"modality": "text",
			"tokenizer": "Llama3",
			"instruct_type": "llama",
		},
		"top_provider": {
			"max_completion_tokens": null,
			"is_moderated": false,
		},
		"per_request_limits": {
			"prompt_tokens": "-1",
			"completion_tokens": "-1",
		},
	},
};
