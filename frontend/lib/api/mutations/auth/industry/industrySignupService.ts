import { IndustrySignupState } from "@/lib/stores/IndustrySignupStore";
import axios from "axios";

interface SignupData {
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
}

export const industrySignupService = async (signupData: IndustrySignupState) => {
	const response = await axios.post(
		`${process.env.NEXT_PUBLIC_API_URL}/industry/register`,
		signupData
	);
	return response.data;
};
// This is a TypeScript file that exports a function called industrySignup. The function takes in a parameter called signupData, which is an object with properties defined in the SignupData interface. The function makes a POST request to the /api/industry/signup endpoint with the signupData object as the request body. The response from the request is returned as a Promise.
