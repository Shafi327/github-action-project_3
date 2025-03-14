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
import { Search, Download } from "lucide-react";

export function ApplicationsHeader() {
	return (
		<div className="border-b bg-background">
			<div className="container py-6">
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h1 className="text-2xl font-bold tracking-tight">
								Applications
							</h1>
							<p className="text-muted-foreground">
								Track and manage job applications
							</p>
						</div>
						<Button>
							<Download className="mr-2 h-4 w-4" />
							Export Report
						</Button>
					</div>
					<div className="flex flex-col gap-4 sm:flex-row">
						<div className="relative flex-1">
							<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input
								placeholder="Search applications..."
								className="pl-8"
							/>
						</div>
						<div className="flex gap-4">
							<Select defaultValue="all">
								<SelectTrigger className="w-[160px]">
									<SelectValue placeholder="Stage" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">
										All Stages
									</SelectItem>
									<SelectItem value="screening">
										Screening
									</SelectItem>
									<SelectItem value="interview">
										Interview
									</SelectItem>
									<SelectItem value="offer">Offer</SelectItem>
									<SelectItem value="hired">Hired</SelectItem>
									<SelectItem value="rejected">
										Rejected
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
									<SelectItem value="stage">
										Application Stage
									</SelectItem>
									<SelectItem value="rating">
										Candidate Rating
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
