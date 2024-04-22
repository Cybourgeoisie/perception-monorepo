import { State, ModelFactory } from "@openai";
import { TextPreprocessor, TextPostprocessor } from "@common";
import AutoBotAdapter from "packages/adapters/autobot/AutoBotAdapter";
import fs from "fs";
import path from "path";

// Good readers:
// OpenAI: gpt-4-32k
// OpenAI: gpt-4-turbo-2024-04-09
// OpenRouter: google/gemini-pro-1.5 (maybe better than gpt-4-turbo-2024-04-09, on par with gpt-4-32k)

// Needs larger context:
// OpenRouter: meta-llama/llama-3-70b-instruct

// Good JSON gen:
// Really only gpt-4 variants
// gpt-4-turbo-2024-04-09 seems to be the best model for JSON extraction for price-performance tradeoff

let bookIdx = 0;
const bookDir = path.resolve(process.cwd(), "data/prompts/books");
const books = fs
	.readdirSync(bookDir)
	.filter((file) => file.endsWith(".txt"))
	.map((file) => file.replace(".txt", ""));

const readBookLlm = {
	provider: "OpenRouter",
	model: "google/gemini-pro-1.5",
};

const genJsonLlm = {
	provider: "OpenAI",
	model: "gpt-4-turbo-2024-04-09",
};

let prompts = [];
export async function reviewText() {
	// Pull the model context length from the selected model information
	// Use that to determine the length of the chunks
	const contextSize = ModelFactory.getModelContextLength(readBookLlm.provider, readBookLlm.model);

	// Split the book text into sections - max value because comprehension drops off as context size increases
	const bookText = fs.readFileSync(path.resolve(bookDir, `${books[bookIdx]}.txt`), "utf-8");
	prompts = TextPreprocessor.splitSentencesUsingNLP(bookText, Math.min(Math.floor(contextSize * 0.75), 2 ** 15));

	// Filter out any non-text files
	console.log("Books to review:");
	console.log(books);

	console.log(`Book: ${books[bookIdx]} - #${bookIdx + 1} of ${books.length}`);
	console.log(`Running the program for each prompt, total of ${prompts.length}:`);

	singleRun(0);
}

async function singleRun(promptIdx) {
	// Validate that we have more prompts to run
	if (promptIdx >= prompts.length) {
		console.log("All prompts have been completed.");
		bookIdx++;
		if (bookIdx < books.length) {
			reviewText();
		}
		return;
	}

	// Notify the user of the next prompt
	console.log("\nNow running prompt " + (promptIdx + 1) + " of " + prompts.length + "...");

	// Get the base & prompt
	const objectiveBase = fs.readFileSync(path.resolve(process.cwd(), "data/prompts", "objective-book.txt"), "utf-8");
	const prompt = prompts[promptIdx].replace(/"/g, '\\"');

	// Construct program state
	const state = new State();
	AutoBotAdapter.setState(state);

	// Set the exit callback
	AutoBotAdapter.setExitCallback(onTaskCompleteCallback.bind(null, promptIdx));

	// Run the program
	await AutoBotAdapter.run({
		llm: readBookLlm,
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
		llm: genJsonLlm,
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

	const outputFilePath = path.resolve(process.cwd(), `data/results/${books[bookIdx]}.gemini.json`);

	// Check if the output file exists
	if (fs.existsSync(outputFilePath)) {
		// Read the output file
		const output = fs.readFileSync(outputFilePath, "utf-8");

		// Parse the output
		results = JSON.parse(output);
	}

	// Append the result
	const jsonResponse = await TextPostprocessor.dirtyJsonParse(gptResponse.content);
	if (jsonResponse) {
		if (Array.isArray(jsonResponse) && jsonResponse.length > 0) {
			results.push(...jsonResponse);
		} else {
			results.push(jsonResponse);
		}

		fs.writeFileSync(outputFilePath, JSON.stringify(results));
	}

	// Run the program again
	singleRun(promptIdx + 1);
}
