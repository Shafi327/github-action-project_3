"use client";

import { CandidateActions } from "@/components/industry/candidates/CandidateActions";
import { CandidateHistory } from "@/components/industry/candidates/CandidateHistory";
import { CandidateProfile } from "@/components/industry/candidates/CandidateProfile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetCandidateById } from "@/hooks/industry";
import { useParams } from "next/navigation";

export default function CandidateDetailsPage() {
	const params = useParams();
	const id = params.id as string;
	const { data, error, isLoading } = useGetCandidateById(id);

	console.log("Candidate Detail page", data);

	return (
		<div className="container py-8">
			{isLoading ? <>Loading....</> : <CandidateProfile />}
			<div className="mt-8">
				<Tabs defaultValue="history">
					<TabsList>
						<TabsTrigger value="history">
							Application History
						</TabsTrigger>
						<TabsTrigger value="notes">Interview Notes</TabsTrigger>
						<TabsTrigger value="documents">Documents</TabsTrigger>
					</TabsList>
					<TabsContent value="history" className="mt-6">
						<CandidateHistory />
					</TabsContent>
					<TabsContent value="notes" className="mt-6">
						<CandidateActions />
					</TabsContent>
					<TabsContent value="documents" className="mt-6">
						<CandidateActions type="documents" />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
