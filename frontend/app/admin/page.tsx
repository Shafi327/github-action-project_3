"use client";

import { Overview } from "@/components/admin/dashboard/OverView";
import { RecentActivity } from "@/components/admin/dashboard/RecentActivity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Users, Briefcase, FileText, Building2 } from "lucide-react";

export default function AdminDashboard() {
	const stats = [
		{
			title: "Total Students",
			value: "2,834",
			icon: Users,
			trend: "+12%",
		},
		{
			title: "Active Jobs",
			value: "486",
			icon: Briefcase,
			trend: "+8%",
		},
		{
			title: "Applications",
			value: "1,429",
			icon: FileText,
			trend: "+24%",
		},
		{
			title: "Companies",
			value: "156",
			icon: Building2,
			trend: "+6%",
		},
	];

	return (
		<div className="space-y-8">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
				<p className="text-muted-foreground">
					Welcome back, Admin! Here's what's happening today.
				</p>
			</div>

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
									<span className="text-green-500">
										{stat.trend}
									</span>{" "}
									from last month
								</p>
							</CardContent>
						</Card>
					);
				})}
			</div>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
				<Overview className="col-span-4" />
				<RecentActivity className="col-span-3" />
			</div>
		</div>
	);
}
