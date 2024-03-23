import { getOpenRouterModels, getOpenRouterLimits, updateOpenRouterModels } from "./openai/get-openrouter-models-limits";

// From the command line arguments, determine which script to run
const script = process.argv[2];

const scripts = {
	getOpenRouterModels: getOpenRouterModels,
	getOpenRouterLimits: getOpenRouterLimits,
	updateOpenRouterModels: updateOpenRouterModels,
};

// Run the appropriate script
if (scripts[script]) {
	scripts[script]();
} else {
	console.error(`Unknown script: ${script}`);
	console.error(`Available scripts: ${Object.keys(scripts).join(", ")}`);
	console.error(`Usage: npm run script [script]`);
	process.exit(1);
}
