"use client";

import CustomPagination from "@/components/CustomPagination";
import EmptyData from "@/components/EmptyData";
import { JobFilters } from "@/components/student/jobs/JobFilters";
import { JobsHeader } from "@/components/student/jobs/JobsHeader";
import { JobsList } from "@/components/student/jobs/JobsList";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllJobs, useURLFilters } from "@/hooks";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function JobsPage() {
  const searchParams = useSearchParams();
  // const router = useRouter();
  // const pathname = usePathname();

  // Get page and filters from URL
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemPerPage = Number(searchParams.get("limit")) || 10;

  // State for filters
  // const [searchQuery, setSearchQuery] = useState<any>(
  // 	searchParams.get("search") || ""
  // );
  // const [jobType, setJobType] = useState(
  // 	searchParams.get("jobType") || "all"
  // );

  // // Update URL when filters change
  // useEffect(() => {
  // 	const params = new URLSearchParams(searchParams);

  // 	if (searchQuery) {
  // 		params.set("search", searchQuery);
  // 	} else {
  // 		params.delete("search");
  // 	}

  // 	if (jobType && jobType !== "all") {
  // 		params.set("jobType", jobType);
  // 	} else {
  // 		params.delete("jobType");
  // 	}

  // 	// Reset to page 1 when filters change
  // 	params.set("page", "1");

  // 	// Update URL without full page refresh
  // 	router.replace(`${pathname}?${params.toString()}`);
  // }, [searchQuery, jobType, pathname, router]);
  const { filters, setFilters } = useURLFilters({
    search: "",
    jobType: "all",
  });

  // Fetch jobs with filters
  const { data, isLoading, isError } = useGetAllJobs({
    page: currentPage,
    limit: itemPerPage,
    skip: (currentPage - 1) * itemPerPage,
    search: filters.jobType !== "all" ? filters.jobType : filters.search || "",
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex container max-w-7xl mx-auto min-h-screen flex-col gap-8 pb-8 pt-6 px-4">
        <JobsHeader
          setSearchQuery={(val) =>
            setFilters((prev) => ({ ...prev, search: val }))
          }
          setJobType={(val) =>
            setFilters((prev) => ({ ...prev, jobType: val }))
          }
          searchQuery={filters.search}
          jobType={filters.jobType}
        />
        <div className="container grid gap-8 lg:grid-cols-4">
          <JobFilters className="hidden lg:block" />
          {isError && <div>Something went wrong</div>}
          {isLoading ? (
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-32 w-full" />
                  ))}
              </div>
            </div>
          ) : data?.data && data.data.length > 0 ? (
            <div className="lg:col-span-3">
              <JobsList jobs={data?.data} />
              <div className="mt-4">
                <CustomPagination totalPages={data?.pagination?.totalPages} />
              </div>
            </div>
          ) : (
            !isError && <EmptyData />
          )}
        </div>
      </div>
    </Suspense>
  );
}
