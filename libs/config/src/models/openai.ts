export const OpenAiModels = {
	"gpt-3.5-turbo": {
		"id": "gpt-3.5-turbo",
		"name": "OpenAI: GPT-3.5 Turbo",
		"description":
			"GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks. Training data: up to Sep 2021.",
		"pricing": {
			"prompt": "0.000001",
			"completion": "0.000002",
			"image": "0",
			"request": "0",
		},
		"context_length": 4095,
		"architecture": {
			"modality": "text",
			"tokenizer": "GPT",
			"instruct_type": null,
		},
		"top_provider": {
			"max_completion_tokens": null,
			"is_moderated": true,
		},
		"per_request_limits": {
			"prompt_tokens": "30885569",
			"completion_tokens": "15442784",
		},
	},
	"gpt-3.5-turbo-0125": {
		"id": "gpt-3.5-turbo-0125",
		"name": "OpenAI: GPT-3.5 Turbo 16k",
		"description":
			"The latest GPT-3.5 Turbo model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Training data: up to Sep 2021.\n\nThis version has a higher accuracy at responding in requested formats and a fix for a bug which caused a text encoding issue for non-English language function calls.",
		"pricing": {
			"prompt": "0.0000005",
			"completion": "0.0000015",
			"image": "0",
			"request": "0",
		},
		"context_length": 16385,
		"architecture": {
			"modality": "text",
			"tokenizer": "GPT",
			"instruct_type": null,
		},
		"top_provider": {
			"max_completion_tokens": 4096,
			"is_moderated": true,
		},
		"per_request_limits": {
			"prompt_tokens": "61771138",
			"completion_tokens": "20590379",
		},
	},
	"gpt-3.5-turbo-1106": {
		"id": "gpt-3.5-turbo-1106",
		"name": "OpenAI: GPT-3.5 Turbo 16k (older v1106)",
		"description":
			"The latest GPT-3.5 Turbo model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Training data: up to Sep 2021.",
		"pricing": {
			"prompt": "0.000001",
			"completion": "0.000002",
			"image": "0",
			"request": "0",
		},
		"context_length": 16385,
		"architecture": {
			"modality": "text",
			"tokenizer": "GPT",
			"instruct_type": null,
		},
		"top_provider": {
			"max_completion_tokens": 4096,
			"is_moderated": true,
		},
		"per_request_limits": {
			"prompt_tokens": "30885569",
			"completion_tokens": "15442784",
		},
	},
	"gpt-3.5-turbo-0613": {
		"id": "gpt-3.5-turbo-0613",
		"name": "OpenAI: GPT-3.5 Turbo (older v0613)",
		"description":
			"GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks. Training data: up to Sep 2021.",
		"pricing": {
			"prompt": "0.000001",
			"completion": "0.000002",
			"image": "0",
			"request": "0",
		},
		"context_length": 4095,
		"architecture": {
			"modality": "text",
			"tokenizer": "GPT",
			"instruct_type": null,
		},
		"top_provider": {
			"max_completion_tokens": null,
			"is_moderated": true,
		},
		"per_request_limits": {
			"prompt_tokens": "30885569",
			"completion_tokens": "15442784",
		},
	},
	"gpt-3.5-turbo-0301": {
		"id": "gpt-3.5-turbo-0301",
		"name": "OpenAI: GPT-3.5 Turbo (older v0301)",
		"description":
			"GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks. Training data: up to Sep 2021.",
		"pricing": {
			"prompt": "0.000001",
			"completion": "0.000002",
			"image": "0",
			"request": "0",
		},
		"context_length": 4095,
		"architecture": {
			"modality": "text",
			"tokenizer": "GPT",
			"instruct_type": null,
		},
		"top_provider": {
			"max_completion_tokens": null,
			"is_moderated": true,
		},
		"per_request_limits": {
			"prompt_tokens": "30885569",
			"completion_tokens": "15442784",
		},
	},
	"gpt-3.5-turbo-16k": {
		"id": "gpt-3.5-turbo-16k",
		"name": "OpenAI: GPT-3.5 Turbo 16k",
		"description":
			"This model offers four times the context length of gpt-3.5-turbo, allowing it to support approximately 20 pages of text in a single request at a higher cost. Training data: up to Sep 2021.",
		"pricing": {
			"prompt": "0.000003",
			"completion": "0.000004",
			"image": "0",
			"request": "0",
		},
		"context_length": 16385,
		"architecture": {
			"modality": "text",
			"tokenizer": "GPT",
			"instruct_type": null,
		},
		"top_provider": {
			"max_completion_tokens": null,
			"is_moderated": true,
		},
		"per_request_limits": {
			"prompt_tokens": "10295189",
			"completion_tokens": "7721392",
		},
	},
	"gpt-4-turbo-preview": {
		"id": "gpt-4-turbo-preview",
		"name": "OpenAI: GPT-4 Turbo",
		"description":
			"The latest GPT-4 model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Training data: up to Apr 2023.\n\n**Note:** heavily rate limited by OpenAI while in preview.",
		"pricing": {
			"prompt": "0.00001",
			"completion": "0.00003",
			"image": "0",
			"request": "0",
		},
		"context_length": 128000,
		"architecture": {
			"modality": "text",
			"tokenizer": "GPT",
			"instruct_type": null,
		},
		"top_provider": {
			"max_completion_tokens": 4096,
			"is_moderated": true,
		},
		"per_request_limits": {
			"prompt_tokens": "3088556",
			"completion_tokens": "1029518",
		},
	},
	"gpt-4-1106-preview": {
		"id": "gpt-4-1106-preview",
		"name": "OpenAI: GPT-4 Turbo (older v1106)",
		"description":
			"The latest GPT-4 model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Training data: up to Apr 2023.\n\n**Note:** heavily rate limited by OpenAI while in preview.",
		"pricing": {
			"prompt": "0.00001",
			"completion": "0.00003",
			"image": "0",
			"request": "0",
		},
		"context_length": 128000,
		"architecture": {
			"modality": "text",
			"tokenizer": "GPT",
			"instruct_type": null,
		},
		"top_provider": {
			"max_completion_tokens": 4096,
			"is_moderated": true,
		},
		"per_request_limits": {
			"prompt_tokens": "3088556",
			"completion_tokens": "1029518",
		},
	},
	"gpt-4": {
		"id": "gpt-4",
		"name": "OpenAI: GPT-4",
		"description":
			"OpenAI's flagship model, GPT-4 is a large-scale multimodal language model capable of solving difficult problems with greater accuracy than previous models due to its broader general knowledge and advanced reasoning capabilities. Training data: up to Sep 2021.",
		"pricing": {
			"prompt": "0.00003",
			"completion": "0.00006",
			"image": "0",
			"request": "0",
		},
		"context_length": 8191,
		"architecture": {
			"modality": "text",
			"tokenizer": "GPT",
			"instruct_type": null,
		},
		"top_provider": {
			"max_completion_tokens": null,
			"is_moderated": true,
		},
		"per_request_limits": {
			"prompt_tokens": "1029518",
			"completion_tokens": "514759",
		},
	},
	"gpt-4-0314": {
		"id": "gpt-4-0314",
		"name": "OpenAI: GPT-4 (older v0314)",
		"description":
			"GPT-4-0314 is the first version of GPT-4 released, with a context length of 8,192 tokens, and was supported until June 14. Training data: up to Sep 2021.",
		"pricing": {
			"prompt": "0.00003",
			"completion": "0.00006",
			"image": "0",
			"request": "0",
		},
		"context_length": 8191,
		"architecture": {
			"modality": "text",
			"tokenizer": "GPT",
			"instruct_type": null,
		},
		"top_provider": {
			"max_completion_tokens": null,
			"is_moderated": true,
		},
		"per_request_limits": {
			"prompt_tokens": "1029518",
			"completion_tokens": "514759",
		},
	},
	"gpt-4-32k": {
		"id": "gpt-4-32k",
		"name": "OpenAI: GPT-4 32k",
		"description":
			"GPT-4-32k is an extended version of GPT-4, with the same capabilities but quadrupled context length, allowing for processing up to 40 pages of text in a single pass. This is particularly beneficial for handling longer content like interacting with PDFs without an external vector database. Training data: up to Sep 2021.",
		"pricing": {
			"prompt": "0.00006",
			"completion": "0.00012",
			"image": "0",
			"request": "0",
		},
		"context_length": 32767,
		"architecture": {
			"modality": "text",
			"tokenizer": "GPT",
			"instruct_type": null,
		},
		"top_provider": {
			"max_completion_tokens": null,
			"is_moderated": true,
		},
		"per_request_limits": {
			"prompt_tokens": "514759",
			"completion_tokens": "257379",
		},
	},
	"gpt-4-32k-0314": {
		"id": "gpt-4-32k-0314",
		"name": "OpenAI: GPT-4 32k (older v0314)",
		"description":
			"GPT-4-32k is an extended version of GPT-4, with the same capabilities but quadrupled context length, allowing for processing up to 40 pages of text in a single pass. This is particularly beneficial for handling longer content like interacting with PDFs without an external vector database. Training data: up to Sep 2021.",
		"pricing": {
			"prompt": "0.00006",
			"completion": "0.00012",
			"image": "0",
			"request": "0",
		},
		"context_length": 32767,
		"architecture": {
			"modality": "text",
			"tokenizer": "GPT",
			"instruct_type": null,
		},
		"top_provider": {
			"max_completion_tokens": null,
			"is_moderated": true,
		},
		"per_request_limits": {
			"prompt_tokens": "514759",
			"completion_tokens": "257379",
		},
	},
	"gpt-4-vision-preview": {
		"id": "gpt-4-vision-preview",
		"name": "OpenAI: GPT-4 Vision",
		"description":
			"Ability to understand images, in addition to all other [GPT-4 Turbo capabilties](/models/gpt-4-turbo-preview). Training data: up to Apr 2023.\n\n**Note:** heavily rate limited by OpenAI while in preview.\n\n#multimodal",
		"pricing": {
			"prompt": "0.00001",
			"completion": "0.00003",
			"image": "0.01445",
			"request": "0",
		},
		"context_length": 128000,
		"architecture": {
			"modality": "multimodal",
			"tokenizer": "GPT",
			"instruct_type": null,
		},
		"top_provider": {
			"max_completion_tokens": 4096,
			"is_moderated": true,
		},
		"per_request_limits": {
			"prompt_tokens": "3088556",
			"completion_tokens": "1029518",
		},
	},
	"gpt-3.5-turbo-instruct": {
		"id": "gpt-3.5-turbo-instruct",
		"name": "OpenAI: GPT-3.5 Turbo Instruct",
		"description":
			"This model is a variant of GPT-3.5 Turbo tuned for instructional prompts and omitting chat-related optimizations. Training data: up to Sep 2021.",
		"pricing": {
			"prompt": "0.0000015",
			"completion": "0.000002",
			"image": "0",
			"request": "0",
		},
		"context_length": 4095,
		"architecture": {
			"modality": "text",
			"tokenizer": "GPT",
			"instruct_type": "gpt",
		},
		"top_provider": {
			"max_completion_tokens": null,
			"is_moderated": true,
		},
		"per_request_limits": {
			"prompt_tokens": "20590379",
			"completion_tokens": "15442784",
		},
	},
};
