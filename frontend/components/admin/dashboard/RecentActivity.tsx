"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Building2, User } from "lucide-react";

interface RecentActivityProps {
	className?: string;
}

const activities = [
	{
		type: "application",
		title: "New Application",
		description: "Sarah Chen applied for Senior Frontend Developer",
		time: "5 minutes ago",
		icon: FileText,
	},
	{
		type: "company",
		title: "New Company",
		description: "Tech Solutions Inc. joined the platform",
		time: "1 hour ago",
		icon: Building2,
	},
	{
		type: "student",
		title: "New Student",
		description: "Michael Brown created an account",
		time: "2 hours ago",
		icon: User,
	},
	{
		type: "application",
		title: "Application Update",
		description: "Emma Wilson's application status changed to Interview",
		time: "3 hours ago",
		icon: FileText,
	},
];

export function RecentActivity({ className }: RecentActivityProps) {
	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle>Recent Activity</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-8">
					{activities.map((activity, index) => {
						const Icon = activity.icon;
						return (
							<div key={index} className="flex items-start gap-4">
								<Avatar className="h-9 w-9">
									<Icon className="h-4 w-4" />
								</Avatar>
								<div className="space-y-1">
									<p className="text-sm font-medium">
										{activity.title}
									</p>
									<p className="text-sm text-muted-foreground">
										{activity.description}
									</p>
									<p className="text-xs text-muted-foreground">
										{activity.time}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</CardContent>
		</Card>
	);
}
