"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookMarked, Eye, Send, ThumbsUp } from "lucide-react";

const stats = [
	{
		title: "Profile Views",
		value: "156",
		description: "Last 30 days",
		icon: Eye,
		trend: "+12%",
	},
	{
		title: "Applications",
		value: "24",
		description: "Submitted",
		icon: Send,
		trend: "+4%",
	},
	{
		title: "Saved Jobs",
		value: "38",
		description: "In your list",
		icon: BookMarked,
		trend: null,
	},
	{
		title: "Shortlisted",
		value: "8",
		description: "By employers",
		icon: ThumbsUp,
		trend: "+2",
	},
];

export function DashboardStats() {
	return (
		<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{stats.map((stat, index) => {
				const Icon = stat.icon;
				return (
					<Card key={index}>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								{stat.title}
							</CardTitle>
							<Icon className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">
								{stat.value}
							</div>
							<div className="flex items-center text-xs text-muted-foreground">
								<span>{stat.description}</span>
								{stat.trend && (
									<span className="ml-2 text-green-500">
										{stat.trend}
									</span>
								)}
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
