"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, User, FileText, MessageSquare } from "lucide-react";

const timeline = [
	{
		date: "2024-03-15",
		type: "Application",
		description: "Application submitted",
		icon: FileText,
		status: "Complete",
		statusColor: "green",
	},
	{
		date: "2024-03-16",
		type: "Screening",
		description: "Resume screened by HR",
		icon: User,
		status: "Passed",
		statusColor: "green",
	},
	{
		date: "2024-03-18",
		type: "Interview",
		description: "Initial interview with HR Manager",
		icon: MessageSquare,
		status: "Scheduled",
		statusColor: "yellow",
	},
];

export function ApplicationTimeline() {
	return (
		<div className="space-y-4">
			{timeline.map((event, index) => {
				const Icon = event.icon;
				return (
					<Card key={index} className="p-4">
						<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
							<div className="space-y-1">
								<div className="flex items-center gap-2">
									<Icon className="h-4 w-4 text-muted-foreground" />
									<span className="font-medium">
										{event.type}
									</span>
								</div>
								<p className="text-sm text-muted-foreground">
									{event.description}
								</p>
							</div>
							<div className="flex items-center gap-4">
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Calendar className="h-4 w-4" />
									{event.date}
								</div>
								<Badge
									variant="secondary"
									className={`bg-${event.statusColor}-500/10 text-${event.statusColor}-500`}
								>
									{event.status}
								</Badge>
							</div>
						</div>
					</Card>
				);
			})}
		</div>
	);
}
