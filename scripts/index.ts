import { getOpenRouterModels, getOpenRouterLimits, updateOpenRouterModels } from "./openrouter/get-openrouter-models-limits";
import { executeMultiple } from "./test/execute-multiple";
import { reviewText } from "./test/review-text";
import { vectraAddTest, vectraQueryTest } from "./test/vectra-test";

// From the command line arguments, determine which script to run
const script = process.argv[2];

const scripts = {
	getOpenRouterModels: getOpenRouterModels,
	getOpenRouterLimits: getOpenRouterLimits,
	updateOpenRouterModels: updateOpenRouterModels,
	executeMultiple: executeMultiple,
	reviewText: reviewText,
	vectraAddTest: vectraAddTest,
	vectraQueryTest: vectraQueryTest,
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
