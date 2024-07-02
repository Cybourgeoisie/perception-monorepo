//import { State } from "@llm";
import { OpenAI } from "openai";
import { Config } from "@config";
import path from "path";

import { LocalIndex } from "vectra";

const api = new OpenAI({
	apiKey: Config.OPENAI_API_KEY,
});

const index = new LocalIndex(path.resolve(process.cwd(), "data/vectra"));

async function getVector(text: string) {
	const response = await api.embeddings.create({
		"model": "text-embedding-3-small",
		"input": text,
	});
	console.log(response.data);
	return response.data[0].embedding;
}

async function addItem(text: string) {
	await index.insertItem({
		vector: await getVector(text),
		metadata: { text },
	});
}

async function query(text: string) {
	const vector = await getVector(text);
	const results = await index.queryItems(vector, 3);
	if (results.length > 0) {
		for (const result of results) {
			console.log(`[${result.score}] ${result.item.metadata.text}`);
		}
	} else {
		console.log(`No results found.`);
	}
}

export async function vectraAddTest() {
	if (!(await index.isIndexCreated())) {
		await index.createIndex();
	}

	// Add items
	await addItem("apple");
	await addItem("banana");
	await addItem("cherry");
	await addItem("date");
}

export async function vectraQueryTest() {
	if (!(await index.isIndexCreated())) {
		await index.createIndex();
	}

	const prompt = "who is spice?";

	await query(prompt);
}
