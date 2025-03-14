"use client";

import { CandidatesFilters } from "@/components/industry/candidates/CandidatesFilters";
import { CandidatesHeader } from "@/components/industry/candidates/CandidatesHeader";
import { CandidatesTable } from "@/components/industry/candidates/CandidatesTable";
import { useGetCandidates } from "@/hooks/industry";
import { useState } from "react";

export default function CandidatesPage() {
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);

	const { data } = useGetCandidates({ page, limit });
	console.log("candidates list page", data);
	return (
		<div className="flex min-h-screen flex-col gap-8 pb-8 pt-6">
			<CandidatesHeader />
			<div className="container grid gap-8 lg:grid-cols-4">
				<CandidatesFilters className="hidden lg:block" />
				<div className="lg:col-span-3">
					<CandidatesTable />
				</div>
			</div>
		</div>
	);
}
