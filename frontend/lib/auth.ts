"use server";
import { cookies } from "next/headers";

// const JWT_SECRET = new TextEncoder().encode(
// 	process.env.JWT_SECRET || "default_secret_replace_in_production"
// );

// export interface JWTPayload extends JoseJWTPayload {
// 	id: string;
// 	email: string;
// 	role: "student" | "employer" | "admin";
// }

// export async function createToken(payload: JWTPayload): Promise<string> {
// 	return new SignJWT(payload)
// 		.setProtectedHeader({ alg: "HS256" })
// 		.setIssuedAt()
// 		.setExpirationTime("24h")
// 		.sign(JWT_SECRET);
// }

// export async function verifyToken(token: string): Promise<JWTPayload> {
// 	try {
// 		const { payload } = await jwtVerify(token, JWT_SECRET);
// 		return payload as JWTPayload;
// 	} catch (error) {
// 		throw new Error("Invalid token");
// 	}
// }

// export async function getUser(req?: NextRequest) {
// 	try {
// 		let token: string | undefined;

// 		if (req) {
// 			token = req.cookies.get("token")?.value;
// 		} else {
// 			const cookieStore = await cookies();
// 			token = cookieStore.get("token")?.value;
// 		}

// 		if (!token) return null;

// 		const payload = await verifyToken(token);
// 		return payload;
// 	} catch (error) {
// 		return null;
// 	}
// }

export const clearSessionCookie = async () => {
	const cookieStore = await cookies();
	cookieStore.delete("access_token");

	// Optional: Clear server-side session storage
};
