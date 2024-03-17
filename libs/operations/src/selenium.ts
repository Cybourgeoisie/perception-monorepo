import BaseOperation, { OperationFormat } from "./base/base_operation";
import { Builder, By, WebDriver, WebElement, until } from "selenium-webdriver";
import { Options as ChromeOptions } from "selenium-webdriver/chrome";
import { JSDOM } from "jsdom";
import { config as cfg } from "@config";

export default class Selenium extends BaseOperation {
	public static getName(): string {
		return "Selenium Web Browser";
	}

	public static getDescription(): string {
		return "Browse a web page with Selenium.";
	}

	public static getOperations(): OperationFormat[] {
		return [
			{
				method: "browse_internet",
				call: this.run,
				args: [
					{
						key: "url",
						type: "string",
					},
				],
			},
		];
	}

	public static async run(url: string): Promise<string> {
		try {
			const options = new ChromeOptions();
			options.addArguments(cfg.USER_AGENT);
			options.addArguments("--no-sandbox");
			options.addArguments("--headless");
			options.addArguments("--disable-gpu");

			const driver: WebDriver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

			await driver.get(url);

			await driver.wait(until.elementLocated(By.tagName("body")), 10000);

			const pageSource: string = await driver.executeScript<string>("return document.body.outerHTML;");

			const dom = new JSDOM(pageSource);
			const { document } = dom.window;

			// Remove all script and style tags, focus on content
			Array.from(document.querySelectorAll("script, style")).forEach((el: WebElement) => el.remove());

			const text = document.body.textContent || "";
			const lines = text.split("\n").map((line: string) => line.trim());
			const chunks = lines.flatMap((line: string) => line.split("  ").map((phrase) => phrase.trim()));
			const cleanedText = chunks.filter((chunk) => chunk).join("\n");

			return cleanedText;
		} catch (e) {
			return `Error: ${e}`;
		}
	}
}
