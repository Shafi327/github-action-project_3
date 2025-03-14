"use client";

import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Building2, Calendar } from "lucide-react";

const applications = [
	{
		company: "Tech Solutions Inc.",
		position: "Frontend Developer",
		date: "2024-03-15",
		status: "Under Review",
		statusColor: "yellow",
	},
	{
		company: "Data Analytics Co.",
		position: "Data Scientist",
		date: "2024-03-14",
		status: "Interviewed",
		statusColor: "blue",
	},
	{
		company: "Design Studio",
		position: "UI/UX Designer",
		date: "2024-03-12",
		status: "Rejected",
		statusColor: "red",
	},
];

export function RecentApplications() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Recent Applications</CardTitle>
				<CardDescription>
					Track your recent job applications and their status
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{applications.map((application, index) => (
						<div
							key={index}
							className="flex flex-col gap-2 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
						>
							<div className="space-y-1">
								<div className="flex items-center gap-2">
									<Building2 className="h-4 w-4 text-muted-foreground" />
									<span className="font-medium">
										{application.company}
									</span>
								</div>
								<p className="text-sm text-muted-foreground">
									{application.position}
								</p>
							</div>
							<div className="flex items-center gap-4">
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Calendar className="h-4 w-4" />
									{application.date}
								</div>
								<Badge
									variant="secondary"
									className={`bg-${application.statusColor}-500/10 text-${application.statusColor}-500`}
								>
									{application.status}
								</Badge>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
