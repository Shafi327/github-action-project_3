"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Timer } from "lucide-react";

const featuredJobs = [
	{
		title: "Software Engineer Intern",
		company: "Tech Corp",
		location: "San Francisco, CA",
		type: "Full-time",
		posted: "2 days ago",
	},
	{
		title: "Data Analyst",
		company: "Analytics Pro",
		location: "New York, NY",
		type: "Part-time",
		posted: "1 day ago",
	},
	{
		title: "UX Designer",
		company: "Design Studio",
		location: "Remote",
		type: "Contract",
		posted: "3 days ago",
	},
];

export function FeaturedJobs() {
	return (
		<section className="container py-12 md:py-16 lg:py-20">
			<div className="flex flex-col gap-6">
				<div className="space-y-2">
					<h2 className="text-2xl font-bold tracking-tight md:text-3xl">
						Featured Opportunities
					</h2>
					<p className="text-muted-foreground">
						Discover the latest job openings from top companies
					</p>
				</div>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{featuredJobs.map((job, index) => (
						<Card
							key={index}
							className="group cursor-pointer transition-colors hover:border-primary"
						>
							<CardHeader>
								<CardTitle className="line-clamp-1 text-lg">
									{job.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div className="space-y-2">
										<div className="flex items-center gap-2">
											<Building2 className="h-4 w-4 text-muted-foreground" />
											<span className="text-sm">
												{job.company}
											</span>
										</div>
										<div className="flex items-center gap-2">
											<MapPin className="h-4 w-4 text-muted-foreground" />
											<span className="text-sm">
												{job.location}
											</span>
										</div>
										<div className="flex items-center gap-2">
											<Timer className="h-4 w-4 text-muted-foreground" />
											<span className="text-sm">
												{job.posted}
											</span>
										</div>
									</div>
									<Badge variant="secondary">
										{job.type}
									</Badge>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
