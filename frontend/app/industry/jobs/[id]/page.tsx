"use client";

import { ApplicationsTable } from "@/components/industry/jobs/ApplicationsTable";
import { JobDetails } from "@/components/industry/jobs/JobDetails";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetJobById } from "@/hooks/industry";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function JobDetailsPage() {
	const params = useParams();
	const router = useRouter();
	const searchParams = useSearchParams();
	const id = params?.id as string;
	const { data, isError, isLoading } = useGetJobById(id);

	const currentTab = searchParams.get("tab") || "applications";

	// Add default tab on initial load
	useEffect(() => {
		if (!searchParams.get("tab")) {
			router.push(`?${createQueryString("tab", "applications")}`, {
				scroll: false,
			});
		}
	}, []);

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);
			return params.toString();
		},
		[searchParams]
	);

	const handleTabChange = (value: string) => {
		router.push(`?${createQueryString("tab", value)}`, { scroll: false });
	};

	return (
		<div className="container py-8">
			{isLoading ? <div>Loading...</div> : <JobDetails job={data} />}
			<div className="mt-8">
				<Tabs defaultValue={currentTab} onValueChange={handleTabChange}>
					<TabsList>
						<TabsTrigger value="applications">
							Applications
						</TabsTrigger>
						<TabsTrigger value="shortlisted">
							Shortlisted
						</TabsTrigger>
						<TabsTrigger value="interviews">Interviews</TabsTrigger>
					</TabsList>
					<TabsContent value="applications" className="mt-6">
						<ApplicationsTable status="all" />
					</TabsContent>
					<TabsContent value="shortlisted" className="mt-6">
						<ApplicationsTable status="shortlisted" />
					</TabsContent>
					<TabsContent value="interviews" className="mt-6">
						<ApplicationsTable status="interviewing" />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
