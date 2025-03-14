"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";

const jobs = [
	{
		title: "Senior Frontend Developer",
		type: "Full-time",
		location: "Remote",
		applications: 45,
		posted: "2024-03-01",
		status: "Active",
		deadline: "2024-04-01",
	},
	{
		title: "UX/UI Designer",
		type: "Contract",
		location: "San Francisco, CA",
		applications: 28,
		posted: "2024-03-05",
		status: "Active",
		deadline: "2024-03-25",
	},
	{
		title: "DevOps Engineer",
		type: "Full-time",
		location: "New York, NY",
		applications: 32,
		posted: "2024-03-10",
		status: "Active",
		deadline: "2024-04-10",
	},
];

export function JobPostings() {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between">
				<div>
					<CardTitle>Active Job Postings</CardTitle>
					<CardDescription>
						Monitor and manage your current job listings
					</CardDescription>
				</div>
				<Button>Post New Job</Button>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{jobs.map((job, index) => (
						<div
							key={index}
							className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
						>
							<div className="space-y-2">
								<h3 className="font-medium">{job.title}</h3>
								<div className="flex flex-wrap gap-2">
									<Badge variant="secondary">
										{job.type}
									</Badge>
									<div className="flex items-center gap-1 text-sm text-muted-foreground">
										<MapPin className="h-4 w-4" />
										<span>{job.location}</span>
									</div>
									<div className="flex items-center gap-1 text-sm text-muted-foreground">
										<Users className="h-4 w-4" />
										<span>
											{job.applications} applications
										</span>
									</div>
								</div>
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Calendar className="h-4 w-4" />
									<span>Posted: {job.posted}</span>
									<span>•</span>
									<span>Deadline: {job.deadline}</span>
								</div>
							</div>
							<div className="flex gap-2">
								<Button variant="outline" size="sm">
									Edit
								</Button>
								<Button variant="outline" size="sm">
									View Applications
								</Button>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
