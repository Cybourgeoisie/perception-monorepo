import { PromptCLI } from "@prompt-cli";
import { Adapters } from "packages/adapters";
import { State } from "@openai";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

// Run the program
(async (): Promise<void> => {
	// Pull the user's options
	// Pre-selected adapter
	const argv = yargs(hideBin(process.argv)).argv as any;
	const adapter = argv.adapter || null;

	// All other arguments are passed to the adapter as params
	const params = { ...argv };

	// Get the user's prompt
	console.clear();

	// If the user already chose an adapter, then find it
	let ChosenAdapter = null;
	if (adapter) {
		ChosenAdapter = Adapters.find((Adapter) => Adapter.getName().toLowerCase() === adapter.toLowerCase());
	} else {
		// Compile all adapters into a list of choices
		const AdapterChoices = Adapters.map((Adapter) => {
			return {
				title: Adapter.getName(),
				description: Adapter.getDescription(),
				value: Adapter,
			};
		});

		// Prompt the user to choose an adapter
		ChosenAdapter = await PromptCLI.select(`\nWelcome to Perception GPT.\nWhat would you like to do?`, [
			...AdapterChoices,
			{ title: "Exit", description: "Leave the program", value: false },
		]);
	}

	if (!ChosenAdapter) {
		process.exit();
	}

	// Construct program state
	const state = new State();
	ChosenAdapter.setState(state);

	// Run the program
	await ChosenAdapter.run(params);
})();
