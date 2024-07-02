export const OpenRouterModels = {
    "openrouter/auto": {
        "id": "openrouter/auto",
        "name": "Auto (best for prompt)",
        "description": "Depending on their size, subject, and complexity, your prompts will be sent to [Mistral Large](/models/mistralai/mistral-large), [Claude 3.5 Sonnet (self-moderated)](/models/anthropic/claude-3.5-sonnet:beta) or [GPT-4o](/models/openai/gpt-4o).  To see which model was used, visit [Activity](/activity).\n\nA major redesign of this router is coming soon. Stay tuned on [Discord](https://discord.gg/fVyRaUDgxW) for updates.",
        "pricing": {
            "prompt": "-1",
            "completion": "-1",
            "request": "-1",
            "image": "-1"
        },
        "context_length": 200000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Router",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": null
    },
    "openrouter/flavor-of-the-week": {
        "id": "openrouter/flavor-of-the-week",
        "name": "Flavor of The Week",
        "description": "This is a router model that rotates its underlying model weekly. It aims to be a simple way to explore the capabilities of new models while using the same model ID.\n\nThe current underlying model is [Llama 3 Stheno 8B v3.3 32K](/models/sao10k/l3-stheno-8b).\n\nNOTE: Pricing depends on the underlying model as well as the provider routed to. To see which model and provider were used, visit [Activity](/activity).",
        "pricing": {
            "prompt": "-1",
            "completion": "-1",
            "request": "-1",
            "image": "-1"
        },
        "context_length": 32000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Router",
            "instruct_type": "llama3"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": null
    },
    "nousresearch/nous-capybara-7b:free": {
        "id": "nousresearch/nous-capybara-7b:free",
        "name": "Nous: Capybara 7B (free)",
        "description": "The Capybara series is a collection of datasets and models made by fine-tuning on data created by Nous, mostly in-house.\n\nV1.9 uses unalignment techniques for more consistent and dynamic control. It also leverages a significantly better foundation model, [Mistral 7B](/models/mistralai/mistral-7b-instruct-v0.1).\n\nNote: this is a free, rate-limited version of [Capybara 7B](/models/nousresearch/nous-capybara-7b). Outputs may be cached. Read about rate limits [here](/docs/limits).",
        "pricing": {
            "prompt": "0",
            "completion": "0",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "airoboros"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "Infinity",
            "completion_tokens": "Infinity"
        }
    },
    "mistralai/mistral-7b-instruct:free": {
        "id": "mistralai/mistral-7b-instruct:free",
        "name": "Mistral: Mistral 7B Instruct (free)",
        "description": "A high-performing, industry-standard 7.3B parameter model, with optimizations for speed and context length.\n\nNote: this is a free, rate-limited version of [Mistral 7B Instruct](/models/mistralai/mistral-7b-instruct). Outputs may be cached. Read about rate limits [here](/docs/limits).",
        "pricing": {
            "prompt": "0",
            "completion": "0",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "mistral"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "Infinity",
            "completion_tokens": "Infinity"
        }
    },
    "huggingfaceh4/zephyr-7b-beta:free": {
        "id": "huggingfaceh4/zephyr-7b-beta:free",
        "name": "Hugging Face: Zephyr 7B (free)",
        "description": "Zephyr is a series of language models that are trained to act as helpful assistants. Zephyr-7B-β is the second model in the series, and is a fine-tuned version of [mistralai/Mistral-7B-v0.1](/models/mistralai/mistral-7b-instruct-v0.1) that was trained on a mix of publicly available, synthetic datasets using Direct Preference Optimization (DPO).\n\nNote: this is a free, rate-limited version of [Zephyr 7B](/models/huggingfaceh4/zephyr-7b-beta). Outputs may be cached. Read about rate limits [here](/docs/limits).",
        "pricing": {
            "prompt": "0",
            "completion": "0",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "zephyr"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "Infinity",
            "completion_tokens": "Infinity"
        }
    },
    "openchat/openchat-7b:free": {
        "id": "openchat/openchat-7b:free",
        "name": "OpenChat 3.5 7B (free)",
        "description": "OpenChat 7B is a library of open-source language models, fine-tuned with \"C-RLFT (Conditioned Reinforcement Learning Fine-Tuning)\" - a strategy inspired by offline reinforcement learning. It has been trained on mixed-quality data without preference labels.\n\n- For OpenChat fine-tuned on Mistral 7B, check out [OpenChat 7B](/models/openchat/openchat-7b).\n- For OpenChat fine-tuned on Llama 8B, check out [OpenChat 8B](/models/openchat/openchat-8b).\n\n#open-source\n\nNote: this is a free, rate-limited version of [OpenChat 3.5 7B](/models/openchat/openchat-7b). Outputs may be cached. Read about rate limits [here](/docs/limits).",
        "pricing": {
            "prompt": "0",
            "completion": "0",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "openchat"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "Infinity",
            "completion_tokens": "Infinity"
        }
    },
    "gryphe/mythomist-7b:free": {
        "id": "gryphe/mythomist-7b:free",
        "name": "MythoMist 7B (free)",
        "description": "From the creator of [MythoMax](/models/gryphe/mythomax-l2-13b), merges a suite of models to reduce word anticipation, ministrations, and other undesirable words in ChatGPT roleplaying data.\n\nIt combines [Neural Chat 7B](/models/intel/neural-chat-7b), Airoboros 7b, [Toppy M 7B](/models/undi95/toppy-m-7b), [Zepher 7b beta](/models/huggingfaceh4/zephyr-7b-beta), [Nous Capybara 34B](/models/nousresearch/nous-capybara-34b), [OpenHeremes 2.5](/models/teknium/openhermes-2.5-mistral-7b), and many others.\n\n#merge\n\nNote: this is a free, rate-limited version of [MythoMist 7B](/models/gryphe/mythomist-7b). Outputs may be cached. Read about rate limits [here](/docs/limits).",
        "pricing": {
            "prompt": "0",
            "completion": "0",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": 2048,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "Infinity",
            "completion_tokens": "Infinity"
        }
    },
    "undi95/toppy-m-7b:free": {
        "id": "undi95/toppy-m-7b:free",
        "name": "Toppy M 7B (free)",
        "description": "A wild 7B parameter model that merges several models using the new task_arithmetic merge method from mergekit.\nList of merged models:\n- NousResearch/Nous-Capybara-7B-V1.9\n- [HuggingFaceH4/zephyr-7b-beta](/models/huggingfaceh4/zephyr-7b-beta)\n- lemonilia/AshhLimaRP-Mistral-7B\n- Vulkane/120-Days-of-Sodom-LoRA-Mistral-7b\n- Undi95/Mistral-pippa-sharegpt-7b-qlora\n\n#merge #uncensored\n\nNote: this is a free, rate-limited version of [Toppy M 7B](/models/undi95/toppy-m-7b). Outputs may be cached. Read about rate limits [here](/docs/limits).",
        "pricing": {
            "prompt": "0",
            "completion": "0",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "Infinity",
            "completion_tokens": "Infinity"
        }
    },
    "google/gemma-7b-it:free": {
        "id": "google/gemma-7b-it:free",
        "name": "Google: Gemma 7B (free)",
        "description": "Gemma by Google is an advanced, open-source language model family, leveraging the latest in decoder-only, text-to-text technology. It offers English language capabilities across text generation tasks like question answering, summarization, and reasoning. The Gemma 7B variant is comparable in performance to leading open source models.\n\nUsage of Gemma is subject to Google's [Gemma Terms of Use](https://ai.google.dev/gemma/terms).\n\nNote: this is a free, rate-limited version of [Gemma 7B](/models/google/gemma-7b-it). Outputs may be cached. Read about rate limits [here](/docs/limits).",
        "pricing": {
            "prompt": "0",
            "completion": "0",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Gemini",
            "instruct_type": "gemma"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "Infinity",
            "completion_tokens": "Infinity"
        }
    },
    "google/gemma-2-9b-it:free": {
        "id": "google/gemma-2-9b-it:free",
        "name": "Google: Gemma 2 9B (free)",
        "description": "Gemma 2 9B by Google is an advanced, open-source language model that sets a new standard for efficiency and performance in its size class.\n\nDesigned for a wide variety of tasks, it empowers developers and researchers to build innovative applications, while maintaining accessibility, safety, and cost-effectiveness.\n\nSee the [launch announcement](https://blog.google/technology/developers/google-gemma-2/) for more details. Usage of Gemma is subject to Google's [Gemma Terms of Use](https://ai.google.dev/gemma/terms).\n\nNote: this is a free, rate-limited version of [Gemma 2 9B](/models/google/gemma-2-9b-it). Outputs may be cached. Read about rate limits [here](/docs/limits).",
        "pricing": {
            "prompt": "0",
            "completion": "0",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Gemini",
            "instruct_type": "gemma"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "Infinity",
            "completion_tokens": "Infinity"
        }
    },
    "meta-llama/llama-3-8b-instruct:free": {
        "id": "meta-llama/llama-3-8b-instruct:free",
        "name": "Meta: Llama 3 8B Instruct (free)",
        "description": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 8B instruct-tuned version was optimized for high quality dialogue usecases.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).\n\nNote: this is a free, rate-limited version of [Llama 3 8B Instruct](/models/meta-llama/llama-3-8b-instruct). Outputs may be cached. Read about rate limits [here](/docs/limits).",
        "pricing": {
            "prompt": "0",
            "completion": "0",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": "llama3"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "Infinity",
            "completion_tokens": "Infinity"
        }
    },
    "microsoft/phi-3-mini-128k-instruct:free": {
        "id": "microsoft/phi-3-mini-128k-instruct:free",
        "name": "Phi-3 Mini 128K Instruct (free)",
        "description": "Phi-3 Mini is a powerful 3.8B parameter model designed for advanced language understanding, reasoning, and instruction following. Optimized through supervised fine-tuning and preference adjustments, it excels in tasks involving common sense, mathematics, logical reasoning, and code processing.\n\nAt time of release, Phi-3 Medium demonstrated state-of-the-art performance among lightweight models. This model is static, trained on an offline dataset with an October 2023 cutoff date.\n\nNote: this is a free, rate-limited version of [Phi-3 Mini 128K Instruct](/models/microsoft/phi-3-mini-128k-instruct). Outputs may be cached. Read about rate limits [here](/docs/limits).",
        "pricing": {
            "prompt": "0",
            "completion": "0",
            "image": "0",
            "request": "0"
        },
        "context_length": 128000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Other",
            "instruct_type": "phi3"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "Infinity",
            "completion_tokens": "Infinity"
        }
    },
    "microsoft/phi-3-medium-128k-instruct:free": {
        "id": "microsoft/phi-3-medium-128k-instruct:free",
        "name": "Phi-3 Medium 128K Instruct (free)",
        "description": "Phi-3 128K Medium is a powerful 14-billion parameter model designed for advanced language understanding, reasoning, and instruction following. Optimized through supervised fine-tuning and preference adjustments, it excels in tasks involving common sense, mathematics, logical reasoning, and code processing.\n\nAt time of release, Phi-3 Medium demonstrated state-of-the-art performance among lightweight models. In the MMLU-Pro eval, the model even comes close to a Llama3 70B level of performance.\n\nFor 4k context length, try [Phi-3 Medium 4K](/models/microsoft/phi-3-medium-4k-instruct).\n\nNote: this is a free, rate-limited version of [Phi-3 Medium 128K Instruct](/models/microsoft/phi-3-medium-128k-instruct). Outputs may be cached. Read about rate limits [here](/docs/limits).",
        "pricing": {
            "prompt": "0",
            "completion": "0",
            "image": "0",
            "request": "0"
        },
        "context_length": 128000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Other",
            "instruct_type": "phi3"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "Infinity",
            "completion_tokens": "Infinity"
        }
    },
    "koboldai/psyfighter-13b-2": {
        "id": "koboldai/psyfighter-13b-2",
        "name": "Psyfighter v2 13B",
        "description": "The v2 of [Psyfighter](/models/jebcarter/psyfighter-13b) - a merged model created by the KoboldAI community members Jeb Carter and TwistedShadows, made possible thanks to the KoboldAI merge request service.\n\nThe intent was to add medical data to supplement the model's fictional ability with more details on anatomy and mental states. This model should not be used for medical advice or therapy because of its high likelihood of pulling in fictional data.\n\nIt's a merge between:\n\n- [KoboldAI/LLaMA2-13B-Tiefighter](https://huggingface.co/KoboldAI/LLaMA2-13B-Tiefighter)\n- [Doctor-Shotgun/cat-v1.0-13b](https://huggingface.co/Doctor-Shotgun/cat-v1.0-13b)\n- [Doctor-Shotgun/llama-2-13b-chat-limarp-v2-merged](https://huggingface.co/Doctor-Shotgun/llama-2-13b-chat-limarp-v2-merged).\n\n#merge",
        "pricing": {
            "prompt": "0.000001",
            "completion": "0.000001",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "21792346",
            "completion_tokens": "21792346"
        }
    },
    "intel/neural-chat-7b": {
        "id": "intel/neural-chat-7b",
        "name": "Neural Chat 7B v3.1",
        "description": "A fine-tuned model based on [mistralai/Mistral-7B-v0.1](/models/mistralai/mistral-7b-instruct-v0.1) on the open source dataset [Open-Orca/SlimOrca](https://huggingface.co/datasets/Open-Orca/SlimOrca), aligned with DPO algorithm. For more details, refer to the blog: [The Practice of Supervised Fine-tuning and Direct Preference Optimization on Habana Gaudi2](https://medium.com/@NeuralCompressor/the-practice-of-supervised-finetuning-and-direct-preference-optimization-on-habana-gaudi2-a1197d8a3cd3).",
        "pricing": {
            "prompt": "0.000005",
            "completion": "0.000005",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "neural"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "4358469",
            "completion_tokens": "4358469"
        }
    },
    "mancer/weaver": {
        "id": "mancer/weaver",
        "name": "Mancer: Weaver (alpha)",
        "description": "An attempt to recreate Claude-style verbosity, but don't expect the same level of coherence or memory. Meant for use in roleplay/narrative situations.",
        "pricing": {
            "prompt": "0.000001875",
            "completion": "0.00000225",
            "image": "0",
            "request": "0"
        },
        "context_length": 8000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": 1000,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "11622584",
            "completion_tokens": "9685487"
        }
    },
    "pygmalionai/mythalion-13b": {
        "id": "pygmalionai/mythalion-13b",
        "name": "Pygmalion: Mythalion 13B",
        "description": "A blend of the new Pygmalion-13b and MythoMax. #merge",
        "pricing": {
            "prompt": "0.000001125",
            "completion": "0.000001125",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": 400,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "19370974",
            "completion_tokens": "19370974"
        }
    },
    "xwin-lm/xwin-lm-70b": {
        "id": "xwin-lm/xwin-lm-70b",
        "name": "Xwin 70B",
        "description": "Xwin-LM aims to develop and open-source alignment tech for LLMs. Our first release, built-upon on the [Llama2](/models/${Model.Llama_2_13B_Chat}) base models, ranked TOP-1 on AlpacaEval. Notably, it's the first to surpass [GPT-4](/models/${Model.GPT_4}) on this benchmark. The project will be continuously updated.",
        "pricing": {
            "prompt": "0.00000375",
            "completion": "0.00000375",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "airoboros"
        },
        "top_provider": {
            "max_completion_tokens": 400,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "5811292",
            "completion_tokens": "5811292"
        }
    },
    "alpindale/goliath-120b": {
        "id": "alpindale/goliath-120b",
        "name": "Goliath 120B",
        "description": "A large LLM created by combining two fine-tuned Llama 70B models into one 120B model. Combines Xwin and Euryale.\n\nCredits to\n- [@chargoddard](https://huggingface.co/chargoddard) for developing the framework used to merge the model - [mergekit](https://github.com/cg123/mergekit).\n- [@Undi95](https://huggingface.co/Undi95) for helping with the merge ratios.\n\n#merge",
        "pricing": {
            "prompt": "0.000009375",
            "completion": "0.000009375",
            "image": "0",
            "request": "0"
        },
        "context_length": 6144,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "airoboros"
        },
        "top_provider": {
            "max_completion_tokens": 400,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "2324516",
            "completion_tokens": "2324516"
        }
    },
    "neversleep/noromaid-20b": {
        "id": "neversleep/noromaid-20b",
        "name": "Noromaid 20B",
        "description": "A collab between IkariDev and Undi. This merge is suitable for RP, ERP, and general knowledge.\n\n#merge #uncensored",
        "pricing": {
            "prompt": "0.0000015",
            "completion": "0.00000225",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": 2048,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "14528231",
            "completion_tokens": "9685487"
        }
    },
    "gryphe/mythomist-7b": {
        "id": "gryphe/mythomist-7b",
        "name": "MythoMist 7B",
        "description": "From the creator of [MythoMax](/models/gryphe/mythomax-l2-13b), merges a suite of models to reduce word anticipation, ministrations, and other undesirable words in ChatGPT roleplaying data.\n\nIt combines [Neural Chat 7B](/models/intel/neural-chat-7b), Airoboros 7b, [Toppy M 7B](/models/undi95/toppy-m-7b), [Zepher 7b beta](/models/huggingfaceh4/zephyr-7b-beta), [Nous Capybara 34B](/models/nousresearch/nous-capybara-34b), [OpenHeremes 2.5](/models/teknium/openhermes-2.5-mistral-7b), and many others.\n\n#merge",
        "pricing": {
            "prompt": "0.000000375",
            "completion": "0.000000375",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": 2048,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "58112924",
            "completion_tokens": "58112924"
        }
    },
    "sao10k/fimbulvetr-11b-v2": {
        "id": "sao10k/fimbulvetr-11b-v2",
        "name": "Fimbulvetr 11B v2",
        "description": "Creative writing model, routed with permission. It's fast, it keeps the conversation going, and it stays in character.\n\nIf you submit a raw prompt, you can use Alpaca or Vicuna formats.",
        "pricing": {
            "prompt": "0.000000375",
            "completion": "0.0000015",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": 2048,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "58112924",
            "completion_tokens": "14528231"
        }
    },
    "neversleep/llama-3-lumimaid-8b": {
        "id": "neversleep/llama-3-lumimaid-8b",
        "name": "Llama 3 Lumimaid 8B",
        "description": "The NeverSleep team is back, with a Llama 3 8B finetune trained on their curated roleplay data. Striking a balance between eRP and RP, Lumimaid was designed to be serious, yet uncensored when necessary.\n\nTo enhance it's overall intelligence and chat capability, roughly 40% of the training data was not roleplay. This provides a breadth of knowledge to access, while still keeping roleplay as the primary strength.\n\nUsage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
        "pricing": {
            "prompt": "0.0000001875",
            "completion": "0.000001125",
            "image": "0",
            "request": "0"
        },
        "context_length": 24576,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": "llama3"
        },
        "top_provider": {
            "max_completion_tokens": 2048,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "116225848",
            "completion_tokens": "19370974"
        }
    },
    "neversleep/llama-3-lumimaid-70b": {
        "id": "neversleep/llama-3-lumimaid-70b",
        "name": "Llama 3 Lumimaid 70B",
        "description": "The NeverSleep team is back, with a Llama 3 70B finetune trained on their curated roleplay data. Striking a balance between eRP and RP, Lumimaid was designed to be serious, yet uncensored when necessary.\n\nTo enhance it's overall intelligence and chat capability, roughly 40% of the training data was not roleplay. This provides a breadth of knowledge to access, while still keeping roleplay as the primary strength.\n\nUsage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
        "pricing": {
            "prompt": "0.000003375",
            "completion": "0.0000045",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": "llama3"
        },
        "top_provider": {
            "max_completion_tokens": 2048,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "6456991",
            "completion_tokens": "4842743"
        }
    },
    "undi95/remm-slerp-l2-13b:extended": {
        "id": "undi95/remm-slerp-l2-13b:extended",
        "name": "ReMM SLERP 13B (extended)",
        "description": "A recreation trial of the original MythoMax-L2-B13 but with updated models. #merge\n\nNote: this is an extended-context version of [ReMM SLERP 13B](/models/undi95/remm-slerp-l2-13b). It may have higher prices and different outputs.",
        "pricing": {
            "prompt": "0.000001125",
            "completion": "0.000001125",
            "image": "0",
            "request": "0"
        },
        "context_length": 6144,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": 400,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "19370974",
            "completion_tokens": "19370974"
        }
    },
    "gryphe/mythomax-l2-13b:extended": {
        "id": "gryphe/mythomax-l2-13b:extended",
        "name": "MythoMax 13B (extended)",
        "description": "One of the highest performing and most popular fine-tunes of Llama 2 13B, with rich descriptions and roleplay. #merge\n\nNote: this is an extended-context version of [MythoMax 13B](/models/gryphe/mythomax-l2-13b). It may have higher prices and different outputs.",
        "pricing": {
            "prompt": "0.000001125",
            "completion": "0.000001125",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": 400,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "19370974",
            "completion_tokens": "19370974"
        }
    },
    "meta-llama/llama-3-8b-instruct:extended": {
        "id": "meta-llama/llama-3-8b-instruct:extended",
        "name": "Meta: Llama 3 8B Instruct (extended)",
        "description": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 8B instruct-tuned version was optimized for high quality dialogue usecases.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).\n\nNote: this is an extended-context version of [Llama 3 8B Instruct](/models/meta-llama/llama-3-8b-instruct). It may have higher prices and different outputs.",
        "pricing": {
            "prompt": "0.0000001875",
            "completion": "0.000001125",
            "image": "0",
            "request": "0"
        },
        "context_length": 16384,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": "llama3"
        },
        "top_provider": {
            "max_completion_tokens": 2048,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "116225848",
            "completion_tokens": "19370974"
        }
    },
    "neversleep/llama-3-lumimaid-8b:extended": {
        "id": "neversleep/llama-3-lumimaid-8b:extended",
        "name": "Llama 3 Lumimaid 8B (extended)",
        "description": "The NeverSleep team is back, with a Llama 3 8B finetune trained on their curated roleplay data. Striking a balance between eRP and RP, Lumimaid was designed to be serious, yet uncensored when necessary.\n\nTo enhance it's overall intelligence and chat capability, roughly 40% of the training data was not roleplay. This provides a breadth of knowledge to access, while still keeping roleplay as the primary strength.\n\nUsage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).\n\nNote: this is an extended-context version of [Llama 3 Lumimaid 8B](/models/neversleep/llama-3-lumimaid-8b). It may have higher prices and different outputs.",
        "pricing": {
            "prompt": "0.0000001875",
            "completion": "0.000001125",
            "image": "0",
            "request": "0"
        },
        "context_length": 24576,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": "llama3"
        },
        "top_provider": {
            "max_completion_tokens": 2048,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "116225848",
            "completion_tokens": "19370974"
        }
    },
    "meta-llama/llama-2-70b-chat": {
        "id": "meta-llama/llama-2-70b-chat",
        "name": "Meta: Llama v2 70B Chat",
        "description": "The flagship, 70 billion parameter language model from Meta, fine tuned for chat completions. Llama 2 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align to human preferences for helpfulness and safety.",
        "pricing": {
            "prompt": "0.00000081",
            "completion": "0.00000081",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "llama2"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "26904131",
            "completion_tokens": "26904131"
        }
    },
    "meta-llama/llama-3-8b": {
        "id": "meta-llama/llama-3-8b",
        "name": "Meta: Llama 3 8B (Base)",
        "description": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This is the base 8B pre-trained version.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
        "pricing": {
            "prompt": "0.00000018",
            "completion": "0.00000018",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "121068592",
            "completion_tokens": "121068592"
        }
    },
    "meta-llama/llama-3-70b": {
        "id": "meta-llama/llama-3-70b",
        "name": "Meta: Llama 3 70B (Base)",
        "description": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This is the base 70B pre-trained version.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
        "pricing": {
            "prompt": "0.00000081",
            "completion": "0.00000081",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "26904131",
            "completion_tokens": "26904131"
        }
    },
    "meta-llama/codellama-34b-instruct": {
        "id": "meta-llama/codellama-34b-instruct",
        "name": "Meta: CodeLlama 34B Instruct",
        "description": "Code Llama is built upon Llama 2 and excels at filling in code, handling extensive input contexts, and following programming instructions without prior training for various programming tasks.",
        "pricing": {
            "prompt": "0.00000072",
            "completion": "0.00000072",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "llama2"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "30267148",
            "completion_tokens": "30267148"
        }
    },
    "meta-llama/codellama-70b-instruct": {
        "id": "meta-llama/codellama-70b-instruct",
        "name": "Meta: CodeLlama 70B Instruct",
        "description": "Code Llama is a family of large language models for code. This one is based on [Llama 2 70B](/models/meta-llama/llama-2-70b-chat) and provides zero-shot instruction-following ability for programming tasks.",
        "pricing": {
            "prompt": "0.00000081",
            "completion": "0.00000081",
            "image": "0",
            "request": "0"
        },
        "context_length": 2048,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "code-llama"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "26904131",
            "completion_tokens": "26904131"
        }
    },
    "mistralai/mixtral-8x22b": {
        "id": "mistralai/mixtral-8x22b",
        "name": "Mistral: Mixtral 8x22B (base)",
        "description": "Mixtral 8x22B is a large-scale language model from Mistral AI. It consists of 8 experts, each 22 billion parameters, with each token using 2 experts at a time.\n\nIt was released via [X](https://twitter.com/MistralAI/status/1777869263778291896).\n\n#moe",
        "pricing": {
            "prompt": "0.00000108",
            "completion": "0.00000108",
            "image": "0",
            "request": "0"
        },
        "context_length": 65536,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "20178098",
            "completion_tokens": "20178098"
        }
    },
    "snowflake/snowflake-arctic-instruct": {
        "id": "snowflake/snowflake-arctic-instruct",
        "name": "Snowflake: Arctic Instruct",
        "description": "Arctic is a dense-MoE Hybrid transformer architecture pre-trained from scratch by the Snowflake AI Research Team. Arctic combines a 10B dense transformer model with a residual 128x3.66B MoE MLP resulting in 480B total and 17B active parameters chosen using a top-2 gating.\n\nTo read more about this model's release, [click here](https://www.snowflake.com/blog/arctic-open-efficient-foundation-language-models-snowflake/).",
        "pricing": {
            "prompt": "0.00000216",
            "completion": "0.00000216",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "10089049",
            "completion_tokens": "10089049"
        }
    },
    "qwen/qwen-110b-chat": {
        "id": "qwen/qwen-110b-chat",
        "name": "Qwen 1.5 110B Chat",
        "description": "Qwen1.5 110B is the beta version of Qwen2, a transformer-based decoder-only language model pretrained on a large amount of data. In comparison with the previous released Qwen, the improvements include:\n\n- Significant performance improvement in human preference for chat models\n- Multilingual support of both base and chat models\n- Stable support of 32K context length for models of all sizes\n\nFor more details, see this [blog post](https://qwenlm.github.io/blog/qwen1.5/) and [GitHub repo](https://github.com/QwenLM/Qwen1.5).\n\nUsage of this model is subject to [Tongyi Qianwen LICENSE AGREEMENT](https://huggingface.co/Qwen/Qwen1.5-110B-Chat/blob/main/LICENSE).",
        "pricing": {
            "prompt": "0.00000162",
            "completion": "0.00000162",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Qwen",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "13452065",
            "completion_tokens": "13452065"
        }
    },
    "qwen/qwen-72b-chat": {
        "id": "qwen/qwen-72b-chat",
        "name": "Qwen 1.5 72B Chat",
        "description": "Qwen1.5 72B is the beta version of Qwen2, a transformer-based decoder-only language model pretrained on a large amount of data. In comparison with the previous released Qwen, the improvements include:\n\n- Significant performance improvement in human preference for chat models\n- Multilingual support of both base and chat models\n- Stable support of 32K context length for models of all sizes\n\nFor more details, see this [blog post](https://qwenlm.github.io/blog/qwen1.5/) and [GitHub repo](https://github.com/QwenLM/Qwen1.5).\n\nUsage of this model is subject to [Tongyi Qianwen LICENSE AGREEMENT](https://huggingface.co/Qwen/Qwen1.5-110B-Chat/blob/main/LICENSE).",
        "pricing": {
            "prompt": "0.00000081",
            "completion": "0.00000081",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Qwen",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "26904131",
            "completion_tokens": "26904131"
        }
    },
    "qwen/qwen-32b-chat": {
        "id": "qwen/qwen-32b-chat",
        "name": "Qwen 1.5 32B Chat",
        "description": "Qwen1.5 32B is the beta version of Qwen2, a transformer-based decoder-only language model pretrained on a large amount of data. In comparison with the previous released Qwen, the improvements include:\n\n- Significant performance improvement in human preference for chat models\n- Multilingual support of both base and chat models\n- Stable support of 32K context length for models of all sizes\n\nFor more details, see this [blog post](https://qwenlm.github.io/blog/qwen1.5/) and [GitHub repo](https://github.com/QwenLM/Qwen1.5).\n\nUsage of this model is subject to [Tongyi Qianwen LICENSE AGREEMENT](https://huggingface.co/Qwen/Qwen1.5-110B-Chat/blob/main/LICENSE).",
        "pricing": {
            "prompt": "0.00000072",
            "completion": "0.00000072",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Qwen",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "30267148",
            "completion_tokens": "30267148"
        }
    },
    "qwen/qwen-14b-chat": {
        "id": "qwen/qwen-14b-chat",
        "name": "Qwen 1.5 14B Chat",
        "description": "Qwen1.5 14B is the beta version of Qwen2, a transformer-based decoder-only language model pretrained on a large amount of data. In comparison with the previous released Qwen, the improvements include:\n\n- Significant performance improvement in human preference for chat models\n- Multilingual support of both base and chat models\n- Stable support of 32K context length for models of all sizes\n\nFor more details, see this [blog post](https://qwenlm.github.io/blog/qwen1.5/) and [GitHub repo](https://github.com/QwenLM/Qwen1.5).\n\nUsage of this model is subject to [Tongyi Qianwen LICENSE AGREEMENT](https://huggingface.co/Qwen/Qwen1.5-110B-Chat/blob/main/LICENSE).",
        "pricing": {
            "prompt": "0.00000027",
            "completion": "0.00000027",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Qwen",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "80712394",
            "completion_tokens": "80712394"
        }
    },
    "qwen/qwen-7b-chat": {
        "id": "qwen/qwen-7b-chat",
        "name": "Qwen 1.5 7B Chat",
        "description": "Qwen1.5 7B is the beta version of Qwen2, a transformer-based decoder-only language model pretrained on a large amount of data. In comparison with the previous released Qwen, the improvements include:\n\n- Significant performance improvement in human preference for chat models\n- Multilingual support of both base and chat models\n- Stable support of 32K context length for models of all sizes\n\nFor more details, see this [blog post](https://qwenlm.github.io/blog/qwen1.5/) and [GitHub repo](https://github.com/QwenLM/Qwen1.5).\n\nUsage of this model is subject to [Tongyi Qianwen LICENSE AGREEMENT](https://huggingface.co/Qwen/Qwen1.5-110B-Chat/blob/main/LICENSE).",
        "pricing": {
            "prompt": "0.00000018",
            "completion": "0.00000018",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Qwen",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "121068592",
            "completion_tokens": "121068592"
        }
    },
    "qwen/qwen-4b-chat": {
        "id": "qwen/qwen-4b-chat",
        "name": "Qwen 1.5 4B Chat",
        "description": "Qwen1.5 4B is the beta version of Qwen2, a transformer-based decoder-only language model pretrained on a large amount of data. In comparison with the previous released Qwen, the improvements include:\n\n- Significant performance improvement in human preference for chat models\n- Multilingual support of both base and chat models\n- Stable support of 32K context length for models of all sizes\n\nFor more details, see this [blog post](https://qwenlm.github.io/blog/qwen1.5/) and [GitHub repo](https://github.com/QwenLM/Qwen1.5).\n\nUsage of this model is subject to [Tongyi Qianwen LICENSE AGREEMENT](https://huggingface.co/Qwen/Qwen1.5-110B-Chat/blob/main/LICENSE).",
        "pricing": {
            "prompt": "0.00000009",
            "completion": "0.00000009",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Qwen",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "242137184",
            "completion_tokens": "242137184"
        }
    },
    "01-ai/yi-34b-chat": {
        "id": "01-ai/yi-34b-chat",
        "name": "Yi 34B Chat",
        "description": "The Yi series models are large language models trained from scratch by developers at [01.AI](https://01.ai/). This 34B parameter model has been instruct-tuned for chat.",
        "pricing": {
            "prompt": "0.00000072",
            "completion": "0.00000072",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Yi",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "30267148",
            "completion_tokens": "30267148"
        }
    },
    "01-ai/yi-34b": {
        "id": "01-ai/yi-34b",
        "name": "Yi 34B (base)",
        "description": "The Yi series models are large language models trained from scratch by developers at [01.AI](https://01.ai/). This is the base 34B parameter model.",
        "pricing": {
            "prompt": "0.00000072",
            "completion": "0.00000072",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Yi",
            "instruct_type": "none"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "30267148",
            "completion_tokens": "30267148"
        }
    },
    "01-ai/yi-6b": {
        "id": "01-ai/yi-6b",
        "name": "Yi 6B (base)",
        "description": "The Yi series models are large language models trained from scratch by developers at [01.AI](https://01.ai/). This is the base 6B parameter model.",
        "pricing": {
            "prompt": "0.00000018",
            "completion": "0.00000018",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Yi",
            "instruct_type": "none"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "121068592",
            "completion_tokens": "121068592"
        }
    },
    "open-orca/mistral-7b-openorca": {
        "id": "open-orca/mistral-7b-openorca",
        "name": "Mistral OpenOrca 7B",
        "description": "A fine-tune of Mistral using the OpenOrca dataset. First 7B model to beat all other models <30B.",
        "pricing": {
            "prompt": "0.00000018",
            "completion": "0.00000018",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "121068592",
            "completion_tokens": "121068592"
        }
    },
    "teknium/openhermes-2-mistral-7b": {
        "id": "teknium/openhermes-2-mistral-7b",
        "name": "OpenHermes 2 Mistral 7B",
        "description": "Trained on 900k instructions, surpasses all previous versions of Hermes 13B and below, and matches 70B on some benchmarks. Hermes 2 has strong multiturn chat skills and system prompt capabilities.",
        "pricing": {
            "prompt": "0.00000018",
            "completion": "0.00000018",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "121068592",
            "completion_tokens": "121068592"
        }
    },
    "undi95/remm-slerp-l2-13b": {
        "id": "undi95/remm-slerp-l2-13b",
        "name": "ReMM SLERP 13B",
        "description": "A recreation trial of the original MythoMax-L2-B13 but with updated models. #merge",
        "pricing": {
            "prompt": "0.00000027",
            "completion": "0.00000027",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "80712394",
            "completion_tokens": "80712394"
        }
    },
    "phind/phind-codellama-34b": {
        "id": "phind/phind-codellama-34b",
        "name": "Phind: CodeLlama 34B v2",
        "description": "A fine-tune of CodeLlama-34B on an internal dataset that helps it exceed GPT-4 on some benchmarks, including HumanEval.",
        "pricing": {
            "prompt": "0.00000072",
            "completion": "0.00000072",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "30267148",
            "completion_tokens": "30267148"
        }
    },
    "nousresearch/nous-hermes-yi-34b": {
        "id": "nousresearch/nous-hermes-yi-34b",
        "name": "Nous: Hermes 2 Yi 34B",
        "description": "Nous Hermes 2 Yi 34B was trained on 1,000,000 entries of primarily GPT-4 generated data, as well as other high quality data from open datasets across the AI landscape.\n\nNous-Hermes 2 on Yi 34B outperforms all Nous-Hermes & Open-Hermes models of the past, achieving new heights in all benchmarks for a Nous Research LLM as well as surpassing many popular finetunes.",
        "pricing": {
            "prompt": "0.00000072",
            "completion": "0.00000072",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Yi",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "30267148",
            "completion_tokens": "30267148"
        }
    },
    "nousresearch/nous-hermes-2-mixtral-8x7b-sft": {
        "id": "nousresearch/nous-hermes-2-mixtral-8x7b-sft",
        "name": "Nous: Hermes 2 Mixtral 8x7B SFT",
        "description": "Nous Hermes 2 Mixtral 8x7B SFT is the supervised finetune only version of [the Nous Research model](/models/nousresearch/nous-hermes-2-mixtral-8x7b-dpo) trained over the [Mixtral 8x7B MoE LLM](/models/mistralai/mixtral-8x7b).\n\nThe model was trained on over 1,000,000 entries of primarily GPT-4 generated data, as well as other high quality data from open datasets across the AI landscape, achieving state of the art performance on a variety of tasks.\n\n#moe",
        "pricing": {
            "prompt": "0.00000054",
            "completion": "0.00000054",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "40356197",
            "completion_tokens": "40356197"
        }
    },
    "nousresearch/nous-hermes-2-mistral-7b-dpo": {
        "id": "nousresearch/nous-hermes-2-mistral-7b-dpo",
        "name": "Nous: Hermes 2 Mistral 7B DPO",
        "description": "This is the flagship 7B Hermes model, a Direct Preference Optimization (DPO) of [Teknium/OpenHermes-2.5-Mistral-7B](/models/teknium/openhermes-2.5-mistral-7b). It shows improvement across the board on all benchmarks tested - AGIEval, BigBench Reasoning, GPT4All, and TruthfulQA.\n\nThe model prior to DPO was trained on 1,000,000 instructions/chats of GPT-4 quality or better, primarily synthetic data as well as other high quality datasets.",
        "pricing": {
            "prompt": "0.00000018",
            "completion": "0.00000018",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "121068592",
            "completion_tokens": "121068592"
        }
    },
    "nousresearch/nous-capybara-7b": {
        "id": "nousresearch/nous-capybara-7b",
        "name": "Nous: Capybara 7B",
        "description": "The Capybara series is a collection of datasets and models made by fine-tuning on data created by Nous, mostly in-house.\n\nV1.9 uses unalignment techniques for more consistent and dynamic control. It also leverages a significantly better foundation model, [Mistral 7B](/models/mistralai/mistral-7b-instruct-v0.1).",
        "pricing": {
            "prompt": "0.00000018",
            "completion": "0.00000018",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "airoboros"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "121068592",
            "completion_tokens": "121068592"
        }
    },
    "togethercomputer/stripedhyena-nous-7b": {
        "id": "togethercomputer/stripedhyena-nous-7b",
        "name": "StripedHyena Nous 7B",
        "description": "This is the chat model variant of the [StripedHyena series](/models?q=stripedhyena) developed by Together in collaboration with Nous Research.\n\nStripedHyena uses a new architecture that competes with traditional Transformers, particularly in long-context data processing. It combines attention mechanisms with gated convolutions for improved speed, efficiency, and scaling. This model marks a significant advancement in AI architecture for sequence modeling tasks.",
        "pricing": {
            "prompt": "0.00000018",
            "completion": "0.00000018",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "121068592",
            "completion_tokens": "121068592"
        }
    },
    "togethercomputer/stripedhyena-hessian-7b": {
        "id": "togethercomputer/stripedhyena-hessian-7b",
        "name": "StripedHyena Hessian 7B (base)",
        "description": "This is the base model variant of the [StripedHyena series](/models?q=stripedhyena), developed by Together.\n\nStripedHyena uses a new architecture that competes with traditional Transformers, particularly in long-context data processing. It combines attention mechanisms with gated convolutions for improved speed, efficiency, and scaling. This model marks an advancement in AI architecture for sequence modeling tasks.",
        "pricing": {
            "prompt": "0.00000018",
            "completion": "0.00000018",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "none"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "121068592",
            "completion_tokens": "121068592"
        }
    },
    "databricks/dbrx-instruct": {
        "id": "databricks/dbrx-instruct",
        "name": "Databricks: DBRX 132B Instruct",
        "description": "DBRX is a new open source large language model developed by Databricks. At 132B, it outperforms existing open source LLMs like Llama 2 70B and [Mixtral-8x7b](/models/mistralai/mixtral-8x7b) on standard industry benchmarks for language understanding, programming, math, and logic.\n\nIt uses a fine-grained mixture-of-experts (MoE) architecture. 36B parameters are active on any input. It was pre-trained on 12T tokens of text and code data. Compared to other open MoE models like Mixtral-8x7B and Grok-1, DBRX is fine-grained, meaning it uses a larger number of smaller experts.\n\nSee the launch announcement and benchmark results [here](https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm).\n\n#moe",
        "pricing": {
            "prompt": "0.00000108",
            "completion": "0.00000108",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Other",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "20178098",
            "completion_tokens": "20178098"
        }
    },
    "allenai/olmo-7b-instruct": {
        "id": "allenai/olmo-7b-instruct",
        "name": "OLMo 7B Instruct",
        "description": "OLMo 7B Instruct by the Allen Institute for AI is a model finetuned for question answering. It demonstrates **notable performance** across multiple benchmarks including TruthfulQA and ToxiGen.\n\n**Open Source**: The model, its code, checkpoints, logs are released under the [Apache 2.0 license](https://choosealicense.com/licenses/apache-2.0).\n\n- [Core repo (training, inference, fine-tuning etc.)](https://github.com/allenai/OLMo)\n- [Evaluation code](https://github.com/allenai/OLMo-Eval)\n- [Further fine-tuning code](https://github.com/allenai/open-instruct)\n- [Paper](https://arxiv.org/abs/2402.00838)\n- [Technical blog post](https://blog.allenai.org/olmo-open-language-model-87ccfc95f580)\n- [W&B Logs](https://wandb.ai/ai2-llm/OLMo-7B/reports/OLMo-7B--Vmlldzo2NzQyMzk5)",
        "pricing": {
            "prompt": "0.00000018",
            "completion": "0.00000018",
            "image": "0",
            "request": "0"
        },
        "context_length": 2048,
        "architecture": {
            "modality": "text",
            "tokenizer": "Other",
            "instruct_type": "zephyr"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "121068592",
            "completion_tokens": "121068592"
        }
    },
    "mistralai/mixtral-8x7b-instruct:nitro": {
        "id": "mistralai/mixtral-8x7b-instruct:nitro",
        "name": "Mixtral 8x7B Instruct (nitro)",
        "description": "A pretrained generative Sparse Mixture of Experts, by Mistral AI, for chat and instruction use. Incorporates 8 experts (feed-forward networks) for a total of 47 billion parameters.\n\nInstruct model fine-tuned by Mistral. #moe\n\nNote: this is a higher-throughput version of [Mixtral 8x7B Instruct](/models/mistralai/mixtral-8x7b-instruct). It may have higher prices and slightly different outputs.",
        "pricing": {
            "prompt": "0.00000054",
            "completion": "0.00000054",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "mistral"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "40356197",
            "completion_tokens": "40356197"
        }
    },
    "meta-llama/llama-3-8b-instruct:nitro": {
        "id": "meta-llama/llama-3-8b-instruct:nitro",
        "name": "Meta: Llama 3 8B Instruct (nitro)",
        "description": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 8B instruct-tuned version was optimized for high quality dialogue usecases.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).\n\nNote: this is a higher-throughput version of [Llama 3 8B Instruct](/models/meta-llama/llama-3-8b-instruct). It may have higher prices and slightly different outputs.",
        "pricing": {
            "prompt": "0.00000018",
            "completion": "0.00000018",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": "llama3"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "121068592",
            "completion_tokens": "121068592"
        }
    },
    "meta-llama/llama-2-13b-chat": {
        "id": "meta-llama/llama-2-13b-chat",
        "name": "Meta: Llama v2 13B Chat",
        "description": "A 13 billion parameter language model from Meta, fine tuned for chat completions",
        "pricing": {
            "prompt": "0.0000002375",
            "completion": "0.0000002375",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "llama2"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "91757248",
            "completion_tokens": "91757248"
        }
    },
    "openai/gpt-3.5-turbo": {
        "id": "openai/gpt-3.5-turbo",
        "name": "OpenAI: GPT-3.5 Turbo",
        "description": "GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks.\n\nTraining data up to Sep 2021.",
        "pricing": {
            "prompt": "0.0000005",
            "completion": "0.0000015",
            "image": "0",
            "request": "0"
        },
        "context_length": 16385,
        "architecture": {
            "modality": "text",
            "tokenizer": "GPT",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "43584693",
            "completion_tokens": "14528231"
        }
    },
    "openai/gpt-3.5-turbo-0125": {
        "id": "openai/gpt-3.5-turbo-0125",
        "name": "OpenAI: GPT-3.5 Turbo 16k",
        "description": "The latest GPT-3.5 Turbo model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Training data: up to Sep 2021.\n\nThis version has a higher accuracy at responding in requested formats and a fix for a bug which caused a text encoding issue for non-English language function calls.",
        "pricing": {
            "prompt": "0.0000005",
            "completion": "0.0000015",
            "image": "0",
            "request": "0"
        },
        "context_length": 16385,
        "architecture": {
            "modality": "text",
            "tokenizer": "GPT",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "43584693",
            "completion_tokens": "14528231"
        }
    },
    "openai/gpt-3.5-turbo-1106": {
        "id": "openai/gpt-3.5-turbo-1106",
        "name": "OpenAI: GPT-3.5 Turbo 16k (older v1106)",
        "description": "An older GPT-3.5 Turbo model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Training data: up to Sep 2021.",
        "pricing": {
            "prompt": "0.000001",
            "completion": "0.000002",
            "image": "0",
            "request": "0"
        },
        "context_length": 16385,
        "architecture": {
            "modality": "text",
            "tokenizer": "GPT",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "21792346",
            "completion_tokens": "10896173"
        }
    },
    "openai/gpt-3.5-turbo-0613": {
        "id": "openai/gpt-3.5-turbo-0613",
        "name": "OpenAI: GPT-3.5 Turbo (older v0613)",
        "description": "GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks.\n\nTraining data up to Sep 2021.",
        "pricing": {
            "prompt": "0.000001",
            "completion": "0.000002",
            "image": "0",
            "request": "0"
        },
        "context_length": 4095,
        "architecture": {
            "modality": "text",
            "tokenizer": "GPT",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "21792346",
            "completion_tokens": "10896173"
        }
    },
    "openai/gpt-3.5-turbo-0301": {
        "id": "openai/gpt-3.5-turbo-0301",
        "name": "OpenAI: GPT-3.5 Turbo (older v0301)",
        "description": "GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks.\n\nTraining data up to Sep 2021.",
        "pricing": {
            "prompt": "0.000001",
            "completion": "0.000002",
            "image": "0",
            "request": "0"
        },
        "context_length": 4095,
        "architecture": {
            "modality": "text",
            "tokenizer": "GPT",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "21792346",
            "completion_tokens": "10896173"
        }
    },
    "openai/gpt-3.5-turbo-16k": {
        "id": "openai/gpt-3.5-turbo-16k",
        "name": "OpenAI: GPT-3.5 Turbo 16k",
        "description": "This model offers four times the context length of gpt-3.5-turbo, allowing it to support approximately 20 pages of text in a single request at a higher cost. Training data: up to Sep 2021.",
        "pricing": {
            "prompt": "0.000003",
            "completion": "0.000004",
            "image": "0",
            "request": "0"
        },
        "context_length": 16385,
        "architecture": {
            "modality": "text",
            "tokenizer": "GPT",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "7264115",
            "completion_tokens": "5448086"
        }
    },
    "openai/gpt-4o": {
        "id": "openai/gpt-4o",
        "name": "OpenAI: GPT-4o",
        "description": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as fast and 50% more cost-effective. GPT-4o also offers improved performance in processing non-English languages and enhanced visual capabilities.\n\nFor benchmarking against other models, it was briefly called [\"im-also-a-good-gpt2-chatbot\"](https://twitter.com/LiamFedus/status/1790064963966370209)\n\n#multimodal",
        "pricing": {
            "prompt": "0.000005",
            "completion": "0.000015",
            "image": "0.002312",
            "request": "0"
        },
        "context_length": 128000,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "GPT",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "4358469",
            "completion_tokens": "1452823"
        }
    },
    "openai/gpt-4o-2024-05-13": {
        "id": "openai/gpt-4o-2024-05-13",
        "name": "OpenAI: GPT-4o (2024-05-13)",
        "description": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as fast and 50% more cost-effective. GPT-4o also offers improved performance in processing non-English languages and enhanced visual capabilities.\n\nFor benchmarking against other models, it was briefly called [\"im-also-a-good-gpt2-chatbot\"](https://twitter.com/LiamFedus/status/1790064963966370209)\n\n#multimodal",
        "pricing": {
            "prompt": "0.000005",
            "completion": "0.000015",
            "image": "0.002312",
            "request": "0"
        },
        "context_length": 128000,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "GPT",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "4358469",
            "completion_tokens": "1452823"
        }
    },
    "openai/gpt-4-turbo": {
        "id": "openai/gpt-4-turbo",
        "name": "OpenAI: GPT-4 Turbo",
        "description": "The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling.\n\nTraining data: up to December 2023.",
        "pricing": {
            "prompt": "0.00001",
            "completion": "0.00003",
            "image": "0.01445",
            "request": "0"
        },
        "context_length": 128000,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "GPT",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "2179234",
            "completion_tokens": "726411"
        }
    },
    "openai/gpt-4-turbo-preview": {
        "id": "openai/gpt-4-turbo-preview",
        "name": "OpenAI: GPT-4 Turbo Preview",
        "description": "The preview GPT-4 model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Training data: up to Dec 2023.\n\n**Note:** heavily rate limited by OpenAI while in preview.",
        "pricing": {
            "prompt": "0.00001",
            "completion": "0.00003",
            "image": "0",
            "request": "0"
        },
        "context_length": 128000,
        "architecture": {
            "modality": "text",
            "tokenizer": "GPT",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "2179234",
            "completion_tokens": "726411"
        }
    },
    "openai/gpt-4-1106-preview": {
        "id": "openai/gpt-4-1106-preview",
        "name": "OpenAI: GPT-4 Turbo (older v1106)",
        "description": "The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling.\n\nTraining data: up to April 2023.",
        "pricing": {
            "prompt": "0.00001",
            "completion": "0.00003",
            "image": "0",
            "request": "0"
        },
        "context_length": 128000,
        "architecture": {
            "modality": "text",
            "tokenizer": "GPT",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "2179234",
            "completion_tokens": "726411"
        }
    },
    "openai/gpt-4": {
        "id": "openai/gpt-4",
        "name": "OpenAI: GPT-4",
        "description": "OpenAI's flagship model, GPT-4 is a large-scale multimodal language model capable of solving difficult problems with greater accuracy than previous models due to its broader general knowledge and advanced reasoning capabilities. Training data: up to Sep 2021.",
        "pricing": {
            "prompt": "0.00003",
            "completion": "0.00006",
            "image": "0",
            "request": "0"
        },
        "context_length": 8191,
        "architecture": {
            "modality": "text",
            "tokenizer": "GPT",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "726411",
            "completion_tokens": "363205"
        }
    },
    "openai/gpt-4-0314": {
        "id": "openai/gpt-4-0314",
        "name": "OpenAI: GPT-4 (older v0314)",
        "description": "GPT-4-0314 is the first version of GPT-4 released, with a context length of 8,192 tokens, and was supported until June 14. Training data: up to Sep 2021.",
        "pricing": {
            "prompt": "0.00003",
            "completion": "0.00006",
            "image": "0",
            "request": "0"
        },
        "context_length": 8191,
        "architecture": {
            "modality": "text",
            "tokenizer": "GPT",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "726411",
            "completion_tokens": "363205"
        }
    },
    "openai/gpt-4-32k": {
        "id": "openai/gpt-4-32k",
        "name": "OpenAI: GPT-4 32k",
        "description": "GPT-4-32k is an extended version of GPT-4, with the same capabilities but quadrupled context length, allowing for processing up to 40 pages of text in a single pass. This is particularly beneficial for handling longer content like interacting with PDFs without an external vector database. Training data: up to Sep 2021.",
        "pricing": {
            "prompt": "0.00006",
            "completion": "0.00012",
            "image": "0",
            "request": "0"
        },
        "context_length": 32767,
        "architecture": {
            "modality": "text",
            "tokenizer": "GPT",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "363205",
            "completion_tokens": "181602"
        }
    },
    "openai/gpt-4-32k-0314": {
        "id": "openai/gpt-4-32k-0314",
        "name": "OpenAI: GPT-4 32k (older v0314)",
        "description": "GPT-4-32k is an extended version of GPT-4, with the same capabilities but quadrupled context length, allowing for processing up to 40 pages of text in a single pass. This is particularly beneficial for handling longer content like interacting with PDFs without an external vector database. Training data: up to Sep 2021.",
        "pricing": {
            "prompt": "0.00006",
            "completion": "0.00012",
            "image": "0",
            "request": "0"
        },
        "context_length": 32767,
        "architecture": {
            "modality": "text",
            "tokenizer": "GPT",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "363205",
            "completion_tokens": "181602"
        }
    },
    "openai/gpt-4-vision-preview": {
        "id": "openai/gpt-4-vision-preview",
        "name": "OpenAI: GPT-4 Vision",
        "description": "Ability to understand images, in addition to all other [GPT-4 Turbo capabilties](/models/openai/gpt-4-turbo). Training data: up to Apr 2023.\n\n**Note:** heavily rate limited by OpenAI while in preview.\n\n#multimodal",
        "pricing": {
            "prompt": "0.00001",
            "completion": "0.00003",
            "image": "0.01445",
            "request": "0"
        },
        "context_length": 128000,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "GPT",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "2179234",
            "completion_tokens": "726411"
        }
    },
    "openai/gpt-3.5-turbo-instruct": {
        "id": "openai/gpt-3.5-turbo-instruct",
        "name": "OpenAI: GPT-3.5 Turbo Instruct",
        "description": "This model is a variant of GPT-3.5 Turbo tuned for instructional prompts and omitting chat-related optimizations. Training data: up to Sep 2021.",
        "pricing": {
            "prompt": "0.0000015",
            "completion": "0.000002",
            "image": "0",
            "request": "0"
        },
        "context_length": 4095,
        "architecture": {
            "modality": "text",
            "tokenizer": "GPT",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "14528231",
            "completion_tokens": "10896173"
        }
    },
    "google/palm-2-chat-bison": {
        "id": "google/palm-2-chat-bison",
        "name": "Google: PaLM 2 Chat",
        "description": "PaLM 2 is a language model by Google with improved multilingual, reasoning and coding capabilities.",
        "pricing": {
            "prompt": "0.00000025",
            "completion": "0.0000005",
            "image": "0",
            "request": "0"
        },
        "context_length": 25804,
        "architecture": {
            "modality": "text",
            "tokenizer": "PaLM",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 2867,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "87169386",
            "completion_tokens": "43584693"
        }
    },
    "google/palm-2-codechat-bison": {
        "id": "google/palm-2-codechat-bison",
        "name": "Google: PaLM 2 Code Chat",
        "description": "PaLM 2 fine-tuned for chatbot conversations that help with code-related questions.",
        "pricing": {
            "prompt": "0.00000025",
            "completion": "0.0000005",
            "image": "0",
            "request": "0"
        },
        "context_length": 20070,
        "architecture": {
            "modality": "text",
            "tokenizer": "PaLM",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 2867,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "87169386",
            "completion_tokens": "43584693"
        }
    },
    "google/palm-2-chat-bison-32k": {
        "id": "google/palm-2-chat-bison-32k",
        "name": "Google: PaLM 2 Chat 32k",
        "description": "PaLM 2 is a language model by Google with improved multilingual, reasoning and coding capabilities.",
        "pricing": {
            "prompt": "0.00000025",
            "completion": "0.0000005",
            "image": "0",
            "request": "0"
        },
        "context_length": 91750,
        "architecture": {
            "modality": "text",
            "tokenizer": "PaLM",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 22937,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "87169386",
            "completion_tokens": "43584693"
        }
    },
    "google/palm-2-codechat-bison-32k": {
        "id": "google/palm-2-codechat-bison-32k",
        "name": "Google: PaLM 2 Code Chat 32k",
        "description": "PaLM 2 fine-tuned for chatbot conversations that help with code-related questions.",
        "pricing": {
            "prompt": "0.00000025",
            "completion": "0.0000005",
            "image": "0",
            "request": "0"
        },
        "context_length": 91750,
        "architecture": {
            "modality": "text",
            "tokenizer": "PaLM",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 22937,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "87169386",
            "completion_tokens": "43584693"
        }
    },
    "google/gemini-pro": {
        "id": "google/gemini-pro",
        "name": "Google: Gemini Pro 1.0",
        "description": "Google's flagship text generation model. Designed to handle natural language tasks, multiturn text and code chat, and code generation.\n\nSee the benchmarks and prompting guidelines from [Deepmind](https://deepmind.google/technologies/gemini/).\n\nUsage of Gemini is subject to Google's [Gemini Terms of Use](https://ai.google.dev/terms).",
        "pricing": {
            "prompt": "0.000000125",
            "completion": "0.000000375",
            "image": "0.0025",
            "request": "0"
        },
        "context_length": 91728,
        "architecture": {
            "modality": "text",
            "tokenizer": "Gemini",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 22937,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "174338772",
            "completion_tokens": "58112924"
        }
    },
    "google/gemini-pro-vision": {
        "id": "google/gemini-pro-vision",
        "name": "Google: Gemini Pro Vision 1.0",
        "description": "Google's flagship multimodal model, supporting image and video in text or chat prompts for a text or code response.\n\nSee the benchmarks and prompting guidelines from [Deepmind](https://deepmind.google/technologies/gemini/).\n\nUsage of Gemini is subject to Google's [Gemini Terms of Use](https://ai.google.dev/terms).\n\n#multimodal",
        "pricing": {
            "prompt": "0.000000125",
            "completion": "0.000000375",
            "image": "0.0025",
            "request": "0"
        },
        "context_length": 45875,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "Gemini",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 5734,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "174338772",
            "completion_tokens": "58112924"
        }
    },
    "google/gemini-pro-1.5": {
        "id": "google/gemini-pro-1.5",
        "name": "Google: Gemini Pro 1.5",
        "description": "Google's latest multimodal model, supporting image and video in text or chat prompts.\n\nOptimized for language tasks including:\n\n- Code generation\n- Text generation\n- Text editing\n- Problem solving\n- Recommendations\n- Information extraction\n- Data extraction or generation\n- AI agents\n\nUsage of Gemini is subject to Google's [Gemini Terms of Use](https://ai.google.dev/terms).\n\n#multimodal",
        "pricing": {
            "prompt": "0.0000025",
            "completion": "0.0000075",
            "image": "0.00265",
            "request": "0"
        },
        "context_length": 2800000,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "Gemini",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 22937,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "8716938",
            "completion_tokens": "2905646"
        }
    },
    "google/gemini-flash-1.5": {
        "id": "google/gemini-flash-1.5",
        "name": "Google: Gemini Flash 1.5",
        "description": "Gemini 1.5 Flash is a foundation model that performs well at a variety of multimodal tasks such as visual understanding, classification, summarization, and creating content from image, audio and video. It's adept at processing visual and text inputs such as photographs, documents, infographics, and screenshots.\n\nGemini 1.5 Flash is designed for high-volume, high-frequency tasks where cost and latency matter. On most common tasks, Flash achieves comparable quality to other Gemini Pro models at a significantly reduced cost. Flash is well-suited for applications like chat assistants and on-demand content generation where speed and scale matter.\n\nUsage of Gemini is subject to Google's [Gemini Terms of Use](https://ai.google.dev/terms).\n\n#multimodal",
        "pricing": {
            "prompt": "0.00000025",
            "completion": "0.00000075",
            "image": "0.000265",
            "request": "0"
        },
        "context_length": 2800000,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "Gemini",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 22937,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "87169386",
            "completion_tokens": "29056462"
        }
    },
    "mistralai/mistral-tiny": {
        "id": "mistralai/mistral-tiny",
        "name": "Mistral Tiny",
        "description": "This model is currently powered by Mistral-7B-v0.2, and incorporates a \"better\" fine-tuning than [Mistral 7B](/models/mistralai/mistral-7b-instruct-v0.1), inspired by community work. It's best used for large batch processing tasks where cost is a significant factor but reasoning capabilities are not crucial.",
        "pricing": {
            "prompt": "0.00000025",
            "completion": "0.00000025",
            "image": "0",
            "request": "0"
        },
        "context_length": 32000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "87169386",
            "completion_tokens": "87169386"
        }
    },
    "mistralai/mistral-small": {
        "id": "mistralai/mistral-small",
        "name": "Mistral Small",
        "description": "This model is currently powered by Mixtral-8X7B-v0.1, a sparse mixture of experts model with 12B active parameters. It has better reasoning, exhibits more capabilities, can produce and reason about code, and is multiligual, supporting English, French, German, Italian, and Spanish.\n#moe",
        "pricing": {
            "prompt": "0.000002",
            "completion": "0.000006",
            "image": "0",
            "request": "0"
        },
        "context_length": 32000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "10896173",
            "completion_tokens": "3632057"
        }
    },
    "mistralai/mistral-medium": {
        "id": "mistralai/mistral-medium",
        "name": "Mistral Medium",
        "description": "This is Mistral AI's closed-source, medium-sided model. It's powered by a closed-source prototype and excels at reasoning, code, JSON, chat, and more. In benchmarks, it compares with many of the flagship models of other companies.",
        "pricing": {
            "prompt": "0.0000027",
            "completion": "0.0000081",
            "image": "0",
            "request": "0"
        },
        "context_length": 32000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "8071239",
            "completion_tokens": "2690413"
        }
    },
    "mistralai/mistral-large": {
        "id": "mistralai/mistral-large",
        "name": "Mistral Large",
        "description": "This is Mistral AI's closed-source, flagship model. It's powered by a closed-source prototype and excels at reasoning, code, JSON, chat, and more. Read the launch announcement [here](https://mistral.ai/news/mistral-large/).\n\nIt is fluent in English, French, Spanish, German, and Italian, with high grammatical accuracy, and its 32K tokens context window allows precise information recall from large documents.",
        "pricing": {
            "prompt": "0.000008",
            "completion": "0.000024",
            "image": "0",
            "request": "0"
        },
        "context_length": 32000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "2724043",
            "completion_tokens": "908014"
        }
    },
    "01-ai/yi-large": {
        "id": "01-ai/yi-large",
        "name": "Yi Large",
        "description": "The Yi Large model was designed by 01.AI with the following usecases in mind: knowledge search, data classification, human-like chat bots, and customer service.\n\nIt stands out for its multilingual proficiency, particularly in Spanish, Chinese, Japanese, German, and French.\n\nCheck out the [launch announcement](https://01-ai.github.io/blog/01.ai-yi-large-llm-launch) to learn more.",
        "pricing": {
            "prompt": "0.000003",
            "completion": "0.000003",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Yi",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "7264115",
            "completion_tokens": "7264115"
        }
    },
    "perplexity/llama-3-sonar-small-32k-chat": {
        "id": "perplexity/llama-3-sonar-small-32k-chat",
        "name": "Perplexity: Llama3 Sonar 8B",
        "description": "Llama3 Sonar is Perplexity's latest model family. It surpasses their earlier Sonar models in cost-efficiency, speed, and performance.\n\nThis is a normal offline LLM, but the [online version](/models/perplexity/llama-3-sonar-small-32k-online) of this model has Internet access.",
        "pricing": {
            "prompt": "0.0000002",
            "completion": "0.0000002",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "108961733",
            "completion_tokens": "108961733"
        }
    },
    "perplexity/llama-3-sonar-small-32k-online": {
        "id": "perplexity/llama-3-sonar-small-32k-online",
        "name": "Perplexity: Llama3 Sonar 8B Online",
        "description": "Llama3 Sonar is Perplexity's latest model family. It surpasses their earlier Sonar models in cost-efficiency, speed, and performance.\n\nThis is the online version of the [offline chat model](/models/perplexity/llama-3-sonar-small-32k-chat). It is focused on delivering helpful, up-to-date, and factual responses. #online",
        "pricing": {
            "prompt": "0.0000002",
            "completion": "0.0000002",
            "image": "0",
            "request": "0.005"
        },
        "context_length": 28000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "108961733",
            "completion_tokens": "108961733"
        }
    },
    "perplexity/llama-3-sonar-large-32k-chat": {
        "id": "perplexity/llama-3-sonar-large-32k-chat",
        "name": "Perplexity: Llama3 Sonar 70B",
        "description": "Llama3 Sonar is Perplexity's latest model family. It surpasses their earlier Sonar models in cost-efficiency, speed, and performance.\n\nThis is a normal offline LLM, but the [online version](/models/perplexity/llama-3-sonar-large-32k-online) of this model has Internet access.",
        "pricing": {
            "prompt": "0.000001",
            "completion": "0.000001",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "21792346",
            "completion_tokens": "21792346"
        }
    },
    "perplexity/llama-3-sonar-large-32k-online": {
        "id": "perplexity/llama-3-sonar-large-32k-online",
        "name": "Perplexity: Llama3 Sonar 70B Online",
        "description": "Llama3 Sonar is Perplexity's latest model family. It surpasses their earlier Sonar models in cost-efficiency, speed, and performance.\n\nThis is the online version of the [offline chat model](/models/perplexity/llama-3-sonar-large-32k-chat). It is focused on delivering helpful, up-to-date, and factual responses. #online",
        "pricing": {
            "prompt": "0.000001",
            "completion": "0.000001",
            "image": "0",
            "request": "0.005"
        },
        "context_length": 28000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "21792346",
            "completion_tokens": "21792346"
        }
    },
    "anthropic/claude-3-opus": {
        "id": "anthropic/claude-3-opus",
        "name": "Anthropic: Claude 3 Opus",
        "description": "Claude 3 Opus is Anthropic's most powerful model for highly complex tasks. It boasts top-level performance, intelligence, fluency, and understanding.\n\nSee the launch announcement and benchmark results [here](https://www.anthropic.com/news/claude-3-family)\n\n#multimodal",
        "pricing": {
            "prompt": "0.000015",
            "completion": "0.000075",
            "image": "0.024",
            "request": "0"
        },
        "context_length": 200000,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "Claude",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "1452823",
            "completion_tokens": "290564"
        }
    },
    "anthropic/claude-3-sonnet": {
        "id": "anthropic/claude-3-sonnet",
        "name": "Anthropic: Claude 3 Sonnet",
        "description": "Claude 3 Sonnet is an ideal balance of intelligence and speed for enterprise workloads. Maximum utility at a lower price, dependable, balanced for scaled deployments.\n\nSee the launch announcement and benchmark results [here](https://www.anthropic.com/news/claude-3-family)\n\n#multimodal",
        "pricing": {
            "prompt": "0.000003",
            "completion": "0.000015",
            "image": "0.0048",
            "request": "0"
        },
        "context_length": 200000,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "Claude",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "7264115",
            "completion_tokens": "1452823"
        }
    },
    "anthropic/claude-3.5-sonnet": {
        "id": "anthropic/claude-3.5-sonnet",
        "name": "Anthropic: Claude 3.5 Sonnet",
        "description": "Claude 3.5 Sonnet delivers better-than-Opus capabilities, faster-than-Sonnet speeds, at the same Sonnet prices. Sonnet is particularly good at:\n\n- Coding: Autonomously writes, edits, and runs code with reasoning and troubleshooting\n- Data science: Augments human data science expertise; navigates unstructured data while using multiple tools for insights\n- Visual processing: excelling at interpreting charts, graphs, and images, accurately transcribing text to derive insights beyond just the text alone\n- Agentic tasks: exceptional tool use, making it great at agentic tasks (i.e. complex, multi-step problem solving tasks that require engaging with other systems)\n\n#multimodal",
        "pricing": {
            "prompt": "0.000003",
            "completion": "0.000015",
            "image": "0.0048",
            "request": "0"
        },
        "context_length": 200000,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "Claude",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "7264115",
            "completion_tokens": "1452823"
        }
    },
    "anthropic/claude-3-haiku": {
        "id": "anthropic/claude-3-haiku",
        "name": "Anthropic: Claude 3 Haiku",
        "description": "Claude 3 Haiku is Anthropic's fastest and most compact model for\nnear-instant responsiveness. Quick and accurate targeted performance.\n\nSee the launch announcement and benchmark results [here](https://www.anthropic.com/news/claude-3-haiku)\n\n#multimodal",
        "pricing": {
            "prompt": "0.00000025",
            "completion": "0.00000125",
            "image": "0.0004",
            "request": "0"
        },
        "context_length": 200000,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "Claude",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "87169386",
            "completion_tokens": "17433877"
        }
    },
    "anthropic/claude-2": {
        "id": "anthropic/claude-2",
        "name": "Anthropic: Claude v2",
        "description": "Claude 2 delivers advancements in key capabilities for enterprises—including an industry-leading 200K token context window, significant reductions in rates of model hallucination, system prompts and a new beta feature: tool use.",
        "pricing": {
            "prompt": "0.000008",
            "completion": "0.000024",
            "image": "0",
            "request": "0"
        },
        "context_length": 200000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Claude",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "2724043",
            "completion_tokens": "908014"
        }
    },
    "anthropic/claude-2.0": {
        "id": "anthropic/claude-2.0",
        "name": "Anthropic: Claude v2.0",
        "description": "Anthropic's flagship model. Superior performance on tasks that require complex reasoning. Supports hundreds of pages of text.",
        "pricing": {
            "prompt": "0.000008",
            "completion": "0.000024",
            "image": "0",
            "request": "0"
        },
        "context_length": 100000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Claude",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "2724043",
            "completion_tokens": "908014"
        }
    },
    "anthropic/claude-2.1": {
        "id": "anthropic/claude-2.1",
        "name": "Anthropic: Claude v2.1",
        "description": "Claude 2 delivers advancements in key capabilities for enterprises—including an industry-leading 200K token context window, significant reductions in rates of model hallucination, system prompts and a new beta feature: tool use.",
        "pricing": {
            "prompt": "0.000008",
            "completion": "0.000024",
            "image": "0",
            "request": "0"
        },
        "context_length": 200000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Claude",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "2724043",
            "completion_tokens": "908014"
        }
    },
    "anthropic/claude-instant-1": {
        "id": "anthropic/claude-instant-1",
        "name": "Anthropic: Claude Instant v1",
        "description": "Anthropic's model for low-latency, high throughput text generation. Supports hundreds of pages of text.",
        "pricing": {
            "prompt": "0.0000008",
            "completion": "0.0000024",
            "image": "0",
            "request": "0"
        },
        "context_length": 100000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Claude",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "27240433",
            "completion_tokens": "9080144"
        }
    },
    "cohere/command": {
        "id": "cohere/command",
        "name": "Cohere: Command",
        "description": "Command is an instruction-following conversational model that performs language tasks with high quality, more reliably and with a longer context than our base generative models.\n\nUse of this model is subject to Cohere's [Acceptable Use Policy](https://docs.cohere.com/docs/c4ai-acceptable-use-policy).",
        "pricing": {
            "prompt": "0.000001",
            "completion": "0.000002",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Cohere",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4000,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "21792346",
            "completion_tokens": "10896173"
        }
    },
    "cohere/command-r": {
        "id": "cohere/command-r",
        "name": "Cohere: Command R",
        "description": "Command-R is a 35B parameter model that performs conversational language tasks at a higher quality, more reliably, and with a longer context than previous models. It can be used for complex workflows like code generation, retrieval augmented generation (RAG), tool use, and agents.\n\nRead the launch post [here](https://txt.cohere.com/command-r/).\n\nUse of this model is subject to Cohere's [Acceptable Use Policy](https://docs.cohere.com/docs/c4ai-acceptable-use-policy).",
        "pricing": {
            "prompt": "0.0000005",
            "completion": "0.0000015",
            "image": "0",
            "request": "0"
        },
        "context_length": 128000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Cohere",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4000,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "43584693",
            "completion_tokens": "14528231"
        }
    },
    "cohere/command-r-plus": {
        "id": "cohere/command-r-plus",
        "name": "Cohere: Command R+",
        "description": "Command R+ is a new, 104B-parameter LLM from Cohere. It's useful for roleplay, general consumer usecases, and Retrieval Augmented Generation (RAG).\n\nIt offers multilingual support for ten key languages to facilitate global business operations. See benchmarks and the launch post [here](https://txt.cohere.com/command-r-plus-microsoft-azure/).\n\nUse of this model is subject to Cohere's [Acceptable Use Policy](https://docs.cohere.com/docs/c4ai-acceptable-use-policy).",
        "pricing": {
            "prompt": "0.000003",
            "completion": "0.000015",
            "image": "0",
            "request": "0"
        },
        "context_length": 128000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Cohere",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4000,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "7264115",
            "completion_tokens": "1452823"
        }
    },
    "anthropic/claude-1": {
        "id": "anthropic/claude-1",
        "name": "Anthropic: Claude v1",
        "description": "Anthropic's model for low-latency, high throughput text generation. Supports hundreds of pages of text.",
        "pricing": {
            "prompt": "0.000008",
            "completion": "0.000024",
            "image": "0",
            "request": "0"
        },
        "context_length": 100000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Claude",
            "instruct_type": "claude"
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "2724043",
            "completion_tokens": "908014"
        }
    },
    "anthropic/claude-1.2": {
        "id": "anthropic/claude-1.2",
        "name": "Anthropic: Claude v1.2",
        "description": "Anthropic's model for low-latency, high throughput text generation. Supports hundreds of pages of text.",
        "pricing": {
            "prompt": "0.000008",
            "completion": "0.000024",
            "image": "0",
            "request": "0"
        },
        "context_length": 100000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Claude",
            "instruct_type": "claude"
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "2724043",
            "completion_tokens": "908014"
        }
    },
    "anthropic/claude-instant-1.0": {
        "id": "anthropic/claude-instant-1.0",
        "name": "Anthropic: Claude Instant v1.0",
        "description": "Anthropic's model for low-latency, high throughput text generation. Supports hundreds of pages of text.",
        "pricing": {
            "prompt": "0.0000008",
            "completion": "0.0000024",
            "image": "0",
            "request": "0"
        },
        "context_length": 100000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Claude",
            "instruct_type": "claude"
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "27240433",
            "completion_tokens": "9080144"
        }
    },
    "anthropic/claude-instant-1.1": {
        "id": "anthropic/claude-instant-1.1",
        "name": "Anthropic: Claude Instant v1.1",
        "description": "Anthropic's model for low-latency, high throughput text generation. Supports hundreds of pages of text.",
        "pricing": {
            "prompt": "0.0000008",
            "completion": "0.0000024",
            "image": "0",
            "request": "0"
        },
        "context_length": 100000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Claude",
            "instruct_type": "claude"
        },
        "top_provider": {
            "max_completion_tokens": 2048,
            "is_moderated": true
        },
        "per_request_limits": {
            "prompt_tokens": "27240433",
            "completion_tokens": "9080144"
        }
    },
    "ai21/jamba-instruct": {
        "id": "ai21/jamba-instruct",
        "name": "AI21: Jamba Instruct",
        "description": "The Jamba-Instruct model, introduced by AI21 Labs, is an instruction-tuned variant of their hybrid SSM-Transformer Jamba model, specifically optimized for enterprise applications.\n\n- 256K Context Window: It can process extensive information, equivalent to a 400-page novel, which is beneficial for tasks involving large documents such as financial reports or legal documents\n- Safety and Accuracy: Jamba-Instruct is designed with enhanced safety features to ensure secure deployment in enterprise environments, reducing the risk and cost of implementation\n\nRead their [announcement](https://www.ai21.com/blog/announcing-jamba) to learn more.\n\nJamba has a knowledge cutoff of February 2024.",
        "pricing": {
            "prompt": "0.0000005",
            "completion": "0.0000007",
            "image": "0",
            "request": "0"
        },
        "context_length": 256000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Other",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "43584693",
            "completion_tokens": "31131923"
        }
    },
    "huggingfaceh4/zephyr-7b-beta": {
        "id": "huggingfaceh4/zephyr-7b-beta",
        "name": "Hugging Face: Zephyr 7B",
        "description": "Zephyr is a series of language models that are trained to act as helpful assistants. Zephyr-7B-β is the second model in the series, and is a fine-tuned version of [mistralai/Mistral-7B-v0.1](/models/mistralai/mistral-7b-instruct-v0.1) that was trained on a mix of publicly available, synthetic datasets using Direct Preference Optimization (DPO).",
        "pricing": {
            "prompt": "-1",
            "completion": "-1",
            "request": "-1",
            "image": "-1"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "zephyr"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": null
    },
    "huggingfaceh4/zephyr-orpo-141b-a35b": {
        "id": "huggingfaceh4/zephyr-orpo-141b-a35b",
        "name": "Zephyr 141B-A35B",
        "description": "Zephyr 141B-A35B is A Mixture of Experts (MoE) model with 141B total parameters and 35B active parameters. Fine-tuned on a mix of publicly available, synthetic datasets.\n\nIt is an instruct finetune of [Mixtral 8x22B](/models/mistralai/mixtral-8x22b).\n\n#moe",
        "pricing": {
            "prompt": "-1",
            "completion": "-1",
            "request": "-1",
            "image": "-1"
        },
        "context_length": 65536,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "zephyr"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": null
    },
    "meta-llama/llama-3-8b-instruct": {
        "id": "meta-llama/llama-3-8b-instruct",
        "name": "Meta: Llama 3 8B Instruct",
        "description": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 8B instruct-tuned version was optimized for high quality dialogue usecases.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
        "pricing": {
            "prompt": "0.000000064",
            "completion": "0.000000064",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": "llama3"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "340505415",
            "completion_tokens": "340505415"
        }
    },
    "meta-llama/llama-3-70b-instruct": {
        "id": "meta-llama/llama-3-70b-instruct",
        "name": "Meta: Llama 3 70B Instruct",
        "description": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 70B instruct-tuned version was optimized for high quality dialogue usecases.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
        "pricing": {
            "prompt": "0.00000056",
            "completion": "0.00000077",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": "llama3"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "38914904",
            "completion_tokens": "28301748"
        }
    },
    "meta-llama/llama-guard-2-8b": {
        "id": "meta-llama/llama-guard-2-8b",
        "name": "Meta: LlamaGuard 2 8B",
        "description": "This safeguard model has 8B parameters and is based on the Llama 3 family. Just like is predecessor, [LlamaGuard 1](https://huggingface.co/meta-llama/LlamaGuard-7b), it can do both prompt and response classification.\n\nLlamaGuard 2 acts as a normal LLM would, generating text that indicates whether the given input/output is safe/unsafe. If deemed unsafe, it will also share the content categories violated.\n\nFor best results, please use raw prompt input or the `/completions` endpoint, instead of the chat API.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
        "pricing": {
            "prompt": "0.00000015",
            "completion": "0.00000015",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": "none"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "145282310",
            "completion_tokens": "145282310"
        }
    },
    "microsoft/wizardlm-2-8x22b": {
        "id": "microsoft/wizardlm-2-8x22b",
        "name": "WizardLM-2 8x22B",
        "description": "WizardLM-2 8x22B is Microsoft AI's most advanced Wizard model. It demonstrates highly competitive performance compared to leading proprietary models, and it consistently outperforms all existing state-of-the-art opensource models.\n\nIt is an instruct finetune of [Mixtral 8x22B](/models/mistralai/mixtral-8x22b).\n\nTo read more about the model release, [click here](https://wizardlm.github.io/WizardLM2/).\n\n#moe",
        "pricing": {
            "prompt": "0.00000064",
            "completion": "0.00000064",
            "image": "0",
            "request": "0"
        },
        "context_length": 65536,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "vicuna"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "34050541",
            "completion_tokens": "34050541"
        }
    },
    "microsoft/wizardlm-2-7b": {
        "id": "microsoft/wizardlm-2-7b",
        "name": "WizardLM-2 7B",
        "description": "WizardLM-2 7B is the smaller variant of Microsoft AI's latest Wizard model. It is the fastest and achieves comparable performance with existing 10x larger opensource leading models\n\nIt is a finetune of [Mistral 7B Instruct](/models/mistralai/mistral-7b-instruct), using the same technique as [WizardLM-2 8x22B](/models/microsoft/wizardlm-2-8x22b).\n\nTo read more about the model release, [click here](https://wizardlm.github.io/WizardLM2/).\n\n#moe",
        "pricing": {
            "prompt": "0.00000007",
            "completion": "0.00000007",
            "image": "0",
            "request": "0"
        },
        "context_length": 32000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "vicuna"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "311319237",
            "completion_tokens": "311319237"
        }
    },
    "microsoft/phi-3-mini-128k-instruct": {
        "id": "microsoft/phi-3-mini-128k-instruct",
        "name": "Phi-3 Mini 128K Instruct",
        "description": "Phi-3 Mini is a powerful 3.8B parameter model designed for advanced language understanding, reasoning, and instruction following. Optimized through supervised fine-tuning and preference adjustments, it excels in tasks involving common sense, mathematics, logical reasoning, and code processing.\n\nAt time of release, Phi-3 Medium demonstrated state-of-the-art performance among lightweight models. This model is static, trained on an offline dataset with an October 2023 cutoff date.",
        "pricing": {
            "prompt": "0.0000001",
            "completion": "0.0000001",
            "image": "0",
            "request": "0"
        },
        "context_length": 128000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Other",
            "instruct_type": "phi3"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "217923466",
            "completion_tokens": "217923466"
        }
    },
    "microsoft/phi-3-medium-128k-instruct": {
        "id": "microsoft/phi-3-medium-128k-instruct",
        "name": "Phi-3 Medium 128K Instruct",
        "description": "Phi-3 128K Medium is a powerful 14-billion parameter model designed for advanced language understanding, reasoning, and instruction following. Optimized through supervised fine-tuning and preference adjustments, it excels in tasks involving common sense, mathematics, logical reasoning, and code processing.\n\nAt time of release, Phi-3 Medium demonstrated state-of-the-art performance among lightweight models. In the MMLU-Pro eval, the model even comes close to a Llama3 70B level of performance.\n\nFor 4k context length, try [Phi-3 Medium 4K](/models/microsoft/phi-3-medium-4k-instruct).",
        "pricing": {
            "prompt": "0.000001",
            "completion": "0.000001",
            "image": "0",
            "request": "0"
        },
        "context_length": 128000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Other",
            "instruct_type": "phi3"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "21792346",
            "completion_tokens": "21792346"
        }
    },
    "microsoft/phi-3-medium-4k-instruct": {
        "id": "microsoft/phi-3-medium-4k-instruct",
        "name": "Phi-3 Medium 4K Instruct",
        "description": "Phi-3 4K Medium is a powerful 14-billion parameter model designed for advanced language understanding, reasoning, and instruction following. Optimized through supervised fine-tuning and preference adjustments, it excels in tasks involving common sense, mathematics, logical reasoning, and code processing.\n\nAt time of release, Phi-3 Medium demonstrated state-of-the-art performance among lightweight models. In the MMLU-Pro eval, the model even comes close to a Llama3 70B level of performance.\n\nFor 128k context length, try [Phi-3 Medium 128K](/models/microsoft/phi-3-medium-128k-instruct).",
        "pricing": {
            "prompt": "0.00000014",
            "completion": "0.00000014",
            "image": "0",
            "request": "0"
        },
        "context_length": 4000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Other",
            "instruct_type": "phi3"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "155659618",
            "completion_tokens": "155659618"
        }
    },
    "nvidia/nemotron-4-340b-instruct": {
        "id": "nvidia/nemotron-4-340b-instruct",
        "name": "NVIDIA Nemotron-4 340B Instruct",
        "description": "Nemotron-4-340B-Instruct is an English-language chat model optimized for synthetic data generation. This large language model (LLM) is a fine-tuned version of Nemotron-4-340B-Base, designed for single and multi-turn chat use-cases with a 4,096 token context length.\n\nThe base model was pre-trained on 9 trillion tokens from diverse English texts, 50+ natural languages, and 40+ coding languages. The instruct model underwent additional alignment steps:\n\n1. Supervised Fine-tuning (SFT)\n2. Direct Preference Optimization (DPO)\n3. Reward-aware Preference Optimization (RPO)\n\nThe alignment process used approximately 20K human-annotated samples, while 98% of the data for fine-tuning was synthetically generated. Detailed information about the synthetic data generation pipeline is available in the [technical report](https://arxiv.org/html/2406.11704v1).",
        "pricing": {
            "prompt": "0.0000042",
            "completion": "0.0000042",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Other",
            "instruct_type": "nemotron"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "5188653",
            "completion_tokens": "5188653"
        }
    },
    "mistralai/mixtral-8x7b": {
        "id": "mistralai/mixtral-8x7b",
        "name": "Mixtral 8x7B (base)",
        "description": "A pretrained generative Sparse Mixture of Experts, by Mistral AI. Incorporates 8 experts (feed-forward networks) for a total of 47B parameters. Base model (not fine-tuned for instructions) - see [Mixtral 8x7B Instruct](/models/mistralai/mixtral-8x7b-instruct) for an instruct-tuned model.\n\n#moe",
        "pricing": {
            "prompt": "0.0000005",
            "completion": "0.0000005",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "none"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "43584693",
            "completion_tokens": "43584693"
        }
    },
    "mistralai/mixtral-8x7b-instruct": {
        "id": "mistralai/mixtral-8x7b-instruct",
        "name": "Mixtral 8x7B Instruct",
        "description": "A pretrained generative Sparse Mixture of Experts, by Mistral AI, for chat and instruction use. Incorporates 8 experts (feed-forward networks) for a total of 47 billion parameters.\n\nInstruct model fine-tuned by Mistral. #moe",
        "pricing": {
            "prompt": "0.00000024",
            "completion": "0.00000024",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "mistral"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "90801444",
            "completion_tokens": "90801444"
        }
    },
    "mistralai/mixtral-8x22b-instruct": {
        "id": "mistralai/mixtral-8x22b-instruct",
        "name": "Mistral: Mixtral 8x22B Instruct",
        "description": "Mistral's official instruct fine-tuned version of [Mixtral 8x22B](/models/mistralai/mixtral-8x22b). It uses 39B active parameters out of 141B, offering unparalleled cost efficiency for its size. Its strengths include:\n- strong math, coding, and reasoning\n- large context length (64k)\n- fluency in English, French, Italian, German, and Spanish\n\nSee benchmarks on the launch announcement [here](https://mistral.ai/news/mixtral-8x22b/).\n#moe",
        "pricing": {
            "prompt": "0.00000065",
            "completion": "0.00000065",
            "image": "0",
            "request": "0"
        },
        "context_length": 65536,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "mistral"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "33526687",
            "completion_tokens": "33526687"
        }
    },
    "mistralai/mistral-7b-instruct-v0.1": {
        "id": "mistralai/mistral-7b-instruct-v0.1",
        "name": "Mistral: Mistral 7B Instruct v0.1",
        "description": "A 7.3B parameter model that outperforms Llama 2 13B on all benchmarks, with optimizations for speed and context length.",
        "pricing": {
            "prompt": "0.000000064",
            "completion": "0.000000064",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "mistral"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "340505415",
            "completion_tokens": "340505415"
        }
    },
    "mistralai/mistral-7b-instruct-v0.2": {
        "id": "mistralai/mistral-7b-instruct-v0.2",
        "name": "Mistral: Mistral 7B Instruct v0.2",
        "description": "A high-performing, industry-standard 7.3B parameter model, with optimizations for speed and context length.\n\nAn improved version of [Mistral 7B Instruct](/modelsmistralai/mistral-7b-instruct-v0.1), with the following changes:\n\n- 32k context window (vs 8k context in v0.1)\n- Rope-theta = 1e6\n- No Sliding-Window Attention",
        "pricing": {
            "prompt": "0.00000007",
            "completion": "0.00000007",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "mistral"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "311319237",
            "completion_tokens": "311319237"
        }
    },
    "mistralai/mistral-7b-instruct": {
        "id": "mistralai/mistral-7b-instruct",
        "name": "Mistral: Mistral 7B Instruct",
        "description": "A high-performing, industry-standard 7.3B parameter model, with optimizations for speed and context length.",
        "pricing": {
            "prompt": "0.000000065",
            "completion": "0.000000065",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "mistral"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "335266870",
            "completion_tokens": "335266870"
        }
    },
    "mistralai/mistral-7b-instruct-v0.3": {
        "id": "mistralai/mistral-7b-instruct-v0.3",
        "name": "Mistral: Mistral 7B Instruct v0.3",
        "description": "A high-performing, industry-standard 7.3B parameter model, with optimizations for speed and context length.\n\nAn improved version of [Mistral 7B Instruct v0.2](/models/mistralai/mistral-7b-instruct-v0.2), with the following changes:\n\n- Extended vocabulary to 32768\n- Supports v3 Tokenizer\n- Supports function calling\n\nNOTE: Support for function calling depends on the provider.",
        "pricing": {
            "prompt": "0.000000065",
            "completion": "0.000000065",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "mistral"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "335266870",
            "completion_tokens": "335266870"
        }
    },
    "lynn/soliloquy-l3": {
        "id": "lynn/soliloquy-l3",
        "name": "Lynn: Llama 3 Soliloquy 8B v2",
        "description": "Soliloquy-L3 v2 is a fast, highly capable roleplaying model designed for immersive, dynamic experiences. Trained on over 250 million tokens of roleplaying data, Soliloquy-L3 has a vast knowledge base, rich literary expression, and support for up to 24k context length. It outperforms existing ~13B models, delivering enhanced roleplaying capabilities.\n\nUsage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
        "pricing": {
            "prompt": "0.00000005",
            "completion": "0.00000005",
            "image": "0",
            "request": "0"
        },
        "context_length": 24576,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": "llama3"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "435846932",
            "completion_tokens": "435846932"
        }
    },
    "qwen/qwen-2-72b-instruct": {
        "id": "qwen/qwen-2-72b-instruct",
        "name": "Qwen 2 72B Instruct",
        "description": "Qwen2 72B is a transformer-based model that excels in language understanding, multilingual capabilities, coding, mathematics, and reasoning.\n\nIt features SwiGLU activation, attention QKV bias, and group query attention. It is pretrained on extensive data with supervised finetuning and direct preference optimization.\n\nFor more details, see this [blog post](https://qwenlm.github.io/blog/qwen2/) and [GitHub repo](https://github.com/QwenLM/Qwen2).\n\nUsage of this model is subject to [Tongyi Qianwen LICENSE AGREEMENT](https://huggingface.co/Qwen/Qwen1.5-110B-Chat/blob/main/LICENSE).",
        "pricing": {
            "prompt": "0.00000056",
            "completion": "0.00000077",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Qwen",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "38914904",
            "completion_tokens": "28301748"
        }
    },
    "deepseek/deepseek-chat": {
        "id": "deepseek/deepseek-chat",
        "name": "DeepSeek-V2 Chat",
        "description": "DeepSeek-V2 Chat is a conversational finetune of DeepSeek-V2, a Mixture-of-Experts (MoE) language model. It comprises 236B total parameters, of which 21B are activated for each token.\n\nCompared with DeepSeek 67B, DeepSeek-V2 achieves stronger performance, and meanwhile saves 42.5% of training costs, reduces the KV cache by 93.3%, and boosts the maximum generation throughput to 5.76 times.\n\nDeepSeek-V2 achieves remarkable performance on both standard benchmarks and open-ended generation evaluations.",
        "pricing": {
            "prompt": "0.00000014",
            "completion": "0.00000028",
            "image": "0",
            "request": "0"
        },
        "context_length": 128000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Other",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "155659618",
            "completion_tokens": "77829809"
        }
    },
    "deepseek/deepseek-coder": {
        "id": "deepseek/deepseek-coder",
        "name": "DeepSeek-Coder-V2",
        "description": "DeepSeek-Coder-V2, an open-source Mixture-of-Experts (MoE) code language model. It is further pre-trained from an intermediate checkpoint of DeepSeek-V2 with additional 6 trillion tokens.\n\nThe original V1 model was trained from scratch on 2T tokens, with a composition of 87% code and 13% natural language in both English and Chinese. It was pre-trained on project-level code corpus by employing a extra fill-in-the-blank task.",
        "pricing": {
            "prompt": "0.00000014",
            "completion": "0.00000028",
            "image": "0",
            "request": "0"
        },
        "context_length": 128000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Other",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "155659618",
            "completion_tokens": "77829809"
        }
    },
    "google/gemma-7b-it": {
        "id": "google/gemma-7b-it",
        "name": "Google: Gemma 7B",
        "description": "Gemma by Google is an advanced, open-source language model family, leveraging the latest in decoder-only, text-to-text technology. It offers English language capabilities across text generation tasks like question answering, summarization, and reasoning. The Gemma 7B variant is comparable in performance to leading open source models.\n\nUsage of Gemma is subject to Google's [Gemma Terms of Use](https://ai.google.dev/gemma/terms).",
        "pricing": {
            "prompt": "0.00000007",
            "completion": "0.00000007",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Gemini",
            "instruct_type": "gemma"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "311319237",
            "completion_tokens": "311319237"
        }
    },
    "google/gemma-2-9b-it": {
        "id": "google/gemma-2-9b-it",
        "name": "Google: Gemma 2 9B",
        "description": "Gemma 2 9B by Google is an advanced, open-source language model that sets a new standard for efficiency and performance in its size class.\n\nDesigned for a wide variety of tasks, it empowers developers and researchers to build innovative applications, while maintaining accessibility, safety, and cost-effectiveness.\n\nSee the [launch announcement](https://blog.google/technology/developers/google-gemma-2/) for more details. Usage of Gemma is subject to Google's [Gemma Terms of Use](https://ai.google.dev/gemma/terms).",
        "pricing": {
            "prompt": "0.0000002",
            "completion": "0.0000002",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Gemini",
            "instruct_type": "gemma"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "108961733",
            "completion_tokens": "108961733"
        }
    },
    "fireworks/firellava-13b": {
        "id": "fireworks/firellava-13b",
        "name": "FireLLaVA 13B",
        "description": "A blazing fast vision-language model, FireLLaVA quickly understands both text and images. It achieves impressive chat skills in tests, and was designed to mimic multimodal GPT-4.\n\nThe first commercially permissive open source LLaVA model, trained entirely on open source LLM generated instruction following data.",
        "pricing": {
            "prompt": "0.0000002",
            "completion": "0.0000002",
            "image": "0.0001152",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "Llama2",
            "instruct_type": "vicuna"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "108961733",
            "completion_tokens": "108961733"
        }
    },
    "sophosympatheia/midnight-rose-70b": {
        "id": "sophosympatheia/midnight-rose-70b",
        "name": "Midnight Rose 70B",
        "description": "A merge with a complex family tree, this model was crafted for roleplaying and storytelling. Midnight Rose is a successor to Rogue Rose and Aurora Nights and improves upon them both. It wants to produce lengthy output by default and is the best creative writing merge produced so far by sophosympatheia.\n\nDescending from earlier versions of Midnight Rose and [Wizard Tulu Dolphin 70B](https://huggingface.co/sophosympatheia/Wizard-Tulu-Dolphin-70B-v1.0), it inherits the best qualities of each.",
        "pricing": {
            "prompt": "0.0000008",
            "completion": "0.0000008",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "airoboros"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "27240433",
            "completion_tokens": "27240433"
        }
    },
    "jondurbin/airoboros-l2-70b": {
        "id": "jondurbin/airoboros-l2-70b",
        "name": "Airoboros 70B",
        "description": "A Llama 2 70B fine-tune using synthetic data (the Airoboros dataset).\n\nCurrently based on [jondurbin/airoboros-l2-70b](https://huggingface.co/jondurbin/airoboros-l2-70b-2.2.1), but might get updated in the future.",
        "pricing": {
            "prompt": "-1",
            "completion": "-1",
            "request": "-1",
            "image": "-1"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "airoboros"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": null
    },
    "austism/chronos-hermes-13b": {
        "id": "austism/chronos-hermes-13b",
        "name": "Chronos Hermes 13B v2",
        "description": "A 75/25 merge of [Chronos 13b v2](https://huggingface.co/elinas/chronos-13b-v2) and [Nous Hermes Llama2 13b](/models/nousresearch/nous-hermes-llama2-13b). This offers the imaginative writing style of Chronos while retaining coherency. Outputs are long and use exceptional prose. #merge",
        "pricing": {
            "prompt": "0.00000013",
            "completion": "0.00000013",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "167633435",
            "completion_tokens": "167633435"
        }
    },
    "teknium/openhermes-2.5-mistral-7b": {
        "id": "teknium/openhermes-2.5-mistral-7b",
        "name": "OpenHermes 2.5 Mistral 7B",
        "description": "A continuation of [OpenHermes 2 model](/models/teknium/openhermes-2-mistral-7b), trained on additional code datasets.\nPotentially the most interesting finding from training on a good ratio (est. of around 7-14% of the total dataset) of code instruction was that it has boosted several non-code benchmarks, including TruthfulQA, AGIEval, and GPT4All suite. It did however reduce BigBench benchmark score, but the net gain overall is significant.",
        "pricing": {
            "prompt": "0.00000017",
            "completion": "0.00000017",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "128190274",
            "completion_tokens": "128190274"
        }
    },
    "gryphe/mythomax-l2-13b": {
        "id": "gryphe/mythomax-l2-13b",
        "name": "MythoMax 13B",
        "description": "One of the highest performing and most popular fine-tunes of Llama 2 13B, with rich descriptions and roleplay. #merge",
        "pricing": {
            "prompt": "0.00000012",
            "completion": "0.00000012",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "181602888",
            "completion_tokens": "181602888"
        }
    },
    "undi95/toppy-m-7b": {
        "id": "undi95/toppy-m-7b",
        "name": "Toppy M 7B",
        "description": "A wild 7B parameter model that merges several models using the new task_arithmetic merge method from mergekit.\nList of merged models:\n- NousResearch/Nous-Capybara-7B-V1.9\n- [HuggingFaceH4/zephyr-7b-beta](/models/huggingfaceh4/zephyr-7b-beta)\n- lemonilia/AshhLimaRP-Mistral-7B\n- Vulkane/120-Days-of-Sodom-LoRA-Mistral-7b\n- Undi95/Mistral-pippa-sharegpt-7b-qlora\n\n#merge #uncensored",
        "pricing": {
            "prompt": "0.00000007",
            "completion": "0.00000007",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "311319237",
            "completion_tokens": "311319237"
        }
    },
    "lizpreciatior/lzlv-70b-fp16-hf": {
        "id": "lizpreciatior/lzlv-70b-fp16-hf",
        "name": "lzlv 70B",
        "description": "A Mythomax/MLewd_13B-style merge of selected 70B models.\nA multi-model merge of several LLaMA2 70B finetunes for roleplaying and creative work. The goal was to create a model that combines creativity with intelligence for an enhanced experience.\n\n#merge #uncensored",
        "pricing": {
            "prompt": "0.00000058",
            "completion": "0.00000078",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "airoboros"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "37573011",
            "completion_tokens": "27938905"
        }
    },
    "neversleep/noromaid-mixtral-8x7b-instruct": {
        "id": "neversleep/noromaid-mixtral-8x7b-instruct",
        "name": "Noromaid Mixtral 8x7B Instruct",
        "description": "This model was trained for 8h(v1) + 8h(v2) + 12h(v3) on customized modified datasets, focusing on RP, uncensoring, and a modified version of the Alpaca prompting (that was already used in LimaRP), which should be at the same conversational level as ChatLM or Llama2-Chat without adding any additional special tokens.",
        "pricing": {
            "prompt": "0.000008",
            "completion": "0.000008",
            "image": "0",
            "request": "0"
        },
        "context_length": 8000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "alpaca-modif"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "2724043",
            "completion_tokens": "2724043"
        }
    },
    "nousresearch/nous-hermes-2-mixtral-8x7b-dpo": {
        "id": "nousresearch/nous-hermes-2-mixtral-8x7b-dpo",
        "name": "Nous: Hermes 2 Mixtral 8x7B DPO",
        "description": "Nous Hermes 2 Mixtral 8x7B DPO is the new flagship Nous Research model trained over the [Mixtral 8x7B MoE LLM](/models/mistralai/mixtral-8x7b).\n\nThe model was trained on over 1,000,000 entries of primarily [GPT-4](/models/openai/gpt-4) generated data, as well as other high quality data from open datasets across the AI landscape, achieving state of the art performance on a variety of tasks.\n\n#moe",
        "pricing": {
            "prompt": "0.00000027",
            "completion": "0.00000027",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "80712394",
            "completion_tokens": "80712394"
        }
    },
    "nousresearch/nous-hermes-llama2-13b": {
        "id": "nousresearch/nous-hermes-llama2-13b",
        "name": "Nous: Hermes 13B",
        "description": "A state-of-the-art language model fine-tuned on over 300k instructions by Nous Research, with Teknium and Emozilla leading the fine tuning process.",
        "pricing": {
            "prompt": "0.00000017",
            "completion": "0.00000017",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "128190274",
            "completion_tokens": "128190274"
        }
    },
    "nousresearch/nous-capybara-34b": {
        "id": "nousresearch/nous-capybara-34b",
        "name": "Nous: Capybara 34B",
        "description": "This model is trained on the Yi-34B model for 3 epochs on the Capybara dataset. It's the first 34B Nous model and first 200K context length Nous model.",
        "pricing": {
            "prompt": "0.0000009",
            "completion": "0.0000009",
            "image": "0",
            "request": "0"
        },
        "context_length": 200000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "airoboros"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "24213718",
            "completion_tokens": "24213718"
        }
    },
    "rwkv/rwkv-5-world-3b": {
        "id": "rwkv/rwkv-5-world-3b",
        "name": "RWKV v5 World 3B",
        "description": "[RWKV](https://wiki.rwkv.com) is an RNN (recurrent neural network) with transformer-level performance. It aims to combine the best of RNNs and transformers - great performance, fast inference, low VRAM, fast training, \"infinite\" context length, and free sentence embedding.\n\nRWKV-5 is trained on 100+ world languages (70% English, 15% multilang, 15% code).\n\nRWKV 3B models are provided for free, by Recursal.AI, for the beta period. More details [here](https://substack.recursal.ai/p/public-rwkv-3b-model-via-openrouter).\n\n#rnn",
        "pricing": {
            "prompt": "0",
            "completion": "0",
            "image": "0",
            "request": "0"
        },
        "context_length": 10000,
        "architecture": {
            "modality": "text",
            "tokenizer": "RWKV",
            "instruct_type": "rwkv"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "Infinity",
            "completion_tokens": "Infinity"
        }
    },
    "recursal/rwkv-5-3b-ai-town": {
        "id": "recursal/rwkv-5-3b-ai-town",
        "name": "RWKV v5 3B AI Town",
        "description": "This is an [RWKV 3B model](/models/rwkv/rwkv-5-world-3b) finetuned specifically for the [AI Town](https://github.com/a16z-infra/ai-town) project.\n\n[RWKV](https://wiki.rwkv.com) is an RNN (recurrent neural network) with transformer-level performance. It aims to combine the best of RNNs and transformers - great performance, fast inference, low VRAM, fast training, \"infinite\" context length, and free sentence embedding.\n\nRWKV 3B models are provided for free, by Recursal.AI, for the beta period. More details [here](https://substack.recursal.ai/p/public-rwkv-3b-model-via-openrouter).\n\n#rnn",
        "pricing": {
            "prompt": "0",
            "completion": "0",
            "image": "0",
            "request": "0"
        },
        "context_length": 10000,
        "architecture": {
            "modality": "text",
            "tokenizer": "RWKV",
            "instruct_type": "rwkv"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "Infinity",
            "completion_tokens": "Infinity"
        }
    },
    "recursal/eagle-7b": {
        "id": "recursal/eagle-7b",
        "name": "RWKV v5: Eagle 7B",
        "description": "Eagle 7B is trained on 1.1 Trillion Tokens across 100+ world languages (70% English, 15% multilang, 15% code).\n\n- Built on the [RWKV-v5](/models?q=rwkv) architecture (a linear transformer with 10-100x+ lower inference cost)\n- Ranks as the world's greenest 7B model (per token)\n- Outperforms all 7B class models in multi-lingual benchmarks\n- Approaches Falcon (1.5T), LLaMA2 (2T), Mistral (>2T?) level of performance in English evals\n- Trade blows with MPT-7B (1T) in English evals\n- All while being an [\"Attention-Free Transformer\"](https://www.isattentionallyouneed.com/)\n\nEagle 7B models are provided for free, by [Recursal.AI](https://recursal.ai), for the beta period till end of March 2024\n\nFind out more [here](https://blog.rwkv.com/p/eagle-7b-soaring-past-transformers)\n\n[rnn](/models?q=rwkv)",
        "pricing": {
            "prompt": "0",
            "completion": "0",
            "image": "0",
            "request": "0"
        },
        "context_length": 10000,
        "architecture": {
            "modality": "text",
            "tokenizer": "RWKV",
            "instruct_type": "rwkv"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "Infinity",
            "completion_tokens": "Infinity"
        }
    },
    "nousresearch/nous-hermes-llama2-70b": {
        "id": "nousresearch/nous-hermes-llama2-70b",
        "name": "Nous: Hermes 70B",
        "description": "A state-of-the-art language model fine-tuned on over 300k instructions by Nous Research, with Teknium and Emozilla leading the fine tuning process.",
        "pricing": {
            "prompt": "-1",
            "completion": "-1",
            "request": "-1",
            "image": "-1"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": null
    },
    "01-ai/yi-34b-200k": {
        "id": "01-ai/yi-34b-200k",
        "name": "Yi 34B 200K",
        "description": "The Yi series models are large language models trained from scratch by developers at [01.AI](https://01.ai/). This version was trained on a large context length, allowing ~200k words (1000 paragraphs) of combined input and output.",
        "pricing": {
            "prompt": "-1",
            "completion": "-1",
            "request": "-1",
            "image": "-1"
        },
        "context_length": 200000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Yi",
            "instruct_type": "none"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": null
    },
    "openrouter/cinematika-7b": {
        "id": "openrouter/cinematika-7b",
        "name": "Cinematika 7B (alpha)",
        "description": "This model is under development. Check the [OpenRouter Discord](https://discord.gg/fVyRaUDgxW) for updates.",
        "pricing": {
            "prompt": "-1",
            "completion": "-1",
            "request": "-1",
            "image": "-1"
        },
        "context_length": 8000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "airoboros"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": null
    },
    "migtissera/synthia-70b": {
        "id": "migtissera/synthia-70b",
        "name": "Synthia 70B",
        "description": "SynthIA (Synthetic Intelligent Agent) is a LLama-2 70B model trained on Orca style datasets. It has been fine-tuned for instruction following as well as having long-form conversations.",
        "pricing": {
            "prompt": "-1",
            "completion": "-1",
            "request": "-1",
            "image": "-1"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "airoboros"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": null
    },
    "jebcarter/psyfighter-13b": {
        "id": "jebcarter/psyfighter-13b",
        "name": "Psyfighter 13B",
        "description": "A merge model based on [Llama-2-13B](/models/meta-llama/llama-2-13b-chat) and made possible thanks to the compute provided by the KoboldAI community. It's a merge between:\n\n- [KoboldAI/LLaMA2-13B-Tiefighter](https://huggingface.co/KoboldAI/LLaMA2-13B-Tiefighter)\n- [chaoyi-wu/MedLLaMA_13B](https://huggingface.co/chaoyi-wu/MedLLaMA_13B)\n- [Doctor-Shotgun/llama-2-13b-chat-limarp-v2-merged](https://huggingface.co/Doctor-Shotgun/llama-2-13b-chat-limarp-v2-merged).\n\n#merge",
        "pricing": {
            "prompt": "-1",
            "completion": "-1",
            "request": "-1",
            "image": "-1"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": null
    },
    "jondurbin/bagel-34b": {
        "id": "jondurbin/bagel-34b",
        "name": "Bagel 34B v0.2",
        "description": "An experimental fine-tune of [Yi 34b 200k](/models/01-ai/yi-34b-200k) using [bagel](https://github.com/jondurbin/bagel). This is the version of the fine-tune before direct preference optimization (DPO) has been applied. DPO performs better on benchmarks, but this version is likely better for creative writing, roleplay, etc.",
        "pricing": {
            "prompt": "-1",
            "completion": "-1",
            "request": "-1",
            "image": "-1"
        },
        "context_length": 200000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Yi",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": null
    },
    "cognitivecomputations/dolphin-mixtral-8x7b": {
        "id": "cognitivecomputations/dolphin-mixtral-8x7b",
        "name": "Dolphin 2.6 Mixtral 8x7B 🐬",
        "description": "This is a 16k context fine-tune of [Mixtral-8x7b](/models/mistralai/mixtral-8x7b). It excels in coding tasks due to extensive training with coding data and is known for its obedience, although it lacks DPO tuning.\n\nThe model is uncensored and is stripped of alignment and bias. It requires an external alignment layer for ethical use. Users are cautioned to use this highly compliant model responsibly, as detailed in a blog post about uncensored models at [erichartford.com/uncensored-models](https://erichartford.com/uncensored-models).\n\n#moe #uncensored",
        "pricing": {
            "prompt": "0.00000024",
            "completion": "0.00000024",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "90801444",
            "completion_tokens": "90801444"
        }
    },
    "cognitivecomputations/dolphin-mixtral-8x22b": {
        "id": "cognitivecomputations/dolphin-mixtral-8x22b",
        "name": "Dolphin 2.9.2 Mixtral 8x22B 🐬",
        "description": "Dolphin 2.9 is designed for instruction following, conversational, and coding. This model is a finetune of [Mixtral 8x22B Instruct](/models/mistralai/mixtral-8x22b-instruct). It features a 64k context length and was fine-tuned with a 16k sequence length using ChatML templates.\n\nThis model is a successor to [Dolphin Mixtral 8x7B](/models/cognitivecomputations/dolphin-mixtral-8x7b).\n\nThe model is uncensored and is stripped of alignment and bias. It requires an external alignment layer for ethical use. Users are cautioned to use this highly compliant model responsibly, as detailed in a blog post about uncensored models at [erichartford.com/uncensored-models](https://erichartford.com/uncensored-models).\n\n#moe #uncensored",
        "pricing": {
            "prompt": "0.0000009",
            "completion": "0.0000009",
            "image": "0",
            "request": "0"
        },
        "context_length": 65536,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "24213718",
            "completion_tokens": "24213718"
        }
    },
    "liuhaotian/llava-yi-34b": {
        "id": "liuhaotian/llava-yi-34b",
        "name": "LLaVA v1.6 34B",
        "description": "LLaVA Yi 34B is an open-source model trained by fine-tuning LLM on multimodal instruction-following data. It is an auto-regressive language model, based on the transformer architecture. Base LLM: [NousResearch/Nous-Hermes-2-Yi-34B](/models/nousresearch/nous-hermes-yi-34b)\n\nIt was trained in December 2023.",
        "pricing": {
            "prompt": "0.0000009",
            "completion": "0.0000009",
            "image": "0.0005184",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "Yi",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "24213718",
            "completion_tokens": "24213718"
        }
    },
    "nousresearch/hermes-2-pro-llama-3-8b": {
        "id": "nousresearch/hermes-2-pro-llama-3-8b",
        "name": "NousResearch: Hermes 2 Pro - Llama-3 8B",
        "description": "Hermes 2 Pro is an upgraded, retrained version of Nous Hermes 2, consisting of an updated and cleaned version of the OpenHermes 2.5 Dataset, as well as a newly introduced Function Calling and JSON Mode dataset developed in-house.",
        "pricing": {
            "prompt": "0.00000014",
            "completion": "0.00000014",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": "chatml"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "155659618",
            "completion_tokens": "155659618"
        }
    },
    "openchat/openchat-7b": {
        "id": "openchat/openchat-7b",
        "name": "OpenChat 3.5 7B",
        "description": "OpenChat 7B is a library of open-source language models, fine-tuned with \"C-RLFT (Conditioned Reinforcement Learning Fine-Tuning)\" - a strategy inspired by offline reinforcement learning. It has been trained on mixed-quality data without preference labels.\n\n- For OpenChat fine-tuned on Mistral 7B, check out [OpenChat 7B](/models/openchat/openchat-7b).\n- For OpenChat fine-tuned on Llama 8B, check out [OpenChat 8B](/models/openchat/openchat-8b).\n\n#open-source",
        "pricing": {
            "prompt": "0.00000007",
            "completion": "0.00000007",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "openchat"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "311319237",
            "completion_tokens": "311319237"
        }
    },
    "openchat/openchat-8b": {
        "id": "openchat/openchat-8b",
        "name": "OpenChat 3.6 8B",
        "description": "OpenChat 8B is a library of open-source language models, fine-tuned with \"C-RLFT (Conditioned Reinforcement Learning Fine-Tuning)\" - a strategy inspired by offline reinforcement learning. It has been trained on mixed-quality data without preference labels.\n\nIt outperforms many similarly sized models including [Llama 3 8B Instruct](/models/meta-llama/llama-3-8b-instruct) and various fine-tuned models. It excels in general conversation, coding assistance, and mathematical reasoning.\n\n- For OpenChat fine-tuned on Mistral 7B, check out [OpenChat 7B](/models/openchat/openchat-7b).\n- For OpenChat fine-tuned on Llama 8B, check out [OpenChat 8B](/models/openchat/openchat-8b).\n\n#open-source",
        "pricing": {
            "prompt": "0.000000064",
            "completion": "0.000000064",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": "openchat"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "340505415",
            "completion_tokens": "340505415"
        }
    },
    "bigcode/starcoder2-15b-instruct": {
        "id": "bigcode/starcoder2-15b-instruct",
        "name": "StarCoder2 15B Instruct",
        "description": "StarCoder2 15B Instruct excels in coding-related tasks, primarily in Python. It is the first self-aligned open-source LLM developed by BigCode. This model was fine-tuned without any human annotations or distilled data from proprietary LLMs.\n\nThe base model uses [Grouped Query Attention](https://arxiv.org/abs/2305.13245) and was trained using the [Fill-in-the-Middle objective](https://arxiv.org/abs/2207.14255) objective on 4+ trillion tokens.",
        "pricing": {
            "prompt": "-1",
            "completion": "-1",
            "request": "-1",
            "image": "-1"
        },
        "context_length": 16384,
        "architecture": {
            "modality": "text",
            "tokenizer": "Other",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": null
    },
    "sao10k/l3-euryale-70b": {
        "id": "sao10k/l3-euryale-70b",
        "name": "Llama 3 Euryale 70B v2.1",
        "description": "Euryale 70B v2.1 is a model focused on creative roleplay from [Sao10k](https://ko-fi.com/sao10k).\n\n- Better prompt adherence.\n- Better anatomy / spatial awareness.\n- Adapts much better to unique and custom formatting / reply formats.\n- Very creative, lots of unique swipes.\n- Is not restrictive during roleplays.",
        "pricing": {
            "prompt": "0.00000148",
            "completion": "0.00000148",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": "llama3"
        },
        "top_provider": {
            "max_completion_tokens": 16000,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "14724558",
            "completion_tokens": "14724558"
        }
    },
    "sao10k/l3-stheno-8b": {
        "id": "sao10k/l3-stheno-8b",
        "name": "Llama 3 Stheno 8B v3.3 32K",
        "description": "Stheno 8B 32K is a creative writing/roleplay model from [Sao10k](https://ko-fi.com/sao10k). It was trained at 8K context, then expanded to 32K context.\n\nCompared to older Stheno version, this model is trained on:\n- 2x the amount of creative writing samples\n- Cleaned up roleplaying samples\n- Fewer low quality samples",
        "pricing": {
            "prompt": "0.00000025",
            "completion": "0.0000015",
            "image": "0",
            "request": "0"
        },
        "context_length": 32000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": "llama3"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "87169386",
            "completion_tokens": "14528231"
        }
    },
    "liuhaotian/llava-13b": {
        "id": "liuhaotian/llava-13b",
        "name": "LLaVA 13B",
        "description": "LLaVA is a large multimodal model that combines a vision encoder and Vicuna for general-purpose visual and language understanding, achieving impressive chat capabilities and setting a new state-of-the-art accuracy on Science QA.\n\n#multimodal",
        "pricing": {
            "prompt": "-1",
            "completion": "-1",
            "request": "-1",
            "image": "-1"
        },
        "context_length": 2048,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "Llama2",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": null
    },
    "nousresearch/nous-hermes-2-vision-7b": {
        "id": "nousresearch/nous-hermes-2-vision-7b",
        "name": "Nous: Hermes 2 Vision 7B (alpha)",
        "description": "This vision-language model builds on innovations from the popular [OpenHermes-2.5](/models/teknium/openhermes-2.5-mistral-7b) model, by Teknium. It adds vision support, and is trained on a custom dataset enriched with function calling\n\nThis project is led by [qnguyen3](https://twitter.com/stablequan) and [teknium](https://twitter.com/Teknium1).\n\n#multimodal",
        "pricing": {
            "prompt": "-1",
            "completion": "-1",
            "request": "-1",
            "image": "-1"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "Mistral",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": null
    },
    "meta-llama/llama-2-70b-chat:nitro": {
        "id": "meta-llama/llama-2-70b-chat:nitro",
        "name": "Meta: Llama v2 70B Chat (nitro)",
        "description": "The flagship, 70 billion parameter language model from Meta, fine tuned for chat completions. Llama 2 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align to human preferences for helpfulness and safety.\n\nNote: this is a higher-throughput version of [Llama v2 70B Chat](/models/meta-llama/llama-2-70b-chat). It may have higher prices and slightly different outputs.",
        "pricing": {
            "prompt": "0.0000009",
            "completion": "0.0000009",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "llama2"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "24213718",
            "completion_tokens": "24213718"
        }
    },
    "gryphe/mythomax-l2-13b:nitro": {
        "id": "gryphe/mythomax-l2-13b:nitro",
        "name": "MythoMax 13B (nitro)",
        "description": "One of the highest performing and most popular fine-tunes of Llama 2 13B, with rich descriptions and roleplay. #merge\n\nNote: this is a higher-throughput version of [MythoMax 13B](/models/gryphe/mythomax-l2-13b). It may have higher prices and slightly different outputs.",
        "pricing": {
            "prompt": "0.0000002",
            "completion": "0.0000002",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama2",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "108961733",
            "completion_tokens": "108961733"
        }
    },
    "mistralai/mistral-7b-instruct:nitro": {
        "id": "mistralai/mistral-7b-instruct:nitro",
        "name": "Mistral: Mistral 7B Instruct (nitro)",
        "description": "A high-performing, industry-standard 7.3B parameter model, with optimizations for speed and context length.\n\nNote: this is a higher-throughput version of [Mistral 7B Instruct](/models/mistralai/mistral-7b-instruct). It may have higher prices and slightly different outputs.",
        "pricing": {
            "prompt": "0.00000007",
            "completion": "0.00000007",
            "image": "0",
            "request": "0"
        },
        "context_length": 32768,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "mistral"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "311319237",
            "completion_tokens": "311319237"
        }
    },
    "google/gemma-7b-it:nitro": {
        "id": "google/gemma-7b-it:nitro",
        "name": "Google: Gemma 7B (nitro)",
        "description": "Gemma by Google is an advanced, open-source language model family, leveraging the latest in decoder-only, text-to-text technology. It offers English language capabilities across text generation tasks like question answering, summarization, and reasoning. The Gemma 7B variant is comparable in performance to leading open source models.\n\nUsage of Gemma is subject to Google's [Gemma Terms of Use](https://ai.google.dev/gemma/terms).\n\nNote: this is a higher-throughput version of [Gemma 7B](/models/google/gemma-7b-it). It may have higher prices and slightly different outputs.",
        "pricing": {
            "prompt": "0.00000007",
            "completion": "0.00000007",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Gemini",
            "instruct_type": "gemma"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "311319237",
            "completion_tokens": "311319237"
        }
    },
    "undi95/toppy-m-7b:nitro": {
        "id": "undi95/toppy-m-7b:nitro",
        "name": "Toppy M 7B (nitro)",
        "description": "A wild 7B parameter model that merges several models using the new task_arithmetic merge method from mergekit.\nList of merged models:\n- NousResearch/Nous-Capybara-7B-V1.9\n- [HuggingFaceH4/zephyr-7b-beta](/models/huggingfaceh4/zephyr-7b-beta)\n- lemonilia/AshhLimaRP-Mistral-7B\n- Vulkane/120-Days-of-Sodom-LoRA-Mistral-7b\n- Undi95/Mistral-pippa-sharegpt-7b-qlora\n\n#merge #uncensored\n\nNote: this is a higher-throughput version of [Toppy M 7B](/models/undi95/toppy-m-7b). It may have higher prices and slightly different outputs.",
        "pricing": {
            "prompt": "0.00000007",
            "completion": "0.00000007",
            "image": "0",
            "request": "0"
        },
        "context_length": 4096,
        "architecture": {
            "modality": "text",
            "tokenizer": "Mistral",
            "instruct_type": "alpaca"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "311319237",
            "completion_tokens": "311319237"
        }
    },
    "meta-llama/llama-3-70b-instruct:nitro": {
        "id": "meta-llama/llama-3-70b-instruct:nitro",
        "name": "Meta: Llama 3 70B Instruct (nitro)",
        "description": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 70B instruct-tuned version was optimized for high quality dialogue usecases.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).\n\nNote: this is a higher-throughput version of [Llama 3 70B Instruct](/models/meta-llama/llama-3-70b-instruct). It may have higher prices and slightly different outputs.",
        "pricing": {
            "prompt": "0.0000009",
            "completion": "0.0000009",
            "image": "0",
            "request": "0"
        },
        "context_length": 8192,
        "architecture": {
            "modality": "text",
            "tokenizer": "Llama3",
            "instruct_type": "llama3"
        },
        "top_provider": {
            "max_completion_tokens": null,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "24213718",
            "completion_tokens": "24213718"
        }
    },
    "anthropic/claude-3-opus:beta": {
        "id": "anthropic/claude-3-opus:beta",
        "name": "Anthropic: Claude 3 Opus (self-moderated)",
        "description": "This is a lower-latency version of [Claude 3 Opus](/models/anthropic/claude-3-opus), made available in collaboration with Anthropic, that is self-moderated: response moderation happens on the model's side instead of OpenRouter's. It's in beta, and may change in the future.\n\nClaude 3 Opus is Anthropic's most powerful model for highly complex tasks. It boasts top-level performance, intelligence, fluency, and understanding.\n\nSee the launch announcement and benchmark results [here](https://www.anthropic.com/news/claude-3-family)\n\n#multimodal",
        "pricing": {
            "prompt": "0.000015",
            "completion": "0.000075",
            "image": "0.024",
            "request": "0"
        },
        "context_length": 200000,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "Claude",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "1452823",
            "completion_tokens": "290564"
        }
    },
    "anthropic/claude-3-sonnet:beta": {
        "id": "anthropic/claude-3-sonnet:beta",
        "name": "Anthropic: Claude 3 Sonnet (self-moderated)",
        "description": "This is a lower-latency version of [Claude 3 Sonnet](/models/anthropic/claude-3-sonnet), made available in collaboration with Anthropic, that is self-moderated: response moderation happens on the model's side instead of OpenRouter's. It's in beta, and may change in the future.\n\nClaude 3 Sonnet is an ideal balance of intelligence and speed for enterprise workloads. Maximum utility at a lower price, dependable, balanced for scaled deployments.\n\nSee the launch announcement and benchmark results [here](https://www.anthropic.com/news/claude-3-family)\n\n#multimodal",
        "pricing": {
            "prompt": "0.000003",
            "completion": "0.000015",
            "image": "0.0048",
            "request": "0"
        },
        "context_length": 200000,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "Claude",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "7264115",
            "completion_tokens": "1452823"
        }
    },
    "anthropic/claude-3.5-sonnet:beta": {
        "id": "anthropic/claude-3.5-sonnet:beta",
        "name": "Anthropic: Claude 3.5 Sonnet (self-moderated)",
        "description": "This is a lower-latency version of [Claude 3.5 Sonnet](/models/anthropic/claude-3.5-sonnet), made available in collaboration with Anthropic, that is self-moderated: response moderation happens on the model's side instead of OpenRouter's. It's in beta, and may change in the future.\n\nClaude 3.5 Sonnet delivers better-than-Opus capabilities, faster-than-Sonnet speeds, at the same Sonnet prices. Sonnet is particularly good at:\n\n- Coding: Autonomously writes, edits, and runs code with reasoning and troubleshooting\n- Data science: Augments human data science expertise; navigates unstructured data while using multiple tools for insights\n- Visual processing: excelling at interpreting charts, graphs, and images, accurately transcribing text to derive insights beyond just the text alone\n- Agentic tasks: exceptional tool use, making it great at agentic tasks (i.e. complex, multi-step problem solving tasks that require engaging with other systems)\n\n#multimodal",
        "pricing": {
            "prompt": "0.000003",
            "completion": "0.000015",
            "image": "0.0048",
            "request": "0"
        },
        "context_length": 200000,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "Claude",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "7264115",
            "completion_tokens": "1452823"
        }
    },
    "anthropic/claude-3-haiku:beta": {
        "id": "anthropic/claude-3-haiku:beta",
        "name": "Anthropic: Claude 3 Haiku (self-moderated)",
        "description": "This is a lower-latency version of [Claude 3 Haiku](/models/anthropic/claude-3-haiku), made available in collaboration with Anthropic, that is self-moderated: response moderation happens on the model's side instead of OpenRouter's. It's in beta, and may change in the future.\n\nClaude 3 Haiku is Anthropic's fastest and most compact model for\nnear-instant responsiveness. Quick and accurate targeted performance.\n\nSee the launch announcement and benchmark results [here](https://www.anthropic.com/news/claude-3-haiku)\n\n#multimodal",
        "pricing": {
            "prompt": "0.00000025",
            "completion": "0.00000125",
            "image": "0.0004",
            "request": "0"
        },
        "context_length": 200000,
        "architecture": {
            "modality": "multimodal",
            "tokenizer": "Claude",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "87169386",
            "completion_tokens": "17433877"
        }
    },
    "anthropic/claude-2:beta": {
        "id": "anthropic/claude-2:beta",
        "name": "Anthropic: Claude v2 (self-moderated)",
        "description": "This is a lower-latency version of [Claude v2](/models/anthropic/claude-2), made available in collaboration with Anthropic, that is self-moderated: response moderation happens on the model's side instead of OpenRouter's. It's in beta, and may change in the future.\n\nClaude 2 delivers advancements in key capabilities for enterprises—including an industry-leading 200K token context window, significant reductions in rates of model hallucination, system prompts and a new beta feature: tool use.",
        "pricing": {
            "prompt": "0.000008",
            "completion": "0.000024",
            "image": "0",
            "request": "0"
        },
        "context_length": 200000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Claude",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "2724043",
            "completion_tokens": "908014"
        }
    },
    "anthropic/claude-2.0:beta": {
        "id": "anthropic/claude-2.0:beta",
        "name": "Anthropic: Claude v2.0 (self-moderated)",
        "description": "This is a lower-latency version of [Claude v2.0](/models/anthropic/claude-2.0), made available in collaboration with Anthropic, that is self-moderated: response moderation happens on the model's side instead of OpenRouter's. It's in beta, and may change in the future.\n\nAnthropic's flagship model. Superior performance on tasks that require complex reasoning. Supports hundreds of pages of text.",
        "pricing": {
            "prompt": "0.000008",
            "completion": "0.000024",
            "image": "0",
            "request": "0"
        },
        "context_length": 100000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Claude",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "2724043",
            "completion_tokens": "908014"
        }
    },
    "anthropic/claude-2.1:beta": {
        "id": "anthropic/claude-2.1:beta",
        "name": "Anthropic: Claude v2.1 (self-moderated)",
        "description": "This is a lower-latency version of [Claude v2.1](/models/anthropic/claude-2.1), made available in collaboration with Anthropic, that is self-moderated: response moderation happens on the model's side instead of OpenRouter's. It's in beta, and may change in the future.\n\nClaude 2 delivers advancements in key capabilities for enterprises—including an industry-leading 200K token context window, significant reductions in rates of model hallucination, system prompts and a new beta feature: tool use.",
        "pricing": {
            "prompt": "0.000008",
            "completion": "0.000024",
            "image": "0",
            "request": "0"
        },
        "context_length": 200000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Claude",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "2724043",
            "completion_tokens": "908014"
        }
    },
    "anthropic/claude-instant-1:beta": {
        "id": "anthropic/claude-instant-1:beta",
        "name": "Anthropic: Claude Instant v1 (self-moderated)",
        "description": "This is a lower-latency version of [Claude Instant v1](/models/anthropic/claude-instant-1), made available in collaboration with Anthropic, that is self-moderated: response moderation happens on the model's side instead of OpenRouter's. It's in beta, and may change in the future.\n\nAnthropic's model for low-latency, high throughput text generation. Supports hundreds of pages of text.",
        "pricing": {
            "prompt": "0.0000008",
            "completion": "0.0000024",
            "image": "0",
            "request": "0"
        },
        "context_length": 100000,
        "architecture": {
            "modality": "text",
            "tokenizer": "Claude",
            "instruct_type": null
        },
        "top_provider": {
            "max_completion_tokens": 4096,
            "is_moderated": false
        },
        "per_request_limits": {
            "prompt_tokens": "27240433",
            "completion_tokens": "9080144"
        }
    }
};