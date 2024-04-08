const USER_PROMPT = `"""{{path:contents}}"""

Using the above text, answer the following question: "{{question}}".

If the question cannot be answered using the text, summarize the text and include as much relevant information as possible.`;

const config = {
	name: "Summarize",
	system: undefined,
	user: USER_PROMPT,
	operations: "none",
	input: {
		path: "What file would you like to summarize?",
		question: "What question would you like to answer?",
	},
};

export default config;
