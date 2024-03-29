import cors from "cors";
import express, { json } from "express";
import { Config } from "@config";
import { Adapters } from "@adapters";

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

server.listen(Config.SERVER_PORT, async () => {
	console.log(`Server is running at port ${Config.SERVER_PORT}`);
});
