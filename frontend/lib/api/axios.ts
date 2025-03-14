import axios, { AxiosHeaders, InternalAxiosRequestConfig } from "axios";
import { getToken } from "../getToken";

interface ApiConfig {
	baseURL: string;
	headers?: Record<string, string>;
}

// Create base config
const config: ApiConfig = {
	baseURL: process.env.NEXT_PUBLIC_API_URL + "",
};

const api = axios.create(config);

// Request interceptor
api.interceptors.request.use(
	async (config: InternalAxiosRequestConfig) => {
		const isFormData = config.data instanceof FormData;
		// Default headers that are always needed

		const headers = new AxiosHeaders({
			...config.headers,
			Accept: "application/json",
			...(isFormData ? {} : { "Content-Type": "application/json" }),
		});

		config.headers = headers;

		const token = await getToken();

		if (token?.value) {
			config.headers.Authorization = `Bearer ${token?.value}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// Response interceptor
api.interceptors.response.use(
	(response) => {
		// Handle successful responses
		if (response.status >= 200 && response.status < 300) {
			return response;
		}

		// Handle other success statuses that might contain error messages
		const messages = response.data?.messages;
		if (messages) {
			const formattedMessages = Array.isArray(messages)
				? messages
				: [messages];
			return Promise.reject({ messages });
		}

		return Promise.reject({ messages: ["Unexpected response status"] });
	},
	(error) => {
		// Log error for debugging
		console.error("Response error:", {
			status: error.response?.status,
			data: error.response?.data,
		});

		// Handle specific error cases
		if (error?.response) {
			return Promise.reject({
				data: error.response?.data,
			});
		}

		// Network errors or other issues
		return Promise.reject({
			data: { message: error.message || "Network error occurred" },
		});
	}
);

export default api;
