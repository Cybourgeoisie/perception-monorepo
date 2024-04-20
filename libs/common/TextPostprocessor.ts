import dJSON from "dirty-json";

export class TextPostprocessor {
	public static async dirtyJsonParse(content: string): Promise<any> {
		// Find the first and last curly bracket to denote the JSON object
		const firstBracket = content.indexOf("{");
		const lastBracket = content.lastIndexOf("}");
		if (firstBracket === -1 || lastBracket === -1) {
			return {};
		}

		// Extract the JSON object
		const jsonObject = content.substring(firstBracket, lastBracket + 1);

		try {
			// Try a normal JSON parse first
			try {
				return JSON.parse(jsonObject.replaceAll("\n", " "));
			} catch (error) {
				// Try repairing the JSON
				try {
					const { jsonrepair } = await import("jsonrepair");
					return JSON.parse(jsonrepair(jsonObject.replaceAll("\n", " ")));
				} catch (error) {
					// If that fails, try a dirty JSON parse
					return dJSON.parse(jsonObject.replaceAll("\n", " "));
				}
			}
		} catch (error) {
			console.error("Error parsing JSON object within command response:");
			console.error(error);
		}

		return {};
	}
}
