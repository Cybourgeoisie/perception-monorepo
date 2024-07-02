import cors from "cors";
import express, { json } from "express";
import { Config } from "@config";
import { Adapters } from "@adapters";
import { LlmApi } from "libs/llm";
import OpenAI from "openai";

const server: express.Application = express();

server.use(json());
server.use(cors({ origin: true, credentials: true }));

server.set("trust proxy", 1);

// Iterate through all bots, expose their routes
const AdapterRoutes = Adapters.map((Adapter) => "getRoutes" in Adapter && (Adapter as any).getRoutes()).filter((route) => !!route && route.length);

// Create the routes
console.log("Exposed routes:");
AdapterRoutes.forEach((routes) => {
	routes.forEach((route) => {
		console.log(`\t${route.method} ${route.endpoint}`);
		server[route.method.toLowerCase()](route.endpoint, route.handler);
	});
});

// Create a basic health check
server.get("/health", (_, res) => {
	res.json({ status: "ok" });
});

server.post("/llm-endpoint", async (req, res) => {
	const llmApi = new LlmApi({
		provider: "OpenAI",
	});

	// Initialize the return of streaming data to the client
	res.setHeader("Content-Type", "text/plain");
	res.setHeader("Transfer-Encoding", "chunked");

	console.log(req.body.messages);
	//res.end();
	//process.exit();

	llmApi.getCompletion({
		messages: req.body.messages as OpenAI.ChatCompletionMessage[],
		model: "fast",
		onMessageCallback: (content: string) => {
			res.write(content);
		},
		onCompleteCallback: (_: OpenAI.ChatCompletionMessage) => {
			res.end();
		},
	});
});

server.listen(Config.SERVER_PORT, async () => {
	console.log(`Server is running at port ${Config.SERVER_PORT}`);
});
