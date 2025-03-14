"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck2, FileX2, Timer, Send } from "lucide-react";

const stats = [
	{
		title: "Total Applications",
		value: "12",
		icon: Send,
		description: "4 in draft",
		trend: "+2 this month",
	},
	{
		title: "In Progress",
		value: "4",
		icon: Timer,
		description: "Under review",
		trend: "2 due next week",
	},
	{
		title: "Accepted",
		value: "6",
		icon: FileCheck2,
		description: "75% success rate",
		trend: "+1 this week",
	},
	{
		title: "Rejected",
		value: "2",
		icon: FileX2,
		description: "25% rejection rate",
		trend: "None this month",
	},
];

export function ApplicationStats() {
	return (
		<>
			{stats.map((stat) => (
				<Card key={stat.title}>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							{stat.title}
						</CardTitle>
						<stat.icon className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{stat.value}</div>
						<p className="text-xs text-muted-foreground mt-1">
							{stat.description}
						</p>
						<p className="text-xs text-muted-foreground mt-1">
							{stat.trend}
						</p>
					</CardContent>
				</Card>
			))}
		</>
	);
}
