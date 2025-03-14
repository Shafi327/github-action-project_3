"use client";

import { ApplicationsChart } from "@/components/industry/analytics/ApplicationsChart";
import { HiringFunnel } from "@/components/industry/analytics/HiringFunnel";
import { OverviewStats } from "@/components/industry/analytics/OverviewStats";
import { SourceDistribution } from "@/components/industry/analytics/SourceDistribution";

export default function AnalyticsPage() {
	return (
		<div className="flex min-h-screen flex-col gap-8 pb-8 pt-6 px-4">
			<div className="container">
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold tracking-tight">
						Analytics
					</h1>
					<p className="text-muted-foreground">
						Track your recruitment metrics and hiring performance
					</p>
				</div>
				<div className="mt-8 grid gap-8">
					<OverviewStats />
					<div className="grid gap-8 md:grid-cols-4">
						<ApplicationsChart />
						<SourceDistribution />
						<HiringFunnel />
					</div>
				</div>
			</div>
		</div>
	);
}
