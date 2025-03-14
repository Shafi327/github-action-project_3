import { create } from "zustand";

interface SignupState {
	formData: {
		account: any;
		personal: any;
		academic: any;
		skills: any;
	};
	setFormData: (step: string, data: any) => void;
	resetForm: () => void;
}

export const useSignupStore = create<SignupState>((set) => ({
	formData: {
		account: null,
		personal: null,
		academic: null,
		skills: null,
	},
	setFormData: (step, data) =>
		set((state) => ({
			formData: {
				...state.formData,
				[step]: data,
			},
		})),
	resetForm: () =>
		set({
			formData: {
				account: null,
				personal: null,
				academic: null,
				skills: null,
			},
		}),
}));
