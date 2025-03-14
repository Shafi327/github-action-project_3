"use client";

import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface LoginErrorProps {
	message: string;
}

export function LoginError({ message }: LoginErrorProps) {
	return (
		<Alert variant="destructive">
			<AlertCircle className="h-4 w-4" />
			<AlertDescription>{message}</AlertDescription>
		</Alert>
	);
}
