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
import { Search } from "lucide-react";
import { useCallback, useEffect } from "react";
import { debounce } from "lodash";

export function JobsHeader({
	setSearchQuery,
	setJobType,
	searchQuery,
	jobType,
}: {
	setSearchQuery: (value: string) => void;
	setJobType: (value: string) => void;
	searchQuery: string;
	jobType: string;
}) {
	// Handle job type selection
	const handleJobType = (value: string) => {
		setJobType(value);
	};

	// Handle search input change with debounce
	const handleSearchChange = useCallback(
		debounce((event: React.ChangeEvent<HTMLInputElement>) => {
			setSearchQuery(event.target.value);
		}, 500),
		[setSearchQuery]
	);

	return (
		<div className="border-b bg-background">
			<div className="container py-6">
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<h1 className="text-2xl font-bold tracking-tight">
							Browse Jobs
						</h1>
						<p className="text-muted-foreground">
							Find your next opportunity from our curated list of
							positions
						</p>
					</div>
					<div className="flex flex-col gap-4 sm:flex-row">
						{/* Search Input */}
						<div className="relative flex-1">
							<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input
								placeholder="Search jobs..."
								className="pl-8"
								defaultValue={searchQuery}
								onChange={handleSearchChange}
							/>
						</div>
						{/* Job Type & Sort Filters */}
						<div className="flex gap-4">
							<Select
								onValueChange={handleJobType}
								value={jobType || "all"}
							>
								<SelectTrigger className="w-[160px]">
									<SelectValue placeholder="Job Type" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">
										All Types
									</SelectItem>
									<SelectItem value="full-time">
										Full Time
									</SelectItem>
									<SelectItem value="part-time">
										Part Time
									</SelectItem>
									<SelectItem value="internship">
										Internship
									</SelectItem>
									<SelectItem value="contract">
										Contract
									</SelectItem>
									<SelectItem value="hybrid">
										Hybrid
									</SelectItem>
									<SelectItem value="remote">
										Remote
									</SelectItem>
								</SelectContent>
							</Select>
							<Select defaultValue="recent">
								<SelectTrigger className="w-[160px]">
									<SelectValue placeholder="Sort By" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="recent">
										Most Recent
									</SelectItem>
									<SelectItem value="relevant">
										Most Relevant
									</SelectItem>
									<SelectItem value="salary-high">
										Salary: High to Low
									</SelectItem>
									<SelectItem value="salary-low">
										Salary: Low to High
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
