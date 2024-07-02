import { State } from "libs/llm";
import express from "express";

export type AdapterRoute = {
	endpoint: string;
	method: "GET" | "POST";
	handler: (req: express.Request, res: express.Response) => Promise<void>;
};

export class BaseBotAdapter {
	protected static state: State;

	public static getName(): string {
		throw new Error("getName not implemented.");
	}

	public static getDescription(): string {
		throw new Error("getDescription not implemented.");
	}

	public static getRoutes(): AdapterRoute[] {
		return [];
	}

	public static async run(_: any | null | undefined): Promise<void> {
		throw new Error("run not implemented.");
	}

	public static async setState(state: State): Promise<void> {
		this.state = state;
	}
}
