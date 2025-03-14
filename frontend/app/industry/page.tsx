"use client";

import { JobPostings } from "@/components/industry/dashboard/JobPostings";
import { StatsCards } from "@/components/industry/dashboard/StatsCards";
import { RecentApplications } from "@/components/student/dashboard/RecentApplication";

export default function IndustryDashboard() {
	return (
		<div className="flex min-h-screen flex-col gap-8 pb-8 pt-6 px-4">
			<div className="container">
				<h1 className="mb-4 text-2xl font-bold tracking-tight">
					Company Dashboard
				</h1>
				<div className="grid gap-8 ">
					<StatsCards />
					<div className="grid gap-8 lg:grid-cols-7">
						<div className="lg:col-span-4">
							<RecentApplications />
						</div>
						<div className="lg:col-span-3">
							<JobPostings />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
