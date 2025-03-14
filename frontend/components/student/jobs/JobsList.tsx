"use client";

import CustomPagination from "@/components/CustomPagination";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useApplyToJob } from "@/hooks";
import { toast } from "@/hooks/use-toast";
import { Bookmark, Building2, MapPin, Timer } from "lucide-react";
import Link from "next/link";

// Utility function to format the date
const formatDate = (isoString: string) => {
	const date = new Date(isoString);
	return date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
};

export function JobsList({ jobs }: any) {
	const { mutate, isPending } = useApplyToJob();

	const onClickApply = (id: string) => {
		mutate(id, {
			onSuccess: () => {
				toast({
					title: "Application Submitted",
					description:
						"Your application has been submitted successfully.",
					variant: "success",
				});
			},
			onError: (error) => {
				toast({
					title: "Error",
					description: error.message ?? "An error occurred",
					variant: "destructive",
				});
			},
		});
	};
	return (
		<div className="space-y-4 h-screen overflow-auto remove-scrollbar">
			{jobs?.map((job: any) => (
				<Card key={job.id} className="p-6">
					<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
						<div className="space-y-3">
							<div className="space-y-1">
								<div className="flex items-center justify-between gap-2">
									<h3 className="font-semibold">
										{job?.title}
									</h3>
									{/* <Button
										variant="ghost"
										size="icon"
										className="h-8 w-8"
									>
										<Bookmark className="h-4 w-4" />
									</Button> */}
								</div>
								<div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
									<div className="flex items-center gap-1">
										<Building2 className="h-4 w-4" />
										<span>{job?.department}</span>{" "}
										{/* Company Name */}
									</div>
									<div className="flex items-center gap-1">
										<MapPin className="h-4 w-4" />
										<span>Not Provided</span>{" "}
										{/* Location (Missing in data) */}
									</div>
									<div className="flex items-center gap-1">
										<Timer className="h-4 w-4" />
										<span>
											{formatDate(job.createdAt)}
										</span>{" "}
										{/* Posted Date */}
									</div>
								</div>
							</div>
							<div className="flex flex-wrap gap-2">
								<Badge variant="secondary">{job.jobType}</Badge>{" "}
								{/* Job Type */}
								<Badge variant="secondary">
									{job.salary}
								</Badge>{" "}
								{/* Salary */}
							</div>
							<p className="text-sm text-muted-foreground">
								{job.jobDescription}
							</p>
							<div className="flex flex-wrap gap-2">
								{job?.requirements
									?.replace(/"/g, "") // Remove extra quotes
									?.split(",")
									?.map((req: string, index: number) => (
										<Badge key={index} variant="outline">
											{req.trim()}
										</Badge>
									))}
							</div>
						</div>
						<div className="flex flex-col gap-2 sm:text-right">
							{isPending ? (
								<>
									<Skeleton className="w-20 h-5" />
								</>
							) : (
								<>
									{job.applications.length > 0 ? (
										<Button variant={"secondary"} disabled>
											Applied
										</Button>
									) : (
										<Button
											onClick={() =>
												onClickApply(job?.id)
											}
										>
											Apply Now
										</Button>
									)}
								</>
							)}
							<></>
							<Link href={`/student/jobs/${job?.id}`}>
								<Button variant="outline">View Details</Button>
							</Link>
						</div>
					</div>
				</Card>
			))}
		</div>
	);
}
