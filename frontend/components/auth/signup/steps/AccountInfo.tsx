// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import {
// 	Form,
// 	FormControl,
// 	FormField,
// 	FormItem,
// 	FormLabel,
// 	FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useRouter } from "next/navigation";
// import { useSignup } from "@/context/SignupContext";
// import { useCreateStudent } from "@/lib/api/mutations/auth";
// import { useEffect } from "react";
// import { toast } from "@/hooks/use-toast";

// const formSchema = z
// 	.object({
// 		email: z.string().email("Please enter a valid email address"),
// 		password: z
// 			.string()
// 			.min(8, "Password must be at least 8 characters")
// 			.regex(
// 				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
// 				"Password must contain at least one uppercase letter, one lowercase letter, and one number"
// 			),
// 		confirmPassword: z.string(),
// 	})
// 	.refine((data) => data.password === data.confirmPassword, {
// 		message: "Passwords don't match",
// 		path: ["confirmPassword"],
// 	});

// interface AccountInfoProps {
// 	onPrev: () => void;
// }

// export function AccountInfo({ onPrev }: AccountInfoProps) {
// 	const { updateState, signupState } = useSignup();
// 	const { signupStudent, isLoading, isError, isSuccess } = useCreateStudent();

// 	const router = useRouter();
// 	const form = useForm<z.infer<typeof formSchema>>({
// 		resolver: zodResolver(formSchema),
// 		defaultValues: {
// 			email: signupState?.account?.email ?? "",
// 			password: signupState?.account?.password ?? "",
// 			confirmPassword: signupState?.account?.confirmPassword ?? "",
// 		},
// 	});

// 	function onSubmit(values: z.infer<typeof formSchema>) {
// 		// Here you would typically make an API call to create the account

// 		updateState("account", values);
// 		console.log("account:::::", values);
// 		if (Object.keys(signupState?.account).length === 0) {
// 			signupStudent(signupState);
// 			if (isSuccess) {
// 				form.reset();
// 			}
// 		}
// 	}

// 	useEffect(() => {
// 		if (isSuccess) {
// 			toast({
// 				title: "Registration Successful",
// 				description:
// 					"Your company account has been created. Please check your email for verification.",
// 			});
// 		} else if (isError) {
// 			toast({
// 				title: "Registration Failed",
// 				description: "Please try again later.",
// 			});
// 		}
// 	}, [isSuccess, isError]);
// 	return (
// 		<Form {...form}>
// 			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
// 				<FormField
// 					control={form.control}
// 					name="email"
// 					render={({ field }) => (
// 						<FormItem>
// 							<FormLabel>Email</FormLabel>
// 							<FormControl>
// 								<Input
// 									placeholder="Enter your email"
// 									type="email"
// 									{...field}
// 								/>
// 							</FormControl>
// 							<FormMessage />
// 						</FormItem>
// 					)}
// 				/>
// 				<FormField
// 					control={form.control}
// 					name="password"
// 					render={({ field }) => (
// 						<FormItem>
// 							<FormLabel>Password</FormLabel>
// 							<FormControl>
// 								<Input
// 									placeholder="Create a password"
// 									type="password"
// 									{...field}
// 								/>
// 							</FormControl>
// 							<FormMessage />
// 						</FormItem>
// 					)}
// 				/>
// 				<FormField
// 					control={form.control}
// 					name="confirmPassword"
// 					render={({ field }) => (
// 						<FormItem>
// 							<FormLabel>Confirm Password</FormLabel>
// 							<FormControl>
// 								<Input
// 									placeholder="Confirm your password"
// 									type="password"
// 									{...field}
// 								/>
// 							</FormControl>
// 							<FormMessage />
// 						</FormItem>
// 					)}
// 				/>
// 				<div className="flex justify-between">
// 					<Button type="button" variant="outline" onClick={onPrev}>
// 						Back
// 					</Button>
// 					{isLoading ? (
// 						<p>Loading....</p>
// 					) : (
// 						<Button type="submit">Create Account</Button>
// 					)}
// 				</div>
// 			</form>
// 		</Form>
// 	);
// }

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useSignup } from "@/context/SignupContext";
import { useCreateStudent } from "@/lib/api/mutations/auth";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";

const formSchema = z
	.object({
		email: z.string().email("Please enter a valid email address"),
		password: z
			.string()
			.min(8, "Password must be at least 8 characters")
			.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
				"Password must contain at least one uppercase letter, one lowercase letter, and one number"
			),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

interface AccountInfoProps {
	onPrev: () => void;
}

export function AccountInfo({ onPrev }: AccountInfoProps) {
	const { updateState, signupState } = useSignup();
	const { signupStudent, isLoading, isError, isSuccess } = useCreateStudent();
	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: signupState?.account?.email ?? "",
			password: signupState?.account?.password ?? "",
			confirmPassword: signupState?.account?.confirmPassword ?? "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			// First update the state
			updateState("account", values);

			// Create a new object that combines the existing signup state with the new account values
			const updatedSignupState = {
				...signupState,
				account: values,
			};

			// Then make the API call with the complete state
			signupStudent(updatedSignupState, {
				onSuccess: () => {
					toast({
						title: "Registration Successful",
						description:
							"You student has been created. Please check your email for verification.",
					});
					form.reset();
				},
				onError: () => {
					toast({
						title: "Registration Failed",
						description: "Please try again later.",
					});
				},
			});
		} catch (error) {
			console.error("Submission error:", error);
			toast({
				title: "Submission Error",
				description:
					"There was an error submitting your form. Please try again.",
			});
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter your email"
									type="email"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									placeholder="Create a password"
									type="password"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<Input
									placeholder="Confirm your password"
									type="password"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex justify-between">
					<Button type="button" variant="outline" onClick={onPrev}>
						Back
					</Button>
					<Button type="submit" disabled={isLoading}>
						{isLoading ? "Creating Account..." : "Create Account"}
					</Button>
				</div>
			</form>
		</Form>
	);
}
