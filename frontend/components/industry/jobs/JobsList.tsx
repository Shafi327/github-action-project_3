"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";

// const jobs = [
// 	{
// 		id: 1,
// 		title: "Senior Frontend Developer",
// 		department: "Engineering",
// 		type: "Full-time",
// 		location: "Remote",
// 		applications: 45,
// 		posted: "2024-03-01",
// 		status: "Active",
// 		deadline: "2024-04-01",
// 	},
// 	{
// 		id: 2,
// 		title: "UX/UI Designer",
// 		department: "Design",
// 		type: "Contract",
// 		location: "San Francisco, CA",
// 		applications: 28,
// 		posted: "2024-03-05",
// 		status: "Active",
// 		deadline: "2024-03-25",
// 	},
// 	{
// 		id: 3,
// 		title: "DevOps Engineer",
// 		department: "Infrastructure",
// 		type: "Full-time",
// 		location: "New York, NY",
// 		applications: 32,
// 		posted: "2024-03-10",
// 		status: "Active",
// 		deadline: "2024-04-10",
// 	},
// ];

export function JobsList({ jobs }: any) {
	return (
		<div className="space-y-4">
			{jobs.isError && <div>Error loading jobs</div>}

			{jobs.isLoading ? (
				<Card>
					<div className="flex flex-col gap-y-2 p-8">
						<Skeleton className="w-32 h-2" />
						<div className="flex">
							<Skeleton className="w-32 h-4 rounded-full" />
							<Skeleton className="w-32 h-4 rounded-full" />
						</div>
					</div>
				</Card>
			) : jobs?.data?.data && jobs?.data?.data?.length > 0 ? (
				jobs?.data?.data?.map((job: any) => (
					<Card key={job.id} className="p-6">
						<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
							<div className="space-y-3">
								<div className="space-y-1">
									<h3 className="font-semibold capitalize">
										{job?.title ?? "NA"}
									</h3>
									<div className="flex flex-wrap items-center gap-2">
										<Badge variant="secondary">
											{job?.department}
										</Badge>
										<Badge variant="outline">
											{job?.jobType}
										</Badge>
										<div className="flex items-center gap-1 text-sm text-muted-foreground">
											<MapPin className="h-4 w-4" />
											<span>{job?.location ?? "NA"}</span>
										</div>
									</div>
								</div>
								<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
									<div className="flex items-center gap-1">
										<Calendar className="h-4 w-4" />
										<span>
											Posted:{" "}
											{job?.createdAt.slice(1, 10)}
										</span>
									</div>
									<div className="flex items-center gap-1">
										<Users className="h-4 w-4" />
										<span>
											{/* {job?.applications ?? 0} applications */}
										</span>
									</div>
									<Badge
										variant="secondary"
										className="bg-green-500/10 text-green-500"
									>
										{job?.status ?? "NA"}
									</Badge>
								</div>
							</div>
							<div className="flex flex-col gap-2 sm:text-right">
								<Button asChild>
									<Link href={`/industry/jobs/${job?.id}`}>
										View Details
									</Link>
								</Button>
								<Button variant="outline">
									<Link
										href={`/industry/jobs/edit/${job?.id}`}
									>
										Edit Posting
									</Link>
								</Button>
							</div>
						</div>
					</Card>
				))
			) : (
				!jobs?.isError && <>No data</>
			)}
		</div>
	);
}
