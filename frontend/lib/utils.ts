import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// export const getUserCredentials: any = () => {
// 	// updateSessionData()
// 	const tokenData = token();
// 	// const tokenData = sessionData
// 	if (tokenData) {
// 		// return tokenData
// 		return jwt(tokenData);
// 	}
// 	return null;
// };
