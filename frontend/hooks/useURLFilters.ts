import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useURLFilters<T extends Record<string, any>>(
	initialFilters: T
) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	// Initialize state for filters
	const [filters, setFilters] = useState<T>(() => {
		const newFilters: Record<string, any> = {};
		for (const key in initialFilters) {
			newFilters[key] = searchParams.get(key) || initialFilters[key];
		}
		return newFilters as T;
	});

	// Update URL when filters change
	useEffect(() => {
		const params = new URLSearchParams(searchParams);

		Object.keys(filters).forEach((key) => {
			if (filters[key] && filters[key] !== initialFilters[key]) {
				params.set(key, filters[key]);
			} else {
				params.delete(key);
			}
		});

		// Reset page to 1 when filters change
		params.set("page", "1");

		// Update URL without refreshing the page
		router.replace(`${pathname}?${params.toString()}`);
	}, [filters, pathname, router]);

	return { filters, setFilters };
}
