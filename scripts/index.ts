import { getOpenRouterModels, getOpenRouterLimits, updateOpenRouterModels } from "./openrouter/get-openrouter-models-limits";
import { executeMultiple } from "./test/execute-multiple";
import { reviewText } from "./test/review-text";
import { vectraAddTest, vectraQueryTest } from "./test/vectra-test";
import { rssify } from "./test/rssify";
import { rssified } from "./test/rssified";
import { summarizePage } from "./test/summarize-page";

// From the command line arguments, determine which script to run
const script = process.argv[2];

const scripts = {
	getOpenRouterModels: getOpenRouterModels,
	getOpenRouterLimits: getOpenRouterLimits,
	updateOpenRouterModels: updateOpenRouterModels,
	executeMultiple: executeMultiple,
	reviewText: reviewText,
	rssify: rssify,
	rssified: rssified,
	summarizePage: summarizePage,
	vectraAddTest: vectraAddTest,
	vectraQueryTest: vectraQueryTest,
};

// Run the appropriate script
if (scripts[script]) {
	scripts[script]();
} else {
	console.error(`Unknown script: ${script}\n`);
	console.error(`Available scripts:\n\t- ${Object.keys(scripts).join("\n\t- ")}\n`);
	console.error(`Usage: npm run script [script]\n`);
	process.exit(1);
}
