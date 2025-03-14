"use client";

import { ApplicationsTable } from "@/components/industry/jobs/ApplicationsTable";
import { JobDetails } from "@/components/student/jobs/JobDetails";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetJobById } from "@/hooks/industry";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect } from "react";

export default function JobDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = params?.id as string;
  const { data, isError, isLoading } = useGetJobById(id);
  console.log("details student job", data);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container max-w-7xl mx-auto py-8">
        {isLoading ? <div>Loading...</div> : <JobDetails job={data} />}
        {/* <div className="mt-8">
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
			</div> */}
      </div>
    </Suspense>
  );
}
