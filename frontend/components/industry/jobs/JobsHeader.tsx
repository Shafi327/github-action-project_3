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
import { Plus, Search } from "lucide-react";
import Link from "next/link";

export function JobsHeader() {
	return (
		<div className="border-b bg-background">
			<div className="container py-6">
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h1 className="text-2xl font-bold tracking-tight">
								Job Postings
							</h1>
							<p className="text-muted-foreground">
								Manage and track your job listings
							</p>
						</div>
						<Link href={"/industry/jobs/create"}>
							<Button>
								<Plus className="mr-2 h-4 w-4" />
								Post New Job
							</Button>
						</Link>
					</div>
					<div className="flex flex-col gap-4 sm:flex-row">
						<div className="relative flex-1">
							<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input
								placeholder="Search jobs..."
								className="pl-8"
							/>
						</div>
						<div className="flex gap-4">
							<Select defaultValue="all">
								<SelectTrigger className="w-[160px]">
									<SelectValue placeholder="Status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">
										All Status
									</SelectItem>
									<SelectItem value="active">
										Active
									</SelectItem>
									<SelectItem value="draft">Draft</SelectItem>
									<SelectItem value="closed">
										Closed
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
									<SelectItem value="applications">
										Most Applications
									</SelectItem>
									<SelectItem value="closing">
										Closing Soon
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
