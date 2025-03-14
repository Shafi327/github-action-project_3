import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";
import { checkAndRefreshToken } from "./lib/api/mutations/auth/tokenService";

// Define protected route patterns
const studentRoutes = ["/student", "/profile", "/jobs", "/applications"];
const industryRoutes = ["/industry"];
const adminRoutes = ["/admin"];
const publicRoutes = ["/", "/auth/login", "/auth/signup", "/auth/industry"];

interface JWTPayload {
	exp: number;
	role: "student" | "industry" | "admin";
	userId: string;
}

export async function middleware(request: NextRequest) {
	const cookieStore = await cookies();
	const token = cookieStore.get("access_token");
	const path = request.nextUrl.pathname;

	// Allow public routes
	// if (publicRoutes.some((route) => path.startsWith(route))) {
	// 	return NextResponse.next();
	// }

	// Check authentication
	if (!token) {
		return NextResponse.redirect(new URL("/auth/login", request.url));
	}

	try {
		// Verify and decode token
		const user = jose.decodeJwt(token.value) as JWTPayload;
		await checkAndRefreshToken();
		// Role-based access control
		switch (user.role) {
			case "student":
				if (
					industryRoutes.some((route) => path.startsWith(route)) ||
					adminRoutes.some((route) => path.startsWith(route))
				) {
					return NextResponse.redirect(
						new URL("/student", request.url)
					);
				}
				break;

			case "industry":
				if (
					studentRoutes.some((route) => path.startsWith(route)) ||
					adminRoutes.some((route) => path.startsWith(route))
				) {
					return NextResponse.redirect(
						new URL("/industry/dashboard", request.url)
					);
				}
				break;

			case "admin":
				if (!adminRoutes.some((route) => path.startsWith(route))) {
					return NextResponse.redirect(
						new URL("/admin", request.url)
					);
				}
				break;

			default:
				return NextResponse.redirect(
					new URL("/auth/login", request.url)
				);
		}

		return NextResponse.next();
	} catch (error) {
		return NextResponse.redirect(new URL("/auth/login", request.url));
	}
}

export const config = {
	// matcher: [
	// 	/*
	// 	 * Match all request paths except for the ones starting with:
	// 	 * - api (API routes)
	// 	 * - _next/static (static files)
	// 	 * - _next/image (image optimization files)
	// 	 * - favicon.ico (favicon file)
	// 	 */
	// 	"/((?!api|_next/static|_next/image|favicon.ico).*)",
	// ],
	matcher: [
		"/student/(.*)",
		"/student",
		"/admin",
		"/admin/(.*)",
		"/industry/(.*)",
		"/industry",
	],
};
