import { PromptCLI } from "@prompt-cli";
import { Adapters } from "@gpt/src/adapters";
import { State } from "@openai";

// Run the program
(async (): Promise<void> => {
	// Compile all adapters into a list of choices
	const AdapterChoices = Adapters.map((Adapter) => {
		return {
			title: Adapter.getDescription(),
			description: Adapter.getName(),
			value: Adapter,
		};
	});

	// Get the user's prompt
	console.clear();
	const ChosenAdapter = await PromptCLI.select(`\nWelcome to Perception GPT.\nWhat would you like to do?`, [
		...AdapterChoices,
		{ title: "Exit", description: "Leave the program", value: false },
	]);

	if (!ChosenAdapter) {
		process.exit();
	}

	// Construct program state
	const state = new State();
	ChosenAdapter.setState(state);

	// Run the program
	await ChosenAdapter.run(state);
})();
