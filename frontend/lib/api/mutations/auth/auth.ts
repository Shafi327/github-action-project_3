import { useMutation } from "@tanstack/react-query";
import { AuthResponse, LoginCredentials, RegisterData } from "../../types";
import { endpoints } from "../../endpoints";
import { setCookie } from "@/lib/cookies";
import apiClient from "../../axios";
export const useLogin = () => {
	return useMutation<AuthResponse, Error, LoginCredentials>({
		mutationFn: async (credentials) => {
			const { data } = await apiClient.post(
				endpoints.auth.login,
				credentials
			);
			return data;
		},
		onSuccess: (data) => {
			// Set secure HTTP-only cookies
			setCookie("access_token", data.token);
			setCookie("refreshToken", data.refreshToken);
			setCookie("user_role", data.user.role);
		},
	});
};

export const useRegister = () => {
	return useMutation<AuthResponse, Error, RegisterData>({
		mutationFn: async (registerData) => {
			const { data } = await apiClient.post(
				endpoints.auth?.register,
				registerData
			);
			return data;
		},
	});
};

export const useLogout = () => {
	return useMutation<void, Error>({
		mutationFn: async () => {
			await apiClient.post(endpoints.auth.logout);
			localStorage.clear();
		},
	});
};
