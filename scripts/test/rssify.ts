// @ts-nocheck
import dotenv from "dotenv";
import { exec } from "child_process";
import puppeteer, { Page, Browser } from "puppeteer";
import { setTimeout as delay } from "timers/promises";
import { OpenAI } from "@openai";
import fs from "fs";
import OpenAIClass from "openai";

dotenv.config();

const openai = new OpenAI({
	baseUrl: "https://openrouter.ai/api/v1",
	apiKey: process.env.OPENROUTER_API_KEY,
});

const screenshotPath = "data/screenshots/rssify-screenshot.png";
const scriptPath = "data/scripts/rssify-script.ts";

/*
 RSSify is a tool that converts any website into an RSS feed.
 It's a great way to follow websites that don't have their own RSS feeds, or to get updates from websites that you don't want to visit directly.

 Algorithm:
    1. Load site, take screenshot 
    2. Send screenshot and code to LLM to determine how to get all important pieces of info that fit into an RSS feed
    3. Test pulling info
	...
    5. Send test results to LLM, see if passing, if not, have LLM try again (or explain how to fix it, then pass in again to LLM, repeat)
    6. If no luck after 5 tries, report & bail
    7. If works, save as structure and then generate RSS feed
    8. Save in json files, and then send to user
*/

const website_url = "https://www.cnn.com";

export async function rssify() {
	await stepThree();
	/*
	const browser = await puppeteer.launch({ headless: false });

	const page = await stepOne(browser);

	const img = fs.readFileSync(screenshotPath, { encoding: "base64" });

	await stepTwo(page, img, async (response: OpenAIClass.ChatCompletionMessage) => {
		const code = filterLlmCodeOutput(response.content);

		fs.writeFileSync(scriptPath, code, { encoding: "utf-8" });

		await stepThree();

		// Final step: Close the browser
		await browser.close();
	});
	*/
}

function filterLlmCodeOutput(content: string): string {
	// Remove ```[any language] tags from the beginning and end of the string
	return content.replace(/^```[^\n]*\n/, "").replace(/```$/, "");
}

// Step 1: Load site, take screenshot
async function stepOne(browser: Browser): Promise<Page> {
	console.log("Getting screenshot...");

	const page = await browser.newPage();

	await page.setViewport({ width: 1280, height: 1280 });

	await page.goto(website_url, { waitUntil: "domcontentloaded", timeout: 30000 });

	// Wait for 2 seconds
	await delay(2000);

	await page.screenshot({ path: screenshotPath });

	return page;
}

async function getCleanCode(page: Page): Promise<string> {
	let code = await page.content();

	// Remove anything that is between <script> tags
	code = code.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");

	// Remove anything that is between <style> tags
	code = code.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");

	// Remove anything that is between <!-- --> tags
	code = code.replace(/<!--[^>]*-->/g, "");

	// Remove anything that is between <head> tags
	code = code.replace(/<head\b[^<]*(?:(?!<\/head>)<[^<]*)*<\/head>/gi, "");

	// Remove anything that is between <iframe> tags
	code = code.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "");

	// Remove any excess whitespace
	code = code.replace(/\s+/g, " ");

	return code;
}

// Step 3: Send code to LLM to determine how to get that info
async function stepTwo(page: Page, img: string, callback = (_: OpenAIClass.ChatCompletionMessage) => {}): Promise<void> {
	console.log("Sending code to LLM...");

	const code = await getCleanCode(page);

	// Prompt
	const prompt = `You have been given the following HTML page that represents the attached screenshot.

Please write a nodejs typescript script that extracts the most important pieces of information that change frequently and that would be relevant to include in an RSS feed.

The script must use the following template:

\`\`\`
// @ts-nocheck
import * as cheerio from "cheerio";
import axios from "axios";

interface RssItem {
	title: string;
	link: string;
	description: string;
	pubDate: string;
}

async function getFeed() {
	try {
		// YOUR CODE HERE
	} catch (error) {
		console.error(error);
	}
}
\`\`\`

Here is the source HTML code for the page:

\`\`\`
${code}
\`\`\``;

	// Send code to LLM
	await openai.getCompletion({
		model: "google/gemini-flash-1.5",
		messages: [
			{
				role: "user",
				content: [
					{ type: "text", text: prompt },
					{ type: "image_url", image_url: { url: `data:image/png;base64,${img}` } },
				],
			},
		],
		onMessageCallback: (content: string) => {
			process.stdout.write(content);
		},
		onCompleteCallback: callback,
	});
}

// Step 4: Test pulling info
async function stepThree() {
	console.log("Testing pulling info...");

	// Run the script, get the result
	try {
		const result = await executeScript(scriptPath);
		console.log("result");
		console.log(result);
	} catch (error) {
		console.error("Error running script:");
		console.error(error);
		return;
	}

	return result;
}

async function executeScript(scriptPath: string): Promise<string> {
	return new Promise((resolve, reject) => {
		const rootDir = __dirname + "/../../";
		exec(`cd ${rootDir} && npx ts-node ${scriptPath}`, (error: any, stdout: any, stderr: any) => {
			if (error) {
				console.error(`exec error: ${error}`);
				resolve(error);
				return;
			}

			// If we don't get a stdout, then there was an error
			const trimmedStdout = stdout.trim();
			if (!trimmedStdout) {
				if (stderr) {
					console.error(`stderr: ${stderr}`);
					reject(stderr);
				} else {
					console.error("No output from script");
					reject("No output from script");
				}
				return;
			}

			console.log(`stdout: ${stdout}`);
			console.error(`stderr: ${stderr}`);
			resolve(stdout);
		});
	});
}
