"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/ui/forms";

const accountSchema = z
	.object({
		email: z.string().email("Please enter a valid email address"),
		password: z
			.string()
			.min(8, "Password must be at least 8 characters")
			.regex(
				/[A-Z]/,
				"Password must contain at least one uppercase letter"
			)
			.regex(
				/[a-z]/,
				"Password must contain at least one lowercase letter"
			)
			.regex(/[0-9]/, "Password must contain at least one number")
			.regex(
				/[^A-Za-z0-9]/,
				"Password must contain at least one special character"
			),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

interface AccountDetailsFormProps {
	onComplete: (data: z.infer<typeof accountSchema>) => void;
}

export function AccountDetailsForm({ onComplete }: AccountDetailsFormProps) {
	const form = useForm<z.infer<typeof accountSchema>>({
		resolver: zodResolver(accountSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onComplete)}
				className="space-y-6"
			>
				<TextInput
					control={form.control}
					name="email"
					label="Company Email"
					placeholder="Enter your company email address"
				/>

				<TextInput
					control={form.control}
					name="password"
					label="Password"
					placeholder="Create a strong password"
					type="password"
				/>

				<TextInput
					control={form.control}
					name="confirmPassword"
					label="Confirm Password"
					placeholder="Confirm your password"
					type="password"
				/>

				<div className="flex justify-end">
					<Button type="submit">Next</Button>
				</div>
			</form>
		</Form>
	);
}
