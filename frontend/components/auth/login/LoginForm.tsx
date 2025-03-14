"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Card } from "@/components/ui/card";

import Link from "next/link";
import { LoginError } from "./LoginError";
import { useAuth } from "@/lib/api/mutations/auth/auth-hooks";
import { toast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

const formSchema = z.object({
	email: z.string().email("Please enter a valid email address"),
	password: z.string().min(4, "Password must be at least 4 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function LoginForm() {
	const { login, isLoading, isSuccess, isError } = useAuth();
	const [error, setError] = useState<string | null>(null);

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(values: FormData) {
		try {
			setError(null);
			login(values, {
				onSuccess: () => {
					toast({
						title: "Signed In",
						description: "Signed In Successfully",
						variant: "success",
					});
				},
				onError: (err) => {
					console.log("error::::", err);
					toast({
						title: "Error while Signin",
						description:
							"Incorrect email or password. Please try again.",
						variant: "destructive",
					});
				},
			});
		} catch (err) {
			setError(
				err instanceof Error
					? err.message
					: "An error occurred during login"
			);
		}
	}

	return (
		<>
			{isError && (
				<p className="text-red-400 mb-2">Incorrect Email or Password</p>
			)}
			<Card className="p-6">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4"
					>
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
											disabled={isLoading}
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
											placeholder="Enter your password"
											type="password"
											{...field}
											disabled={isLoading}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{error && <LoginError message={error} />}

						<div className="space-y-4">
							{isLoading ? (
								<Skeleton className="w-full h-12 rounded-lg" />
							) : (
								<Button
									type="submit"
									className="w-full"
									disabled={isLoading}
								>
									{isLoading ? "Signing in..." : "Sign in"}
								</Button>
							)}
							<div className="text-center text-sm">
								<span className="text-muted-foreground">
									Don't have an account?{" "}
								</span>
								<Link
									href="/auth/signup"
									className="font-medium text-primary hover:underline"
								>
									Sign up
								</Link>
							</div>
						</div>
					</form>
				</Form>
			</Card>
		</>
	);
}
