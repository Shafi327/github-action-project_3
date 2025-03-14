"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileText, Plus } from "lucide-react";
import Link from "next/link";

export function DashboardHeader() {
	return (
		<div className="container">
			<Card className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
				<div className="space-y-1">
					<h1 className="text-2xl font-bold tracking-tight">
						Welcome back, John!
					</h1>
					<p className="text-sm text-muted-foreground">
						Your profile is 80% complete. Add more details to
						increase visibility to employers.
					</p>
					<Progress value={80} className="h-2 w-[60%]" />
				</div>
				<div className="flex flex-col gap-2 sm:flex-row sm:items-center">
					<Link href={"/student/profile"}>
						<Button variant="outline" size="sm">
							<FileText className="mr-2 h-4 w-4" />
							Update CV
						</Button>
					</Link>
					<Link href="/student/jobs">
						<Button size="sm">
							<Plus className="mr-2 h-4 w-4" />
							Apply for Jobs
						</Button>
					</Link>
				</div>
			</Card>
		</div>
	);
}
