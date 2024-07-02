import { OpenRouterModels } from "./models/openrouter";
import { OpenAiModels } from "./models/openai";
import { AnthropicModels } from "./models/anthropic";
import { LocalModels } from "./models/local";

export const Models = {
	openrouter: OpenRouterModels,
	openai: OpenAiModels,
	anthropic: AnthropicModels,
	local: LocalModels,
};
