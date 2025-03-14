"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export function NewApplicationButton() {
	return (
		<Button className="flex items-center gap-2">
			<PlusCircle className="h-4 w-4" />
			New Application
		</Button>
	);
}
