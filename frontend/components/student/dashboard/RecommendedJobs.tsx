"use client";

import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Building2, MapPin } from "lucide-react";

const recommendedJobs = [
	{
		title: "Senior Frontend Developer",
		company: "Tech Innovators",
		location: "Remote",
		match: "95%",
		tags: ["React", "TypeScript", "Next.js"],
	},
	{
		title: "Full Stack Engineer",
		company: "Software Solutions",
		location: "New York, NY",
		match: "88%",
		tags: ["Node.js", "React", "PostgreSQL"],
	},
	{
		title: "UI/UX Designer",
		company: "Creative Agency",
		location: "San Francisco, CA",
		match: "82%",
		tags: ["Figma", "Adobe XD", "UI Design"],
	},
];

export function RecommendedJobs() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Recommended Jobs</CardTitle>
				<CardDescription>
					Personalized job recommendations based on your profile
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{recommendedJobs.map((job, index) => (
						<div
							key={index}
							className="flex flex-col gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50 sm:flex-row sm:items-center sm:justify-between"
						>
							<div className="space-y-1">
								<div className="flex items-center gap-2">
									<span className="font-medium">
										{job.title}
									</span>
									<Badge
										variant="secondary"
										className="bg-green-500/10 text-green-500"
									>
										{job.match} Match
									</Badge>
								</div>
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Building2 className="h-4 w-4" />
									{job.company}
									<MapPin className="ml-2 h-4 w-4" />
									{job.location}
								</div>
							</div>
							<div className="flex flex-wrap gap-2">
								{job.tags.map((tag, tagIndex) => (
									<Badge key={tagIndex} variant="secondary">
										{tag}
									</Badge>
								))}
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
