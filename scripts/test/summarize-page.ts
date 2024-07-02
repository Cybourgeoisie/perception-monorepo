// @ts-nocheck
import dotenv from "dotenv";
import { exec } from "child_process";
import puppeteer, { Page, Browser } from "puppeteer";
import { setTimeout as delay } from "timers/promises";
import { LlmApi } from "libs/llm";
import fs from "fs";
import OpenAI from "openai";

dotenv.config();

const openai = new LlmApi({
	baseUrl: "https://openrouter.ai/api/v1",
	apiKey: process.env.OPENROUTER_API_KEY,
});

// Get the URL from the command line arguments
const websiteUrl = process.argv[process.argv.length - 1];
if (!websiteUrl) {
	console.error("Please provide a website URL as an argument.");
	process.exit(1);
}

const screenshotPath = "data/screenshots/summarize-screenshot.png";

export async function summarizePage() {
	const browser = await puppeteer.launch({ headless: false });

	const page = await getSiteScreenshot(browser);
	const img = fs.readFileSync(screenshotPath, { encoding: "base64" });
	const sitecode = await getCleanCode(page);

	// Close the browser
	await browser.close();

	const response = await getImportantInformationWithLlm(sitecode, img);
	console.log(response.content);
}

// Step 1: Load site, take screenshot
async function getSiteScreenshot(browser: Browser): Promise<Page> {
	console.log("Getting screenshot...");

	const page = await browser.newPage();

	await page.setViewport({ width: 1280, height: 1280 });

	await page.goto(websiteUrl, { waitUntil: "domcontentloaded", timeout: 30000 });

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
async function getImportantInformationWithLlm(code: string, img: string): Promise<OpenAI.ChatCompletionMessage> {
	console.log("Sending code to LLM...");

	// Prompt
	const prompt = `You have been given the following HTML page that represents the attached screenshot.

Please read the entire page and return every instance of a notable, changing piece of information on the page that could be used to generate an RSS feed. Use the screenshot to judge what information is important and changing, and what is not.

For each item, return the title, link, description, and publication date, or "N/A" if the information is not available in the following format:

{
    "title": [title],
    "link": [url],
    "description": [a good, summarizing description],
    "publication_date": [date]
}

Here is the source HTML code for the page:

\`\`\`
${code}
\`\`\``;

	// Send code to LLM
	const result = await openai.getCompletion({
		model: "google/gemini-flash-1.5",
		//model: "google/gemini-pro-1.5",
		//model: "openai/gpt-4o",
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
	});

	return result;
}
