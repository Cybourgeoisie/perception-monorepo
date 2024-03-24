import { OpenAI } from "@openai";
import OpenAIClass from "openai";
import { PromptCLI } from "@prompt-cli";
import { Operations, WebOperations } from "@operations";
import { BaseBotAdapter } from "../BaseBotAdapter";
import { Config, Prompts } from "@config";
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
				title: "↩ Exit",
				value: "back",
			},
		]);

		if (version == "back") {
			process.exit();
		} else if (version == "perception") {
			return this.start(Operations, Prompts.autobot.PERCEPTION_SYSTEM_PROMPT);
		} else if (version == "classic") {
			return this.start(Operations, Prompts.autobot.CLASSIC_SYSTEM_PROMPT);
		} else if (version == "researcher") {
			return this.start(WebOperations, Prompts.research.SYSTEM_PROMPT);
		}
	}

	private static async start(operations: any, prompt: string): Promise<void> {
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

		this.runPrompt(operations, prompt);
	}

	private static async runPrompt(operations: any, prompt: string, operationResult?: string): Promise<void> {
		// Get the requestMessage and the program state data
		const { objective } = this.state.getProgramState("autobot");
		const requestMessage = this.state.getRequestMessage();

		// Collect all of the commands from the operations folder
		const commands = AutobotRoutine.listOperations(operations);

		// Set up the system prompts
		requestMessage.addSystemPrompt(prompt.replaceAll("{{OBJECTIVE}}", objective).replaceAll("{{COMMANDS}}", commands.join("\n")));
		requestMessage.addSystemPrompt(`The current time is ${new Date().toLocaleString()}.`);
		requestMessage.addHistoryContext();

		if (operationResult) {
			requestMessage.addSystemPrompt(operationResult);
		}

		// Construct the request message based on history
		requestMessage.addUserPrompt(
			"Determine which next command to use, and respond ONLY using the JSON format specified. No other response format is permitted.",
		);

		// Submit the request to OpenAI, and cycle back to handle the response
		const messages = requestMessage.generateMessages();

		// Get the response and handle it
		const openAI = new OpenAI({
			apiKey: Config.OPENAI_API_KEY,
		});

		const response = await openAI.getCompletion({
			messages: messages as OpenAIClass.ChatCompletionMessage[],
			onMessageCallback: (response) => {
				process.stdout.write(response);
			},
		});

		// Store GPT's reponse
		requestMessage.addGPTResponse(response);

		// Report the response to the user
		console.log(`\nGPT Response:\n${response.content}\n`);

		// Parse the JSON response
		let parsedCommandName, parsedCommandArgs;
		try {
			// Remove any pre or post-text around the JSON
			const jsonStartIndex = response.content.indexOf("{");
			const jsonEndIndex = response.content.lastIndexOf("}");
			response.content = response.content.substring(jsonStartIndex, jsonEndIndex + 1);

			// Parse and clean the JSON
			const parsedResponse = dJSON.parse(response.content.replaceAll("\n", " "));

			// Figure out which command it wants to run
			parsedCommandName = parsedResponse.command.name;
			parsedCommandArgs = parsedResponse.command.args;
		} catch (error) {
			console.error(error);

			requestMessage.addSystemPrompt(`Your response must follow the JSON format.`);

			return this.runPrompt(operations, prompt);
		}

		// Prompt the user if they'd like to continue
		const _continue = await AutobotRoutine.promptOperation(this.state, parsedCommandName, parsedCommandArgs);

		if (!_continue) {
			return this.runPrompt(operations, prompt);
		}

		// Attempt to run the command
		return AutobotRoutine.issueOperation(this.state, parsedCommandName, parsedCommandArgs, operations, this.runPrompt.bind(this, operations, prompt));
	}
}
