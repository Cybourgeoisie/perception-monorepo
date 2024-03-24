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
		} else if (version == "perception") {
			const prompts = {
				system: Prompts.autobot.PERCEPTION_SYSTEM_PROMPT,
				user: "Determine which next command to use, and respond ONLY using the JSON format specified. No other response format is permitted.",
			};

			return this.start(Operations, prompts);
		} else if (version == "classic") {
			const prompts = {
				system: Prompts.autobot.CLASSIC_SYSTEM_PROMPT,
				user: "Determine which next command to use, and respond ONLY using the JSON format specified. No other response format is permitted.",
			};

			return this.start(Operations, prompts);
		} else if (version == "researcher") {
			const prompts = {
				system: Prompts.research.SYSTEM_PROMPT,
				user: "Determine which next command to use, and respond ONLY using the JSON format specified. No other response format is permitted.",
			};

			return this.start(WebOperations, prompts);
		} else if (version == "chat") {
			return this.runChat();
		}
	}

	private static async runChat(): Promise<void> {
		// Get the user's prompt
		const prompt = await PromptCLI.text(`Prompt (type "q" to exit):`);
		if (PromptCLI.quitCommands.includes(prompt)) {
			process.exit();
		}

		const prompts = {
			user: prompt,
		};

		return this.runPrompt([], prompts, this.runChat.bind(this));
	}

	private static async start(operations: Array<typeof BaseOperation>, prompts: { user: string; system?: string }): Promise<void> {
		// Get the user's prompt
		const objective = await PromptCLI.text(`What objective would you like your AutoBot to perform for you?:`);
		if (PromptCLI.quitCommands.includes(objective)) {
			process.exit();
		}

		// Collect all of the commands from the operations folder
		const commands = AutobotRoutine.listOperations(operations);

		// Report the state of the program to the user
		console.log(`\nCommands enabled:\n${commands.join("\n")}`);
		console.log(`\nObjective: ${objective}\n`);

		// Store the objective in the program state
		this.state.setProgramState("autobot", { objective });

		this.runPrompt(operations, prompts, this.callback.bind(this, operations, prompts));
	}

	private static async runPrompt(
		operations: Array<typeof BaseOperation>,
		prompts: { user: string; system?: string },
		callback: (s: OpenAIClass.ChatCompletionMessageParam) => void,
		operationResult?: string,
	): Promise<void> {
		// Get the requestMessage and the program state data
		const { objective } = this.state.getProgramState("autobot");

		// Collect all of the commands from the operations folder
		const commands = AutobotRoutine.listOperations(operations);

		// Set up the system prompts
		const systemPrompts = [];

		if (prompts.system) {
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

	private static async callback(operations, prompt, response: OpenAIClass.ChatCompletionMessage) {
		let content = response.content;

		// Report the response to the user
		//console.log(`\nGPT Response:\n${content}\n`);

		// Parse the JSON response
		let parsedCommandName, parsedCommandArgs;
		try {
			// Remove any pre or post-text around the JSON
			const jsonStartIndex = content.indexOf("{");
			const jsonEndIndex = content.lastIndexOf("}");
			content = content.substring(jsonStartIndex, jsonEndIndex + 1);

			// Parse and clean the JSON
			const parsedResponse = dJSON.parse(content.replaceAll("\n", " "));

			// Figure out which command it wants to run
			parsedCommandName = parsedResponse.command.name;
			parsedCommandArgs = parsedResponse.command.args;
		} catch (error) {
			console.error(error);

			//requestMessage.addSystemPrompt(`Your response must follow the JSON format.`);

			return this.runPrompt(operations, prompt, this.callback.bind(this, operations, prompt));
		}

		// Prompt the user if they'd like to continue
		const _continue = await AutobotRoutine.promptOperation(this.state, parsedCommandName, parsedCommandArgs);

		if (!_continue) {
			return this.runPrompt(operations, prompt, this.callback.bind(this, operations, prompt));
		}

		// Attempt to run the command
		return AutobotRoutine.issueOperation(
			this.state,
			parsedCommandName,
			parsedCommandArgs,
			operations,
			this.runPrompt.bind(this, operations, prompt, this.callback.bind(this, operations, prompt)),
		);
	}
}
