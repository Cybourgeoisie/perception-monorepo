import * as dotenv from "dotenv";

dotenv.config();

const config = {
	SERVER_PORT: (process.env.SERVER_PORT && parseInt(process.env.SERVER_PORT, 10)) || 5200,
	USE_OPENROUTER: process.env.USE_OPENROUTER === "True" || false,
	OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
	OPENAI_API_KEY: process.env.OPENAI_API_KEY,
	OPENAI_TEMPERATURE: (process.env.OPENAI_TEMPERATURE && parseFloat(process.env.OPENAI_TEMPERATURE)) || 0.0,
	GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "",
	CUSTOM_SEARCH_ENGINE_ID: process.env.CUSTOM_SEARCH_ENGINE_ID || "",
	FAST_LLM_MODEL: process.env.FAST_LLM_MODEL || "gpt-3.5-turbo",
	SMART_LLM_MODEL: process.env.SMART_LLM_MODEL || "gpt-4",
	SMART_LLM_MODEL_32K: process.env.SMART_LLM_MODEL_32K || "gpt-4-32k",
	OPENROUTER_LLM_MODEL: process.env.OPENROUTER_LLM_MODEL || "openai/gpt-4-preview",
	FAST_TOKEN_LIMIT: (process.env.FAST_TOKEN_LIMIT && parseInt(process.env.FAST_TOKEN_LIMIT, 10)) || 4000,
	SMART_TOKEN_LIMIT: (process.env.SMART_TOKEN_LIMIT && parseInt(process.env.SMART_TOKEN_LIMIT, 10)) || 8000,
	SMART_TOKEN_LIMIT_32K: (process.env.SMART_TOKEN_LIMIT && parseInt(process.env.SMART_TOKEN_LIMIT_32K, 10)) || 32000,
	EXECUTE_LOCAL_COMMANDS: process.env.EXECUTE_LOCAL_COMMANDS === "True" || false,
	RESTRICT_TO_WORKSPACE: process.env.RESTRICT_TO_WORKSPACE === "True" || true,
	USER_AGENT:
		process.env.USER_AGENT || "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
};

export default config;
