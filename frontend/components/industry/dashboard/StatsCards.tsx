"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, FileCheck, Eye } from "lucide-react";

const stats = [
	{
		title: "Total Applications",
		value: "2,345",
		description: "Active applications",
		icon: FileCheck,
		trend: "+12%",
	},
	{
		title: "Active Jobs",
		value: "48",
		description: "Currently posted",
		icon: Briefcase,
		trend: "+4",
	},
	{
		title: "Profile Views",
		value: "1,876",
		description: "Last 30 days",
		icon: Eye,
		trend: "+28%",
	},
	{
		title: "Talent Pool",
		value: "856",
		description: "Shortlisted candidates",
		icon: Users,
		trend: "+15",
	},
];

export function StatsCards() {
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
