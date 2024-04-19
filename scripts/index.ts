import { getOpenRouterModels, getOpenRouterLimits, updateOpenRouterModels } from "./openrouter/get-openrouter-models-limits";
import { executeMultiple } from "./test/execute-multiple";
import { reviewText } from "./test/review-text";

// From the command line arguments, determine which script to run
const script = process.argv[2];

const scripts = {
	getOpenRouterModels: getOpenRouterModels,
	getOpenRouterLimits: getOpenRouterLimits,
	updateOpenRouterModels: updateOpenRouterModels,
	executeMultiple: executeMultiple,
	reviewText: reviewText,
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
