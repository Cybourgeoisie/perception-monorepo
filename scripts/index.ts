import { getOpenRouterModels, getOpenRouterLimits } from "./get-openrouter-models-limits";

// From the command line arguments, determine which script to run
const script = process.argv[2];

const scripts = ["getOpenRouterModels", "getOpenRouterLimits"];

// Run the appropriate script
switch (script) {
	case "getOpenRouterModels":
		getOpenRouterModels();
		break;
	case "getOpenRouterLimits":
		getOpenRouterLimits();
		break;
	default:
		console.error(`Unknown script: ${script}`);
		console.error(`Available scripts: ${scripts.join(", ")}`);
		console.error(`Usage: npm run script [script]`);
		break;
}
