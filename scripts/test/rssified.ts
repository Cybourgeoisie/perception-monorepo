// @ts-nocheck
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";
import { setTimeout as delay } from "timers/promises";
import parsers from "../../data/scripts/rssify-parsers/index";

export interface RssItem {
	title: string;
	link: string;
	description: string;
	pubDate: string;
}

async function waitTillHTMLRendered(page, timeout = 30000): Promise<void> {
	const checkDurationMsecs = 1000;
	const maxChecks = timeout / checkDurationMsecs;
	let lastHTMLSize = 0;
	let checkCounts = 1;
	let countStableSizeIterations = 0;
	const minStableSizeIterations = 3;

	while (checkCounts++ <= maxChecks) {
		let html = await page.content();
		let currentHTMLSize = html.length;
		if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize) countStableSizeIterations++;
		else countStableSizeIterations = 0; //reset the counter

		if (countStableSizeIterations >= minStableSizeIterations) {
			break;
		}

		lastHTMLSize = currentHTMLSize;
		await delay(checkDurationMsecs);
	}
}

async function getFeed(websiteUrl: string) {
	try {
		const browser = await puppeteer.launch({ headless: false });
		const page = await browser.newPage();
		await page.setViewport({ width: 1280, height: 1280 });
		await page.goto(websiteUrl, { waitUntil: "domcontentloaded", timeout: 30000 });
		await waitTillHTMLRendered(page);

		const response = await page.content();
		await browser.close();
		const $ = cheerio.load(response);
		const rssItems: RssItem[] = [];

		// Load the correct rssify parser based on the website URL
		const scriptName = websiteUrl
			.replace(/http(s)?:\/\/(www\.)?/, "")
			.replace(/\/$/, "")
			.replace(/[^a-zA-Z0-9]/g, "_");
		const parser = parsers[scriptName];
		if (!parser) {
			console.error("No parser found for this website.");
			return null;
		}

		// Call the parser function
		const items = await parser($);
		rssItems.push(...items);

		console.log(rssItems);

		return rssItems;
	} catch (error) {
		console.error(error);
		return null;
	}
}

// Get the URL from the command line arguments
const websiteUrl = process.argv[process.argv.length - 1];
if (!websiteUrl) {
	console.error("Please provide a website URL as an argument.");
	process.exit(1);
}

export async function rssified() {
	await getFeed(websiteUrl);
}
