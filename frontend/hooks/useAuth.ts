"use client";
import { useRouter } from "next/navigation";
import { LoginCredentials, RegisterData } from "@/lib/api/types";
import {
	useLogin,
	useLogout,
	useRegister,
} from "@/lib/api/mutations/auth/auth";

export function useAuth() {
	const router = useRouter();
	const loginMutation = useLogin();
	const registerMutation = useRegister();
	const logoutMutation = useLogout();

	const login = async (credentials: LoginCredentials) => {
		try {
			await loginMutation.mutateAsync(credentials);
			router.push("/dashboard");
		} catch (error) {
			throw error;
		}
	};

	const register = async (data: RegisterData) => {
		try {
			await registerMutation.mutateAsync(data);
			router.push("/login");
		} catch (error) {
			throw error;
		}
	};

	const logout = async () => {
		try {
			await logoutMutation.mutateAsync();
			router.push("/auth/login");
		} catch (error) {
			throw error;
		}
	};

	return {
		login,
		register,
		logout,
		isLoading:
			loginMutation.isPending ||
			registerMutation.isPending ||
			logoutMutation.isPending,
	};
}
