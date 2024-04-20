import natural from "natural";

export class TextPreprocessor {
	public static splitSentencesUsingNLP(text: string, chunkSize: number): string[] {
		const tokenizer = new natural.SentenceTokenizer();
		const sentences = tokenizer.tokenize(text);

		const chunks = [];
		let currentChunk = "";
		while (currentChunk.length < chunkSize) {
			if (sentences.length === 0) {
				break;
			}

			currentChunk += sentences.shift() + " ";

			if (sentences.length === 0) {
				break;
			}

			if (currentChunk.length + sentences[0].length > chunkSize) {
				chunks.push(currentChunk);
				currentChunk = "";
			}
		}

		// Get the last bit of text
		if (currentChunk.length > 0) {
			chunks.push(currentChunk);
			currentChunk = "";
		}

		return chunks;
	}
}
