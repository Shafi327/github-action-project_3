import { create } from "zustand";

export interface IndustrySignupState {
	formData: {
		account: any;
		company: any;
		// team: any;
		// verification: any;
	};
	completedSteps: string[];
	setFormData: (step: string, data: any) => void;
	setStepCompleted: (step: string) => void;
	isStepCompleted: (step: string) => boolean;
	resetForm: () => void;
}

export const useIndustrySignupStore = create<IndustrySignupState>(
	(set, get) => ({
		formData: {
			account: null,
			company: null,
			team: null,
			verification: null,
		},
		completedSteps: [],
		setFormData: (step, data) =>
			set((state) => ({
				formData: {
					...state.formData,
					[step]: data,
				},
			})),
		setStepCompleted: (step) =>
			set((state) => ({
				completedSteps: [...new Set([...state.completedSteps, step])],
			})),
		isStepCompleted: (step) => {
			const state = get();
			return state.completedSteps.includes(step);
		},
		resetForm: () =>
			set({
				formData: {
					account: null,
					company: null,
					// team: null,
					// verification: null,
				},
				completedSteps: [],
			}),
	})
);
