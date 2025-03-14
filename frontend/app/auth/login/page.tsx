"use client";

import { LoginForm } from "@/components/auth/login/LoginForm";

export default function LoginPage() {
	return (
		<div className="container flex min-h-screen items-center justify-center py-8">
			<div className="w-full max-w-[400px]">
				<div className="mb-8 space-y-2 text-center">
					<h1 className="text-3xl font-bold tracking-tight">
						Welcome back
					</h1>
					<p className="text-muted-foreground">
						Enter your credentials to access your account
					</p>
				</div>
				<LoginForm />
			</div>
		</div>
	);
}
