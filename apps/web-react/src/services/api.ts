import { useState, useEffect } from "react";

interface ApiResponse<T> {
	data: T | null;
	loading: boolean;
	error: string | null;
}

interface FetchOptions extends RequestInit {
	timeout?: number;
}

// Get the base URL from environment variables
const BASE_URL = process.env.REACT_APP_API_BASE_URL || "";

if (!BASE_URL) {
	console.warn("API base URL is not set. Please set REACT_APP_API_BASE_URL in your environment.");
}

const useApi = <T>(endpoint: string, options?: FetchOptions): ApiResponse<T> => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchOptions: RequestInit = {
					...options,
				};

				const url = `${BASE_URL}${endpoint}`;
				const response = await fetch(url, fetchOptions);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const result = await response.json();
				setData(result);
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message || "An error occurred");
				} else {
					setError("An unknown error occurred");
				}
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [endpoint]);

	return { data, loading, error };
};

export default useApi;

export const makeApiCall = async <T>(
	endpoint: string,
	method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
	data?: any,
	headers?: Record<string, string>,
	options?: FetchOptions,
): Promise<string> => {
	try {
		const fetchOptions: RequestInit = {
			method,
			headers: {
				"Content-Type": "application/json",
				...headers,
			},
			...options,
		};

		if (data && method !== "GET") {
			fetchOptions.body = JSON.stringify(data);
		}

		const url = `${BASE_URL}${endpoint}`;
		const response = await fetch(url, fetchOptions);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.text();
	} catch (err) {
		return Promise.reject(err);
	}
};
