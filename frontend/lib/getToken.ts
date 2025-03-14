"use server";

import { cookies } from "next/headers";
import * as jose from "jose";
export const getToken = async (
	tokenType: "access_token" | "refreshToken" | "token_expiry" = "access_token"
) => {
	const cookieStore = await cookies();
	return cookieStore.get("access_token");
};

export const getUser = async (): Promise<any | undefined> => {
	const token = await getToken();
	if (token?.value) {
		return await jose.decodeJwt(token?.value);
	}
};
