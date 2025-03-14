"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const applications = [
	{
		candidate: {
			name: "Sarah Chen",
			avatar: "/avatars/sarah.jpg",
			initials: "SC",
		},
		position: "Senior Frontend Developer",
		location: "Remote",
		appliedDate: "2024-03-15",
		status: "Shortlisted",
		statusColor: "green",
		skills: ["React", "TypeScript", "Next.js"],
	},
	{
		candidate: {
			name: "Michael Brown",
			avatar: "/avatars/michael.jpg",
			initials: "MB",
		},
		position: "Full Stack Engineer",
		location: "New York, NY",
		appliedDate: "2024-03-14",
		status: "In Review",
		statusColor: "yellow",
		skills: ["Node.js", "React", "PostgreSQL"],
	},
	{
		candidate: {
			name: "Emma Wilson",
			avatar: "/avatars/emma.jpg",
			initials: "EW",
		},
		position: "UX Designer",
		location: "San Francisco, CA",
		appliedDate: "2024-03-12",
		status: "Interviewed",
		statusColor: "blue",
		skills: ["Figma", "UI Design", "User Research"],
	},
];

export function RecentApplications() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Recent Applications</CardTitle>
				<CardDescription>
					Latest candidates who applied to your job postings
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{applications.map((application, index) => (
						<div
							key={index}
							className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
						>
							<div className="flex items-center gap-4">
								<Avatar>
									<AvatarImage
										src={application.candidate.avatar}
									/>
									<AvatarFallback>
										{application.candidate.initials}
									</AvatarFallback>
								</Avatar>
								<div className="space-y-1">
									<h3 className="font-medium">
										{application.candidate.name}
									</h3>
									<p className="text-sm text-muted-foreground">
										{application.position}
									</p>
									<div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
										<div className="flex items-center gap-1">
											<MapPin className="h-4 w-4" />
											<span>{application.location}</span>
										</div>
										<div className="flex items-center gap-1">
											<Calendar className="h-4 w-4" />
											<span>
												{application.appliedDate}
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-end gap-2">
								<Badge
									variant="secondary"
									className={`bg-${application.statusColor}-500/10 text-${application.statusColor}-500`}
								>
									{application.status}
								</Badge>
								<div className="flex gap-2">
									<Button size="sm" variant="outline">
										View Profile
									</Button>
									<Button size="sm">Review</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
