"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { debounce } from "lodash";
import { Search } from "lucide-react";
import { useCallback } from "react";

export function ApplicationFilters({
	setSearchQuery,
	setStatus,
	searchQuery,
	status,
}: any) {
	// Handle status selection
	const handleStatus = (value: string) => {
		setStatus(value);
	};

	// Handle search input change
	const handleSearchChange = useCallback(
		debounce((event: React.ChangeEvent<HTMLInputElement>) => {
			setSearchQuery(event?.target?.value);
		}, 500),
		[setSearchQuery]
	);
	return (
		<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
			<div className="flex flex-1 items-center space-x-2">
				<div className="relative flex-1 md:max-w-sm">
					<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
					<Input
						placeholder="Search job title..."
						className="pl-8"
						defaultValue={searchQuery}
						onChange={handleSearchChange}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:space-x-4">
				<Select
					onValueChange={handleStatus}
					value={status || "all"}
					defaultValue="all"
				>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Status" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All Status</SelectItem>
						<SelectItem value="pending">In Progress</SelectItem>
						<SelectItem value="approved">Approved</SelectItem>
						<SelectItem value="rejected">Rejected</SelectItem>
						<SelectItem value="interview">Interviewed</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
}
