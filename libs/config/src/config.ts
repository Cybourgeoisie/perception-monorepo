import dotenv from "dotenv";

dotenv.config();

export const Config = {
	SERVER_PORT: (process.env.SERVER_PORT && parseInt(process.env.SERVER_PORT, 10)) || 5200,
	LLM_API_ENDPOINT: process.env.LLM_API_ENDPOINT || "OpenAI",
	OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
	OPENAI_API_KEY: process.env.OPENAI_API_KEY,
	LOCAL_API_ENDPOINT: process.env.LOCAL_API_ENDPOINT || "",
	LOCAL_API_KEY: process.env.LOCAL_API_KEY || "",
	GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "",
	CUSTOM_SEARCH_ENGINE_ID: process.env.CUSTOM_SEARCH_ENGINE_ID || "",
	EXECUTE_LOCAL_COMMANDS: process.env.EXECUTE_LOCAL_COMMANDS === "True" || false,
	RESTRICT_TO_WORKSPACE: process.env.RESTRICT_TO_WORKSPACE === "True" || true,
};
