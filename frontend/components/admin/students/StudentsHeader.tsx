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
import { Download, Search } from "lucide-react";

export function StudentsHeader() {
	return (
		<div className="border-b bg-background">
			<div className="container py-6">
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h1 className="text-2xl font-bold tracking-tight">
								Students
							</h1>
							<p className="text-muted-foreground">
								Manage and monitor student profiles
							</p>
						</div>
						<Button>
							<Download className="mr-2 h-4 w-4" />
							Export List
						</Button>
					</div>
					<div className="flex flex-col gap-4 sm:flex-row">
						<div className="relative flex-1">
							<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input
								placeholder="Search students..."
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
									<SelectItem value="inactive">
										Inactive
									</SelectItem>
									<SelectItem value="graduated">
										Graduated
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
									<SelectItem value="name">Name</SelectItem>
									<SelectItem value="applications">
										Applications
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
