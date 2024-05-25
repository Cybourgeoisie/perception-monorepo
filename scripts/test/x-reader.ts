import dotenv from "dotenv";
import puppeteer, { Page, ElementHandle } from "puppeteer";
import fs from "fs";
import { setTimeout as delay } from "timers/promises";

dotenv.config();

type TweetData = {
	key: string;
	userName: string;
	userHandle: string;
	tweetText: string;
	tweetImages: string[];
	tweetVideo: string;
	tweetTime: string;
	tweetLink: string;
	quoteTweet?: TweetData;
	tweetActions?: { label: string; value: string }[];
};

const cookieFilePath = "data/configs/x-cookies.json";
const screenshotPath = "data/screenshots/x-screenshot.png";

(async () => {
	if (!process.env.X_USERNAME || !process.env.X_PASSWORD) {
		console.log("Please provide X_USERNAME and X_PASSWORD in .env file");
		process.exit();
	}

	if (!fs.existsSync(cookieFilePath)) {
		await login();
	}

	await readPage();
})();

async function login(): Promise<void> {
	console.log("Logging in...");

	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto("https://x.com/login", { waitUntil: "networkidle2" });

	// Enter username
	await page.waitForSelector('input[autocomplete="username"]');
	await page.type('input[autocomplete="username"]', process.env.X_USERNAME as string);

	// Find the first button that's after the username input
	const buttons = await page.$$('button[type="button"]');

	// Iterate through buttons, check if the inner text says "Next" somewhere
	let foundButton = false;
	for (let button of buttons) {
		let buttonText = await page.evaluate((el: Element) => el.innerHTML, button);
		if (buttonText.toLowerCase().includes("next")) {
			foundButton = true;
			await button.click();
			break;
		}
	}

	if (!foundButton) {
		console.log("Next button not found");
		await screenshotAndQuit(page);
		return;
	}

	// Enter password
	await page.waitForSelector('input[name="password"]');
	await page.type('input[name="password"]', process.env.X_PASSWORD as string);

	// Click login button
	await page.click('button[data-testid="LoginForm_Login_Button"]');

	// Wait for navigation to the home feed
	await page.waitForNavigation({ waitUntil: "networkidle2" });

	// Save cookies to a file
	const cookies = await page.cookies();
	fs.writeFileSync(cookieFilePath, JSON.stringify(cookies, null, 2));

	await browser.close();
}

async function readPage(): Promise<void> {
	console.log("Reading tweets...");

	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();

	// Load cookies from the file
	const cookies = JSON.parse(fs.readFileSync(cookieFilePath, "utf-8"));
	await page.setCookie(...cookies);

	await page.goto("https://x.com", { waitUntil: "networkidle2" });
	await page.setViewport({ width: 1080, height: 1024 });

	// Find the first link (a tag) that has the text "Following" somewhere in it
	const links = await page.$$("a");
	let foundLink = false;
	for (let link of links) {
		let linkText = await page.evaluate((el: Element) => el.innerHTML, link);
		if (linkText.toLowerCase().includes("following")) {
			foundLink = true;
			await link.click();
			break;
		}
	}

	if (!foundLink) {
		console.log("Following link not found");
		await screenshotAndQuit(page);
		return;
	}

	// Scroll and collect tweets
	let allTweets: TweetData[] = [];
	while (allTweets.length < 15) {
		console.log("Collecting tweets...", allTweets.length, "tweets so far");

		// Wait for tweets to load
		const val = await page.waitForSelector('article[data-testid="tweet"]');
		if (!val) {
			console.log("No tweets found, waiting for 1 second");
			await delay(1000);
			continue;
		}

		// Find all tweets on the page
		const tweets = await page.$$('article[data-testid="tweet"]');

		tweets: for (let tweet of tweets) {
			// Get the aria-labelledby and use as an index to avoid duplicates
			const tweetId = await tweet.evaluate((el: HTMLElement) => el.getAttribute("aria-labelledby"));
			if (!tweetId) {
				continue;
			}

			// Check if the tweet is already in the list
			if (allTweets.find((t) => t.key === tweetId)) {
				continue;
			}

			// If the tweet includes a span that just has the word "Ad" in it, skip it
			const ad = await tweet.$$("span");
			for (let span of ad) {
				let adText = await page.evaluate((el: HTMLElement) => el.innerText, span);
				if (adText == "Ad") {
					continue tweets;
				}
			}

			const tweetDetails = await extractTweetData(tweet);
			allTweets.push(tweetDetails);
		}

		await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
	}

	// Remove duplicate tweets
	allTweets = [...new Set(allTweets)];

	// Print the tweets
	for (let tweet of allTweets) {
		const tweetWithoutKey = { ...tweet };
		delete tweetWithoutKey.key;
		console.log(tweetWithoutKey);
	}

	await browser.close();
}

async function extractTweetData(article: ElementHandle<Element>): Promise<TweetData> {
	const data: TweetData = {
		key: "",
		userName: "",
		userHandle: "",
		tweetText: "",
		tweetImages: [],
		tweetVideo: "",
		tweetTime: "",
		tweetLink: "",
		tweetActions: [],
	};

	// Get the aria-labelledby and use as an index to avoid duplicates
	const tweetId = await article.evaluate((el: HTMLElement) => el.getAttribute("aria-labelledby"));
	if (!tweetId) {
		return data;
	}
	data["key"] = tweetId;

	// User Name
	try {
		const userName = await article.$eval('[data-testid="User-Name"] a div span span', (el) => el.textContent?.trim() || "");
		data["userName"] = userName;
	} catch (error) {
		//console.log("Error getting user name");
		//return data;
	}

	// User Handle
	try {
		const userHandleLink = await article.$eval('[data-testid="User-Name"] a[href^="/"]', (el) => el.getAttribute("href") || "");
		const userHandle = userHandleLink.replace("/", "");
		data["userHandle"] = userHandle;
	} catch (error) {
		//console.log("Error getting user handle");
		//return data;
	}

	// Tweet Text
	try {
		const tweetText = await article.$eval('[data-testid="tweetText"]', (el) => el.textContent?.trim() || "");
		data["tweetText"] = tweetText;
	} catch (error) {
		//console.log("Error getting tweet text");
		//return data;
	}

	// Tweet Images
	try {
		const tweetImages = await article.$$eval('[data-testid="tweetPhoto"] img', (imgs) => imgs.map((img) => img.src));
		data["tweetImages"] = tweetImages.map((img) => img.replace(/&name=[a-zA-Z0-9]+/g, ""));
	} catch (error) {
		//console.log("Error getting tweet images");
		//return data;
	}

	// Tweet Video
	try {
		const tweetVideo = await article.$eval("video source", (el) => el.getAttribute("src") || "");
		data["tweetVideo"] = tweetVideo;
	} catch (error) {
		//console.log("Error getting tweet video");
		//return data;
	}

	// Tweet Time
	try {
		const tweetTime = await article.$eval("time", (el) => el.getAttribute("datetime") || "");
		data["tweetTime"] = tweetTime;
	} catch (error) {
		//console.log("Error getting tweet time");
		//return data;
	}

	// Tweet Link
	try {
		// Tweet Link
		const tweetLink = await article.$eval('a[href*="/status/"]', (el) => el.getAttribute("href") || "");
		data["tweetLink"] = `https://x.com${tweetLink}`;
	} catch (error) {
		//console.log("Error getting tweet link");
		//return data;
	}

	// Tweet Actions
	try {
		const tweetActions = await article.$$eval('div[aria-label][role="group"] button', (buttons) => {
			return buttons.map((button) => {
				const label = button.getAttribute("aria-label") || "";
				const value = button.querySelector('span[data-testid="app-text-transition-container"] span span')?.textContent?.trim() || "";

				// Skip bookmark and share post
				if (label.toLowerCase().includes("bookmark") || label.toLowerCase().includes("share")) {
					return null;
				}

				return { label, value };
			});
		});

		data["tweetActions"] = tweetActions;

		// Tweet Views
		const tweetViews = await article.$eval('a[href*="/analytics"] div span span', (el) => el.textContent?.trim() || "0");

		// Adding views to tweetActions
		tweetActions.push({ label: "Views", value: tweetViews });
		data["tweetActions"] = tweetActions;

		// Filter out null values
		data["tweetActions"] = data["tweetActions"].filter((action) => action !== null);
	} catch (error) {
		//console.log("Error getting tweet actions");
		//return data;
	}

	// Quote Tweet
	try {
		const quoteTweetContainer = await article.$('div[aria-labelledby*="id__"]  div[role="link"]');
		if (quoteTweetContainer) {
			const quoteTweet = await extractQuoteTweetData(quoteTweetContainer);
			data["quoteTweet"] = quoteTweet;
		}
	} catch (error) {}

	return data;
}

async function extractQuoteTweetData(quoteTweetElement: ElementHandle<Element>) {
	const data: TweetData = {
		key: "",
		userName: "",
		userHandle: "",
		tweetText: "",
		tweetImages: [],
		tweetVideo: "",
		tweetTime: "",
		tweetLink: "",
		tweetActions: [],
	};

	try {
		// User Name, from first span
		const userName = await quoteTweetElement.$eval('[data-testid="User-Name"] span', (el) => el.textContent?.trim() || "");
		data["userName"] = userName;
	} catch (error) {
		//console.error("Error extracting userName:", error);
	}

	try {
		// User Handle by finding internal span that starts with "@"
		const userHandle = await quoteTweetElement.$$eval('[data-testid="User-Name"] span', (spans) => {
			for (const span of spans) {
				const spanText = span.textContent?.trim() || "";
				if (spanText.startsWith("@")) {
					return spanText;
				}
			}
			return null;
		});
		data["userHandle"] = userHandle;
	} catch (error) {
		//console.error("Error extracting userHandle:", error);
	}

	try {
		// Tweet Text
		const tweetText = await quoteTweetElement.$eval('[data-testid="tweetText"]', (el) => el.textContent?.trim() || "");
		data["tweetText"] = tweetText;
	} catch (error) {
		//console.error("Error extracting tweetText:", error);
	}

	try {
		// Tweet Images
		const tweetImages = await quoteTweetElement.$$eval('[data-testid="tweetPhoto"] img', (imgs) => imgs.map((img) => img.src));
		data["tweetImages"] = tweetImages;
	} catch (error) {
		//console.error("Error extracting tweetImages:", error);
	}

	try {
		// Tweet Video
		const tweetVideo = await quoteTweetElement.$eval("video source", (el) => el.getAttribute("src") || "");
		data["tweetVideo"] = tweetVideo;
	} catch (error) {
		//console.error("Error extracting tweetVideo:", error);
	}

	try {
		// Tweet Time
		const tweetTime = await quoteTweetElement.$eval("time", (el) => el.getAttribute("datetime") || "");
		data["tweetTime"] = tweetTime;
	} catch (error) {
		//console.error("Error extracting tweetTime:", error);
	}

	try {
		// Tweet Link
		const tweetLink = await quoteTweetElement.$eval('a[href*="/status/"]', (el) => el.getAttribute("href") || "");
		data["tweetLink"] = `https://x.com${tweetLink}`;
	} catch (error) {
		//console.error("Error extracting tweetLink:", error);
	}

	return data;
}

async function screenshotAndQuit(page: Page): Promise<void> {
	await page.screenshot({ path: screenshotPath });
	process.exit();
}
