import fs from "fs";
import path from "path";

interface DataObject {
	[key: string]: string | number;
}

// Example JSON data
const files = fs.readdirSync(path.resolve(__dirname, "../../data/results/keep"));
for (const filename of files) {
	const jsonData = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../../data/results/keep/${filename}`), "utf8"));

	function jsonToTabDelimited(jsonData: DataObject[]): string {
		const headers = Object.keys(jsonData[0]);
		const tabDelimitedData = jsonData.map((row) => headers.map((header) => `"${row[header]}"`).join("\t"));
		return headers.join("\t") + "\n" + tabDelimitedData.join("\n");
	}

	const tabDelimitedString = jsonToTabDelimited(jsonData);

	// Writing to a file
	fs.writeFile(path.resolve(__dirname, `../../data/results/${filename}.tsv`), tabDelimitedString, (err) => {
		if (err) {
			console.error("Error writing file:", err);
		} else {
			console.log("File successfully written.");
		}
	});
}
