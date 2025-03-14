"use client";

import CustomPagination from "@/components/CustomPagination";
import EmptyData from "@/components/EmptyData";
import { PageHeader } from "@/components/PageHeader";
import { ApplicationFilters } from "@/components/student/applications/ApplicationFilter";
import { ApplicationList } from "@/components/student/applications/ApplicationList";
import { ApplicationStats } from "@/components/student/applications/ApplicationStats";
import { NewApplicationButton } from "@/components/student/applications/NewApplicationButton";
import { Skeleton } from "@/components/ui/skeleton";
import { useStudentAppliedJobs, useURLFilters } from "@/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function ApplicationsPage() {
  const searchParams = useSearchParams();

  // Get page and filters from URL
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemPerPage = Number(searchParams.get("limit")) || 10;

  const { filters, setFilters } = useURLFilters({
    search: "",
    status: "all",
  });

  const { data, isLoading, isError, isSuccess } = useStudentAppliedJobs({
    page: currentPage,
    limit: itemPerPage,
    search: filters.status !== "all" ? filters.status : filters.search || "",
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto max-w-7xl px-4 py-8 md:px-10">
        <div className="flex justify-between items-start mb-8">
          <PageHeader
            title="Program Applications"
            description="Track and manage your university program applications"
          />
          <NewApplicationButton />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <ApplicationStats />
        </div>
        <div className="space-y-8">
          <ApplicationFilters
            setSearchQuery={(val: any) =>
              setFilters((prev) => ({ ...prev, search: val }))
            }
            setStatus={(val: any) =>
              setFilters((prev) => ({ ...prev, status: val }))
            }
            searchQuery={filters.search}
            status={filters.status}
          />
          {isError && <div>Something went wrong</div>}
          {isLoading ? (
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-16 w-full" />
                  ))}
              </div>
            </div>
          ) : data?.data && data?.data?.length > 0 ? (
            <>
              <ApplicationList applications={data?.data} />
              <div className="mt-4">
                <CustomPagination totalPages={data?.pagination?.totalPages} />
              </div>
            </>
          ) : (
            !isError && <EmptyData />
          )}
        </div>
      </div>
    </Suspense>
  );
}