import { OpenAI } from "@openai";
import { Config } from "@config";
import fs from "fs";

export function getOpenRouterModels() {
	// Retrieve the OpenAI API key
	const apiKey = Config.OPENROUTER_API_KEY;

	// Create a new OpenAI instance
	const openai = new OpenAI({ apiKey });

	// Retrieve the OpenRouter models from the OpenAI API
	openai
		.getOpenRouterModels()
		.then((models) => {
			console.log(models);
		})
		.catch((error) => {
			console.error(error);
		});
}

export function updateOpenRouterModels() {
	// Retrieve the OpenAI API key
	const apiKey = Config.OPENROUTER_API_KEY;

	// Create a new OpenAI instance
	const openai = new OpenAI({ apiKey });

	// Retrieve the OpenRouter models from the OpenAI API
	openai
		.getOpenRouterModels()
		.then((models) => {
			// Write the models to a specific models config directory
			const formattedModels = ((models && models.data) || {}).reduce((acc, model) => {
				return { ...acc, [`${model.id}`]: model };
			}, {});
			fs.writeFileSync("libs/config/src/models.ts", `export const Models = ${JSON.stringify(formattedModels, null, 4)};`);
		})
		.catch((error) => {
			console.error(error);
		});
}

export function getOpenRouterLimits() {
	// Retrieve the OpenAI API key
	const apiKey = Config.OPENROUTER_API_KEY;

	// Create a new OpenAI instance
	const openai = new OpenAI({ apiKey });

	// Retrieve the OpenRouter limits from the OpenAI API
	openai
		.getOpenRouterLimits()
		.then((limits) => {
			console.log(limits);
		})
		.catch((error) => {
			console.error(error);
		});
}
