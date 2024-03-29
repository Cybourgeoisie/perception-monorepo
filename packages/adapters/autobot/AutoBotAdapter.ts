import { OpenAIRoutine, OpenAIRoutinePromptArgs } from "@routines";
import OpenAIClass from "openai";
import { PromptCLI } from "@prompt-cli";
import { BaseOperation, Operations, WebOperations } from "@operations";
import { BaseBotAdapter } from "../BaseBotAdapter";
import { Prompts } from "@config";
import dJSON from "dirty-json";
import { AutobotRoutine } from "@routines";

export default class AutoBotAdapter extends BaseBotAdapter {
	public static getName(): string {
		return "AutoBot";
	}

	public static getDescription(): string {
		return "Give GPT an automated task";
	}

	public static async run(): Promise<void> {
		// Get all the usable prompts
		const autobotPrompts = Object.keys(Prompts.autobot).map((key) => {
			return {
				title: Prompts.autobot[key].name,
				value: key,
			};
		});
		autobotPrompts.push({
			title: "Back",
			value: "back",
		});

		// Get the user's autobot preference
		const autobotPromptKey = await PromptCLI.select(`Which AutoBot prompt would you like to run?:`, autobotPrompts);

		if (autobotPromptKey == "back") {
			process.exit();
		}

		const prompts = {
			system: Prompts.autobot[autobotPromptKey].system,
			user: Prompts.autobot[autobotPromptKey].user,
		};

		let operations: Array<typeof BaseOperation> = [];
		switch (Prompts.autobot[autobotPromptKey].operations) {
			case "web":
				operations = WebOperations;
				break;
			case "all":
				operations = Operations;
				break;
			default:
				operations = [];
				break;
		}

		// Get the commands from the operations folder
		if (operations && operations.length > 0) {
			const commands = AutobotRoutine.listOperations(operations);

			// Store the commands in the program state
			this.state.setProgramState("autobot", { operations });
			this.state.setProgramState("autobot", { commands: commands.join("\n") });

			// Report the state of the program to the user
			console.log(`Commands enabled:\n${commands.join("\n")}`);
		}

		// Store the initial prompts & input variables
		this.state.setProgramState("autobot", { prompts });
		this.state.setProgramState("autobot", { input: Prompts.autobot[autobotPromptKey].input });

		// Start the AutoBot routine
		return this.loop();
	}

	private static async loop(): Promise<void> {
		const input: Record<string, string> = this.state.getProgramState("autobot").input || {};
		const prompts: { user: string; system?: string } = this.state.getProgramState("autobot").prompts || {};

		const responses = await this.promptInputs(input);

		for (const key in responses) {
			const response = responses[key];

			// Store the input in the program state
			this.state.setProgramState("autobot", { [key]: response });
		}

		// If we have an override for the user prompt, use that instead
		if (responses && responses.user) {
			prompts.user = responses.user;
		}

		// Start the AutoBot routine
		return this.runPrompt();
	}

	private static async runPrompt(operationResult?: string): Promise<void> {
		// Get the program prompts
		const prompts: { user: string; system?: string } = this.state.getProgramState("autobot").prompts || {};

		// Set up the system prompts
		const systemPrompts = [];

		if (prompts.system) {
			systemPrompts.push(prompts.system);
			systemPrompts.push(`The current time is ${new Date().toLocaleString()}.`);

			if (operationResult) {
				systemPrompts.push(operationResult);
			}
		}

		// Get all state variables
		const state = this.state.getProgramState("autobot");

		// For all state variables, replace any variables with the program state data
		for (const key in state) {
			const value = state[key];

			if (!value || typeof value !== "string") {
				continue;
			}

			for (let i = 0; i < systemPrompts.length; i++) {
				systemPrompts[i] = systemPrompts[i].replaceAll(`{{${key}}}`, value);
			}

			prompts.user = prompts.user.replaceAll(`{{${key}}}`, value);
		}

		const args: OpenAIRoutinePromptArgs = {
			state: this.state,
			systemPrompts,
			userPrompt: prompts.user,
			callback: this.callback.bind(this),
		};

		OpenAIRoutine.promptWithHistory(args);
	}

	private static async callback(response: OpenAIClass.ChatCompletionMessage) {
		let content = response.content;

		// If we received a JSON response with a command back, parse it
		const responseCommand = this.getResponseCommand(content);

		if (responseCommand && responseCommand.name) {
			// For now, for simplicity, just run the first command we find
			const { name: parsedCommandName, args: parsedCommandArgs } = responseCommand;

			// Prompt the user if they'd like to continue
			const _continue = await AutobotRoutine.promptOperation(this.state, parsedCommandName, parsedCommandArgs);

			if (!_continue) {
				return this.runPrompt();
			}

			// Attempt to run the command
			return AutobotRoutine.issueOperation(
				this.state,
				parsedCommandName,
				parsedCommandArgs,
				this.state.getProgramState("autobot").operations,
				this.runPrompt.bind(this),
			);
		}

		// Back to the user
		this.loop();
	}

	/**
	 * Standalone functions without side effects
	 */

	private static async promptInputs(input: Record<string, string>): Promise<Record<string, string>> {
		// Get the user's inputs
		const responses = {};
		for (const key in input) {
			const question = input[key];
			const response = await PromptCLI.text(question);
			if (PromptCLI.quitCommands.includes(response)) {
				process.exit();
			}

			// Save the response
			responses[key] = response;
		}

		return responses;
	}

	private static getResponseCommand(content: string): { name?: string; args?: Record<string, string> } {
		// Iterate through all JSON objects returned in this response,
		// and check if the response includes a command, in JSON format
		const command = {
			name: undefined,
			args: {},
		};

		// Find the first and last curly bracket to denote the JSON object
		const firstBracket = content.indexOf("{");
		const lastBracket = content.lastIndexOf("}");
		if (firstBracket === -1 || lastBracket === -1) {
			return command;
		}

		// Extract the JSON object
		const jsonObject = content.substring(firstBracket, lastBracket + 1);

		try {
			// Parse and clean the JSON
			const parsedResponse = dJSON.parse(jsonObject.replaceAll("\n", " "));

			// Check if the response includes a command
			if (parsedResponse.command && parsedResponse.command.name) {
				command.name = parsedResponse.command.name;
				command.args = parsedResponse.command.args || {};
			}
		} catch (error) {
			console.error("Error parsing JSON object within command response:");
			console.error(error);
		}

		return command;
	}
}
