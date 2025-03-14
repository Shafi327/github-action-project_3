"use client";

import React, { Suspense } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  limit?: number;
}

const CustomPagination: React.FC<PaginationProps> = ({
  totalPages,
  limit = 10,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get current page from query params, default to 1 if not set
  const currentPage = Number(searchParams.get("page")) || 1;

  // Function to update URL query parameters dynamically
  const updateQueryParams = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    params.set("limit", limit.toString());

    // Update URL without full reload
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // Function to generate pagination pages dynamically
  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Pagination>
        <PaginationContent>
          {/* Previous Button */}
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() =>
                currentPage > 1 && updateQueryParams(currentPage - 1)
              }
              aria-disabled={currentPage === 1}
              className={
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }
            />
          </PaginationItem>

          {/* Show Ellipsis before first visible page */}
          {currentPage > 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {/* Render Page Numbers */}
          {getPages()
            .slice(
              Math.max(0, currentPage - 2),
              Math.min(totalPages, currentPage + 1)
            )
            .map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={() => updateQueryParams(page)}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

          {/* Show Ellipsis after last visible page */}
          {currentPage < totalPages - 1 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {/* Next Button */}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() =>
                currentPage < totalPages && updateQueryParams(currentPage + 1)
              }
              aria-disabled={currentPage === totalPages}
              className={
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Suspense>
  );
};

export default CustomPagination;
