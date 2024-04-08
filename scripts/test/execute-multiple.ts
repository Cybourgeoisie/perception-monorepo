import { State } from "@openai";
import AutoBotAdapter from "packages/adapters/autobot/AutoBotAdapter";
import fs from "fs";
import path from "path";
import dJSON from "dirty-json";

// For each line in the file, run the program
const objectiveBase = fs.readFileSync(path.resolve(process.cwd(), "data/prompts", "objective-base.txt"), "utf-8");
const prompts = fs.readFileSync(path.resolve(process.cwd(), "data/prompts", "prompts.txt"), "utf-8").split("\n");

/*
const daisy = {
	each: prompts,
	actions: [
	{
		promptKey: "researcher",
		objective: {
			base: objectiveBase,
			prompts: prompts
		},
		limit: 1,
		safetyRunLimit: 20
	},
	{
		promptKey: "extraction",
		exitAfterCompletion: true,
		"path:contents": "pipe:state.requestMessage.logs",
		jsonresponse: "{'date':[date or year],'summary':[string : summary of the event],'imagery':[array : strings of all mentioned iconic imagery]}",
	},
	{
		operation: "write",
		filename: "output.json",
		contents: "pipe:state.responseMessage",
	}
]}
*/

const limit = 2;
let numRuns = 0;

export async function executeMultiple() {
	const outputFilePath = path.resolve(process.cwd(), "data/results/output.json");
	if (fs.existsSync(outputFilePath)) {
		// Read the output file
		const output = fs.readFileSync(outputFilePath, "utf-8");

		// Get the last prompt index
		const results = JSON.parse(output);
		const lastResult = results[results.length - 1];
		const lastPromptIdx = lastResult.promptIdx;

		// Single run
		await singleRun(lastPromptIdx + 1);
	} else {
		// Single run
		await singleRun(0);
	}
}

async function singleRun(promptIdx: number) {
	if (promptIdx >= prompts.length) {
		console.log("All prompts have been run.");
		process.exit();
	}

	if (numRuns++ >= limit) {
		console.log("Prompt limit (" + limit + ") reached.");
		process.exit();
	}

	// Notify the user of the next prompt
	console.log("\nNow running prompt " + (promptIdx + 1) + " of " + prompts.length + ":\n" + prompts[promptIdx], "\n------\n");

	// Get the prompt
	const prompt = prompts[promptIdx].replace(/"/g, '\\"');

	// Construct program state
	const state = new State();
	AutoBotAdapter.setState(state);

	// Set the exit callback
	AutoBotAdapter.setExitCallback(onTaskCompleteCallback.bind(null, promptIdx));

	// Run the program
	await AutoBotAdapter.run({
		promptKey: "researcher",
		objective: objectiveBase + prompt,
	});
}

async function onTaskCompleteCallback(promptIdx: number, state: State) {
	// Set the exit callback
	AutoBotAdapter.setExitCallback(onTaskReviewCallback.bind(null, promptIdx));

	// Run the program
	await AutoBotAdapter.run({
		promptKey: "extraction",
		exitAfterCompletion: true,
		"path:contents": JSON.stringify(state.getRequestMessage().getAllGptResponses()),
		jsonresponse:
			"{'date':[date or year],'summary':[string : summary of the event],'sources':[array : URLs or paper citations],'imagery':[array : strings of all mentioned iconic imagery]}",
	});
}

async function onTaskReviewCallback(promptIdx: number, state: State) {
	// Get the result
	const gptResponse = state.getRequestMessage().getLatestGptResponse();
	if (!gptResponse) {
		console.error("No GPT response found.");
		return singleRun(promptIdx + 1);
	}

	let results = [];

	// Check if the output file exists
	const outputFilePath = path.resolve(process.cwd(), "data/results/output.json");
	if (fs.existsSync(outputFilePath)) {
		// Read the output file
		const output = fs.readFileSync(outputFilePath, "utf-8");

		// Parse the output
		results = JSON.parse(output);
	}

	// Append the result
	const jsonResponse = dirtyJsonParse(gptResponse.content);
	if (jsonResponse) {
		jsonResponse.promptIdx = promptIdx;
		results.push(jsonResponse);

		fs.writeFileSync(outputFilePath, JSON.stringify(results));
	}

	// Run the program again
	singleRun(promptIdx + 1);
}

function dirtyJsonParse(content: string): any {
	// Find the first and last curly bracket to denote the JSON object
	const firstBracket = content.indexOf("{");
	const lastBracket = content.lastIndexOf("}");
	if (firstBracket === -1 || lastBracket === -1) {
		return {};
	}

	// Extract the JSON object
	const jsonObject = content.substring(firstBracket, lastBracket + 1);

	try {
		// Parse and clean the JSON
		return dJSON.parse(jsonObject.replaceAll("\n", " "));
	} catch (error) {
		console.error("Error parsing JSON object within command response:");
		console.error(error);
	}

	return {};
}
