import { Models, LLMConfigs } from "@config";

export class ModelFactory {
	public static getDefaultModel(provider: string, _default?: string): string {
		const providerKey = provider === "OpenRouter" ? "openrouter" : provider === "local" ? "local" : "openai";
		const modelKey = this.getLlmDefaultModelKey(provider, _default);

		if (!modelKey) {
			const fastModelKey = this.getLlmDefaultModelKey(provider, "fast");
			return Models[providerKey][fastModelKey].id;
		}

		return Models[providerKey][modelKey].id;
	}

	public static getLlmDefaultModelKey(provider: string, _default: string): string {
		const providerKey = provider === "OpenRouter" ? "openrouter" : provider === "local" ? "local" : "openai";
		const modelKey = LLMConfigs.default.models[providerKey][_default];

		if (!modelKey) {
			return null;
		}

		return modelKey;
	}

	public static isDefaultModelKey(modelKey: string): boolean {
		if (!modelKey) {
			return false;
		}

		return modelKey === "fast" || modelKey === "best" || modelKey === "large";
	}

	public static getModelContextLength(provider: string, modelKey: string): number {
		const providerKey = provider === "OpenRouter" ? "openrouter" : provider === "local" ? "local" : "openai";
		if (this.isDefaultModelKey(modelKey)) {
			modelKey = this.getLlmDefaultModelKey(provider, modelKey);
		}

		return Models[providerKey][modelKey].context_length;
	}
}
