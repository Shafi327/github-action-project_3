"use client";
// src/context/SignupContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SignupState {
	personal: any;
	education: any;
	skills: any;
	account: any;
}

const SignupContext = createContext<any>(null);

export function useSignup() {
	return useContext(SignupContext);
}

interface SignupProviderProps {
	children: ReactNode;
}

export function SignupProvider({ children }: SignupProviderProps) {
	const [signupState, setSignupState] = useState<SignupState>({
		personal: {},
		education: {},
		skills: {},
		account: {},
	});


	const updateState = (step: string, data: any) => {
		setSignupState((prevState) => ({
			...prevState,
			[step]: data,
		}));
	};

	return (
		<SignupContext.Provider value={{ signupState, updateState }}>
			{children}
		</SignupContext.Provider>
	);
}
