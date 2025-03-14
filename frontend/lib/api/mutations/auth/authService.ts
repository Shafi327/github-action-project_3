"use server";

import axios from "axios";
import mem from "mem";
import { cookies } from "next/headers";
import * as jose from "jose";

const ACCESS_TOKEN_DURATION = 15 * 60; // 15 minutes in seconds
const REFRESH_THRESHOLD = 5 * 60; // 5 minutes in seconds

export async function handleAuth(data: { email: string; password: string }) {
	try {
		// Replace with your actual API endpoint
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
			data,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		const result = await response.data;
		if (result.access_token) {
			const cookieStore = await cookies();

			const user: { exp: number } = await jose.decodeJwt(
				result.access_token
			);
			const timestamp = user?.exp;
			const currentTimestamp = Math.floor(Date.now() / 1000);

			// Calculate the difference
			const differenceInSeconds = timestamp - currentTimestamp;

			cookieStore.set("access_token", result.access_token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "lax",
				maxAge: 60 * 60 * 24 * 7, // 1 week
				path: "/",
			});

			// Set refresh token with longer expiry
			cookieStore.set("refreshToken", result.refreshToken, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				path: "/",
				maxAge: 7 * 24 * 60 * 60, // 1 week
			});

			cookieStore.set("token_expiry", result.access_token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				path: "/",
				maxAge: differenceInSeconds - 300,
			});
			if (result) {
			}
			return { success: true, data: result };
		} else {
			return { success: false, error: result.message };
		}
	} catch (error) {
		return { success: false, error };
	}
}

export async function refreshAccessToken() {
	const cookieStore = await cookies();
	const refresh_token = cookieStore.get("refreshToken");

	try {
		if (!refresh_token) {
			return { success: false, error: "No refresh token found" };
		}

		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_END_POINT}/auth/refresh/token`,
			null,
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${refresh_token.value}`, // Send the refresh token in the Authorization header
				},
			}
		);

		const result = response?.data;

		if (result.access_token) {
			const user: { exp: number } = await jose.decodeJwt(
				result.access_token
			);

			const timestamp = user?.exp;

			const currentTimestamp = Math.floor(Date.now() / 1000);

			// Calculate the difference
			const differenceInSeconds = timestamp - currentTimestamp;

			// Update only the access token
			cookieStore.set("access_token", result.access_token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				path: "/",
				maxAge: 15 * 60, // 15 minutes
			});

			cookieStore.set("refreshToken", result.refreshToken, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				path: "/",
				maxAge: 7 * 24 * 60 * 60, // 1 week
			});

			cookieStore.set("token_expiry", result.access_token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				// sameSite: "strict",
				// path: "/",
				maxAge: differenceInSeconds - 300,
			});

			return { success: true, data: result };
		} else {
			return { success: false, error: result.message };
		}
	} catch (error) {
		return { success: false, error };
	}
}

export async function shouldRefreshToken(): Promise<boolean> {
	const cookieStore = await cookies();
	const tokenExpiry = cookieStore.get("token_expiry");

	if (!tokenExpiry) {
		return true;
	}

	const expiryTime = parseInt(tokenExpiry.value);
	const currentTime = Date.now();
	const timeUntilExpiry = expiryTime - currentTime;

	// Return true if less than REFRESH_THRESHOLD milliseconds remaining
	return timeUntilExpiry < REFRESH_THRESHOLD * 1000;
}

// Utility function to check and refresh token if needed
export async function checkAndRefreshToken() {
	const cookieStore = await cookies();
	const refreshToken = cookieStore.get("refreshToken");
	const needsRefresh = await shouldRefreshToken();

	if (needsRefresh) {
		const memoizedRefreshAccessToken = mem(refreshAccessToken, {
			maxAge: 30 * 1000, // Cache for 30 seconds
			cacheKey: () => refreshToken?.value, // Use the refreshToken as the cache key
		});
		const refreshResult = await memoizedRefreshAccessToken();
		return refreshResult.success;
	}

	return true;
}

export async function clearSessionCookie() {
	const cookieStore = await cookies();
	cookieStore.delete("access_token");

	// Optional: Clear server-side session storage
}

// export handle login
