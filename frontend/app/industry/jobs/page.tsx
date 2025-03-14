"use client";

import { JobFilters } from "@/components/industry/jobs/JobFilters";
import { JobsHeader } from "@/components/industry/jobs/JobsHeader";
import { JobsList } from "@/components/industry/jobs/JobsList";
import { useGetJobsList } from "@/hooks/industry";
import { useState } from "react";

export default function JobsPage() {
	const [page, setPage] = useState<number>(1);
	const limit = 10;
	const jobsList = useGetJobsList({
		page,
		limit,
	});
	console.log("jobsList", jobsList?.data);
	return (
		<div className="flex min-h-screen flex-col gap-8 pb-8 pt-6">
			<JobsHeader />
			<div className="container grid gap-8 lg:grid-cols-4">
				<JobFilters className="hidden lg:block" />
				<div className="lg:col-span-3">
					<JobsList jobs={jobsList} />
				</div>
			</div>
		</div>
	);
}
