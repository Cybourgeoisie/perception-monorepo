import React, { useState, useCallback } from "react";
import { makeApiCall } from "../../services/api";

type Message = {
	role: "user" | "assistant";
	content: { type: string; text: string }[];
};

const ChatInterface = () => {
	const [messages, setMessages] = useState<Message[]>([]);
	const [inputMessage, setInputMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const handleSubmit = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (!inputMessage.trim()) return;

			const newMessage = {
				role: "user" as "user" | "assistant",
				content: [
					{ type: "text", text: inputMessage },
					//{ type: "image_url", image_url: { url: `data:image/png;base64,${img}` } },
				],
			};
			setMessages([...messages, newMessage]);
			setInputMessage("");

			setLoading(true);
			makeApiCall("llm-endpoint", "POST", { messages: [newMessage] })
				.then((response) => {
					if (response) {
						setMessages((prev) => [
							...prev,
							{
								role: "assistant",
								content: [{ type: "text", text: response }],
							},
						]);
					}
					setLoading(false);
				})
				.catch((error) => {
					setError(error);
					setLoading(false);
				});
		},
		[inputMessage, messages],
	);

	return (
		<div className="flex flex-col h-screen max-w-2xl mx-auto p-4">
			<div className="flex-grow overflow-auto mb-4 border border-gray-300 rounded p-4">
				{messages.map((message, index) => (
					<div key={index} className={`mb-2 ${message.role === "user" ? "text-right" : "text-left"}`}>
						<span className={`inline-block p-2 rounded ${message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
							{message.content.map((content, index) => (
								<React.Fragment key={index}>{content.type === "text" && <p>{content.text}</p>}</React.Fragment>
							))}
						</span>
					</div>
				))}
				{loading && <div className="text-center">Loading...</div>}
				{error && <div className="text-center text-red-500">Error: {error.message}</div>}
			</div>
			<form onSubmit={handleSubmit} className="flex">
				<input
					type="text"
					value={inputMessage}
					onChange={(e) => setInputMessage(e.target.value)}
					placeholder="Type your message..."
					className="flex-grow border border-gray-300 rounded-l p-2"
				/>
				<button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
					Send
				</button>
			</form>
		</div>
	);
};

export default ChatInterface;
