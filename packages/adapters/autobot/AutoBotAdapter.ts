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
		// Get the user's version preference
		const version = await PromptCLI.select(`Which version of AutoBot would you like to run?:`, [
			{
				title: "Perception",
				value: "perception",
			},
			{
				title: "Classic",
				value: "classic",
			},
			{
				title: "Researcher",
				value: "researcher",
			},
			{
				title: "Chat",
				value: "chat",
			},
			{
				title: "↩ Exit",
				value: "back",
			},
		]);

		if (version == "back") {
			process.exit();
		}

		const prompts = {
			system: Prompts.autobot[version].system,
			user: Prompts.autobot[version].user,
		};

		let operations = [];
		switch (Prompts.autobot[version].operations) {
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

		// Report the commands from the operations folder
		if (operations && operations.length > 0) {
			const commands = AutobotRoutine.listOperations(operations);

			// Report the state of the program to the user
			console.log(`Commands enabled:\n${commands.join("\n")}`);
		}

		// Start the AutoBot routine
		return this.loop(Prompts.autobot[version].input, operations, prompts);
	}

	private static async loop(
		input?: Record<string, string>,
		operations?: Array<typeof BaseOperation>,
		prompts?: { user: string; system?: string },
	): Promise<void> {
		const responses = await this.promptInputs(input);

		// If we have an override for the user prompt, use that instead
		if (responses && responses.user) {
			prompts.user = responses.user;
		}

		// Start the AutoBot routine
		return this.runPrompt(operations, prompts, this.callback.bind(this, input, operations, prompts));
	}

	private static async promptInputs(input: Record<string, string>): Promise<Record<string, string>> {
		// Get the user's inputs
		const responses = {};
		for (const key in input) {
			const question = input[key];
			const response = await PromptCLI.text(question);
			if (PromptCLI.quitCommands.includes(response)) {
				process.exit();
			}

			console.log(`\n${key}: ${response}\n`);

			// Store the input in the program state
			this.state.setProgramState("autobot", { [key]: response });

			// Save the response
			responses[key] = response;
		}

		return responses;
	}

	private static async runPrompt(
		operations: Array<typeof BaseOperation>,
		prompts: { user: string; system?: string },
		callback: (s: OpenAIClass.ChatCompletionMessageParam) => void,
		operationResult?: string,
	): Promise<void> {
		// Set up the system prompts
		const systemPrompts = [];

		if (prompts.system) {
			// Get the program state data
			const { objective } = this.state.getProgramState("autobot");

			// Collect all of the commands from the operations folder
			const commands = AutobotRoutine.listOperations(operations);

			systemPrompts.push(prompts.system.replaceAll("{{OBJECTIVE}}", objective).replaceAll("{{COMMANDS}}", commands.join("\n")));
			systemPrompts.push(`The current time is ${new Date().toLocaleString()}.`);

			if (operationResult) {
				systemPrompts.push(operationResult);
			}
		}

		const args: OpenAIRoutinePromptArgs = {
			state: this.state,
			systemPrompts,
			userPrompt: prompts.user,
			callback,
		};

		OpenAIRoutine.promptWithHistory(args);
	}

	private static async callback(
		input: Record<string, string> | undefined,
		operations: Array<typeof BaseOperation>,
		prompts: { user: string; system?: string },
		response: OpenAIClass.ChatCompletionMessage,
	) {
		let content = response.content;

		// If we received a JSON response with a command back, parse it
		const responseCommand = this.getResponseCommand(content);

		if (responseCommand && responseCommand.name) {
			// For now, for simplicity, just run the first command we find
			const { name: parsedCommandName, args: parsedCommandArgs } = responseCommand;

			// Prompt the user if they'd like to continue
			const _continue = await AutobotRoutine.promptOperation(this.state, parsedCommandName, parsedCommandArgs);

			if (!_continue) {
				return this.runPrompt(operations, prompts, this.callback.bind(this, input, operations, prompts));
			}

			// Attempt to run the command
			return AutobotRoutine.issueOperation(
				this.state,
				parsedCommandName,
				parsedCommandArgs,
				operations,
				this.runPrompt.bind(this, operations, prompts, this.callback.bind(this, input, operations, prompts)),
			);
		}

		// Back to the user
		this.loop(input, operations, prompts);
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
