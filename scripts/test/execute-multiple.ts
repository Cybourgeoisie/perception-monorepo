import { State } from "@openai";
import AutoBotAdapter from "packages/adapters/autobot/AutoBotAdapter";
import fs from "fs";
import path from "path";

// For each line in the file, run the program
const objectiveBase = fs.readFileSync(path.resolve(process.cwd(), "data/prompts", "objective-base.txt"), "utf-8");
const prompts = fs.readFileSync(path.resolve(process.cwd(), "data/prompts", "prompts.txt"), "utf-8").split("\n");

const limit = 1;

export async function executeMultiple() {
	// Single run
	await singleRun(0);
}

async function singleRun(promptIdx: number) {
	if (promptIdx >= prompts.length) {
		console.log("All prompts have been run.");
		process.exit();
	}

	if (promptIdx >= limit) {
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
	AutoBotAdapter.setExitCallback(onTaskCompleteCallback.bind(null));

	// Run the program
	await AutoBotAdapter.run({
		promptKey: "researcher",
		objective: objectiveBase + prompt,
	});
}

async function onTaskCompleteCallback(state: State) {
	console.log(state);

	console.log("Task complete.");
}
