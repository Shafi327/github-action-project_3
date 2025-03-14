import { cookies } from "next/headers";
import * as jose from "jose";

interface TokenResponse {
	access_token: string;
	refresh_token: string;
}

export async function checkAndRefreshToken() {
	const cookieStore = await cookies();
	const token = cookieStore.get("access_token");
	const refreshToken = cookieStore.get("refreshToken");

	if (!token || !refreshToken) {
		throw new Error("No tokens found");
	}

	try {
		const decoded: { exp: number } = jose.decodeJwt(token.value);
		const currentTime = Math.floor(Date.now() / 1000);

		// If token is about to expire (less than 5 minutes remaining)
		if (decoded.exp - currentTime < 300) {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ refresh_token: refreshToken.value }),
				}
			);

			if (!response.ok) {
				throw new Error("Token refresh failed");
			}

			const data: TokenResponse = await response.json();
			const newDecoded: { exp: number } = jose.decodeJwt(
				data.access_token
			);

			// Update cookies with new tokens
			cookieStore.set("access_token", data.access_token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "lax",
				maxAge: 60 * 60 * 24 * 7, // 1 week
				path: "/",
			});

			cookieStore.set("refreshToken", data.refresh_token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				path: "/",
				maxAge: 7 * 24 * 60 * 60, // 1 week
			});

			return true;
		}

		return true;
	} catch (error) {
		throw error;
	}
}
