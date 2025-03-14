"use server";
import { cookies } from "next/headers";

/**
 * Set a cookie with the specified name, value, and options.
 * @param name - Name of the cookie
 * @param value - Value of the cookie
 * @param options - Cookie options
 */
export async function setCookie(
	name: string,
	value: string,
	options: Partial<CookieOptions> = {}
) {
	const cookieStore = await cookies();
	cookieStore.set(name, value, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
		maxAge: 30 * 24 * 60 * 60, // 30 days
		...options,
	});
}

/**
 * Get the value of a cookie by name.
 * @param name - Name of the cookie
 * @returns The value of the cookie or undefined if not found
 */
export async function getCookie(name: string) {
	const cookieStore = await cookies();
	return cookieStore.get(name)?.value;
}

/**
 * Delete a cookie by setting its maxAge to -1.
 * @param name - Name of the cookie
 */
export async function deleteCookie(name: string) {
	setCookie(name, "", { maxAge: -1 });
}

/**
 * Options for setting cookies.
 */
export interface CookieOptions {
	httpOnly?: boolean;
	secure?: boolean;
	sameSite?: "lax" | "strict" | "none";
	path?: string;
	maxAge?: number;
}
