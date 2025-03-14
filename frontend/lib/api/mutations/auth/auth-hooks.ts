import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { LoginCredentials } from "../../types";
import api from "../../axios";
import { endpoints } from "../../endpoints";
import { logout } from "@/utils";
import { handleAuth, refreshAccessToken } from "./authService";

export function useAuth() {
	const router = useRouter();

	// const loginMutation = useMutation({
	// 	mutationFn: async (credentials: LoginCredentials) => {
	// 		const response = await fetch(
	// 			`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
	// 			{
	// 				method: "POST",
	// 				headers: {
	// 					"Content-Type": "application/json",
	// 				},
	// 				body: JSON.stringify(credentials),
	// 			}
	// 		);

	// 		if (!response.ok) {
	// 			throw new Error("Login failed");
	// 		}

	// 		return response.json();
	// 	},
	// 	onSuccess: (data) => {
	// 		console.log("data", data);
	// 		if (data.role === "admin") {
	// 			router.push("/admin");
	// 		} else if (data.role === "student") {
	// 			router.push("/student");
	// 		} else {
	// 			router.push("/industry");
	// 		}
	// 	},
	// });

	// const loginMutation = useMutation({
	// 	mutationFn: async (credentials: LoginCredentials) => {
	// 		const { data } = await api.post(
	// 			`${endpoints.auth.login}`,
	// 			credentials
	// 		);
	// 		return data;
	// 	},
	// 	onSuccess: (data) => {
	// 		if (data.role === "admin") {
	// 			router.push("/admin");
	// 		} else if (data.role === "student") {
	// 			router.push("/student");
	// 		} else {
	// 			router.push("/industry");
	// 		}
	// 	},
	// });

	const loginMutation = useMutation({
		mutationFn: async (credentials: LoginCredentials) => {
			// Step 1: Refresh the access token before making the login request
			const response = handleAuth(credentials);

			return response;
		},
		onSuccess: (data: any) => {
			// Handle navigation based on role
			if (data?.role === "admin") {
				router.push("/admin");
			} else if (data?.role === "student") {
				router.push("/student");
			} else {
				router.push("/industry");
			}
		},
		onError: (error) => {
			console.error("Login error:", error.message);
		},
	});

	return {
		login: loginMutation.mutate,
		isLoading: loginMutation.isPending,
		isError: loginMutation.error,
		isSuccess: loginMutation.isSuccess,
	};
}
