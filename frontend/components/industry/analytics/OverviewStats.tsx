"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Clock, Target } from "lucide-react";

const stats = [
	{
		title: "Application Rate",
		value: "+12.5%",
		description: "vs last month",
		icon: TrendingUp,
	},
	{
		title: "Average Time to Hire",
		value: "18 days",
		description: "-3 days from avg",
		icon: Clock,
	},
	{
		title: "Qualified Candidates",
		value: "68%",
		description: "of total applications",
		icon: Target,
	},
	{
		title: "Candidate Sources",
		value: "5 platforms",
		description: "active channels",
		icon: Users,
	},
];

export function OverviewStats() {
	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
							<p className="text-xs text-muted-foreground">
								{stat.description}
							</p>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
