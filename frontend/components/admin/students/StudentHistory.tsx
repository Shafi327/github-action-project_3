"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Building2 } from "lucide-react";

const history = [
	{
		position: "Frontend Developer Intern",
		company: "Tech Solutions Inc.",
		date: "2024-03-15",
		status: "Applied",
		statusColor: "blue",
	},
	{
		position: "Software Engineer",
		company: "Digital Innovations",
		date: "2024-02-28",
		status: "Interviewed",
		statusColor: "yellow",
	},
	{
		position: "Web Developer",
		company: "Creative Agency",
		date: "2024-02-15",
		status: "Rejected",
		statusColor: "red",
	},
];

export function StudentHistory() {
	return (
		<div className="space-y-4">
			{history.map((item, index) => (
				<Card key={index} className="p-4">
					<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div className="space-y-1">
							<div className="flex items-center gap-2">
								<Building2 className="h-4 w-4 text-muted-foreground" />
								<span className="font-medium">
									{item.company}
								</span>
							</div>
							<p className="text-sm text-muted-foreground">
								{item.position}
							</p>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<Calendar className="h-4 w-4" />
								{item.date}
							</div>
							<Badge
								variant="secondary"
								className={`bg-${item.statusColor}-500/10 text-${item.statusColor}-500`}
							>
								{item.status}
							</Badge>
						</div>
					</div>
				</Card>
			))}
		</div>
	);
}
