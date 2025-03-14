"use client";

import { ApplicationsFilters } from "@/components/industry/applications/ApplicationsFilters";
import { ApplicationsHeader } from "@/components/industry/applications/ApplicationsHeader";
import { ApplicationsTable } from "@/components/industry/applications/ApplicationsTable";

export default function ApplicationsPage() {
	return (
		<div className="flex min-h-screen flex-col gap-8 pb-8 pt-6">
			<ApplicationsHeader />
			<div className="container grid gap-8 lg:grid-cols-4">
				<ApplicationsFilters className="hidden lg:block" />
				<div className="lg:col-span-3">
					<ApplicationsTable />
				</div>
			</div>
		</div>
	);
}
