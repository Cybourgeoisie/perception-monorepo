import { State } from "@openai";
import { TextPreprocessor } from "@common";
import AutoBotAdapter from "packages/adapters/autobot/AutoBotAdapter";
import fs from "fs";
import path from "path";
import dJSON from "dirty-json";

// Output file
const outputFilePath = path.resolve(process.cwd(), "data/results/book-output.json");

// For each line in the file, run the program
const objectiveBase = fs.readFileSync(path.resolve(process.cwd(), "data/prompts", "objective-book.txt"), "utf-8");
const bookText = fs.readFileSync(path.resolve(process.cwd(), "data/prompts", "book.txt"), "utf-8");

let prompts = [];
export async function reviewText() {
	// Split the book text into sections
	prompts = TextPreprocessor.splitSentencesUsingNLP(bookText, 124576); //Math.floor(4096 * 1.5));

	console.log(`Running the program for each prompt, total of ${prompts.length}:`);

	singleRun(0);
}

async function singleRun(promptIdx) {
	// Notify the user of the next prompt
	console.log("\nNow running prompt " + (promptIdx + 1) + " of " + prompts.length + "...");

	// Get the prompt
	const prompt = prompts[promptIdx].replace(/"/g, '\\"');

	// Construct program state
	const state = new State();
	AutoBotAdapter.setState(state);

	// Set the exit callback
	AutoBotAdapter.setExitCallback(onTaskCompleteCallback.bind(null, promptIdx));

	// Run the program
	await AutoBotAdapter.run({
		promptKey: "chat",
		user: objectiveBase + prompt,
		maxRuns: 1,
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
			"{'date':[a date in Month, Day, Year format; or year if not provided],'summary':[string : brief summary of the event],'imagery':[array : strings of all mentioned iconic imagery]}",
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
