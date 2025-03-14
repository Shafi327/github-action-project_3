"use client";

import { DashboardHeader } from "@/components/student/dashboard/DashboardHeader";
import { DashboardStats } from "@/components/student/dashboard/DashboardStats";
import { RecentApplications } from "@/components/student/dashboard/RecentApplication";
import { RecommendedJobs } from "@/components/student/dashboard/RecommendedJobs";
import { UpcomingEvents } from "@/components/student/dashboard/UpComingEvents";
import { useProfile } from "@/lib/api/queries";

export default function DashboardPage() {
	// const data = useProfile();
	// console.log("data:::::::", data?.data);
	return (
		<div className="flex min-h-screen flex-col gap-8 pb-8 pt-6 px-5 max-w-7xl mx-auto">
			<DashboardHeader />
			<div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-7">
				<div className="col-span-full lg:col-span-5">
					<div className="grid gap-8 ">
						<DashboardStats />
						<RecentApplications />
						<RecommendedJobs />
					</div>
				</div>
				<div className="lg:col-span-2">
					<UpcomingEvents />
				</div>
			</div>
		</div>
	);
}
