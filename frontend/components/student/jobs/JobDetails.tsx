"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Building2, Clock } from "lucide-react";
import Link from "next/link";

export function JobDetails({ job }: any) {
	return (
		<div className="space-y-6">
			<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
				<div className="space-y-1">
					<h1 className="text-2xl font-bold tracking-tight capitalize">
						{job?.jobType}
					</h1>
					<div className="flex flex-wrap items-center gap-2">
						<Badge variant="secondary">{job?.department}</Badge>
						<Badge variant="outline">{job?.jobType}</Badge>
						<Badge
							variant="secondary"
							className="bg-green-500/10 text-green-500"
						>
							Active
						</Badge>
					</div>
				</div>
				{/* <div className="flex gap-2">
					<Button variant="outline">
						<Link href={`/industry/edit/${job?.id}`}>Edit</Link>
					</Button>
					<Button variant="outline" className="text-destructive">
						Close Position
					</Button>
				</div> */}
			</div>

			<Card className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
				<div className="flex items-center gap-2">
					<Building2 className="h-4 w-4 text-muted-foreground" />
					<div className="space-y-1">
						<p className="text-sm font-medium leading-none">
							Department
						</p>
						<p className="text-sm text-muted-foreground">
							{job?.department}
						</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<MapPin className="h-4 w-4 text-muted-foreground" />
					<div className="space-y-1">
						<p className="text-sm font-medium leading-none">
							Location
						</p>
						<p className="text-sm text-muted-foreground">
							{job?.location ?? "location not available"}
						</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Users className="h-4 w-4 text-muted-foreground" />
					<div className="space-y-1">
						<p className="text-sm font-medium leading-none">
							Applications
						</p>
						<p className="text-sm text-muted-foreground">
							{job?.applicationCount ?? 0} total
						</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Clock className="h-4 w-4 text-muted-foreground" />
					<div className="space-y-1">
						<p className="text-sm font-medium leading-none">
							Time Active
						</p>
						<p className="text-sm text-muted-foreground">30 days</p>
					</div>
				</div>
			</Card>

			<Card className="p-6">
				<div className="prose max-w-none dark:prose-invert">
					<h3 className="text-lg font-semibold">Job Description</h3>
					<p className="whitespace-pre-line">
						{job?.jobDescription ?? "NA"} <br />
						{job?.requirements}
					</p>
					<h3 className="font-semibold mt-5">Key Responsibilities</h3>
					<p className="whitespace-pre-line">
						{job?.keyResponsibilities ?? "NA"}
					</p>
					<h3 className="font-semibold mt-5">Requirements</h3>
					<p className="whitespace-pre-line">{job?.requirements}</p>
				</div>
			</Card>
		</div>
	);
}
