import { industrySignupService } from "@/lib/api/mutations/auth";
import { IndustrySignupState } from "@/lib/stores/IndustrySignupStore";
import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
} from "@tanstack/react-query";

export interface SignupData {
	// Define the properties of SignupData here
	// e.g., name: string;
	account: {
		email: string;
		password: string;
		confirmPassword: string;
	};
	company: {
		name: string;
		description: string;
		website: string;
		avatar: string;
	};
	// verification: {
	// 	code: string;
	// };
}

export const useIndustrySignup = (): UseMutationResult<
	any,
	Error,
	IndustrySignupState
> => {
	return useMutation({
		mutationFn: industrySignupService,
	});
};
