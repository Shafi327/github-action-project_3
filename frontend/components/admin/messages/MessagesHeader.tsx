"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

export function MessagesHeader() {
	return (
		<div className="flex flex-col gap-4">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Messages</h2>
				<p className="text-muted-foreground">
					Manage and monitor all platform communications
				</p>
			</div>
			<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
				<div className="relative flex-1">
					<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
					<Input placeholder="Search messages..." className="pl-8" />
				</div>
				<div className="flex gap-4">
					<Select defaultValue="all">
						<SelectTrigger className="w-[160px]">
							<SelectValue placeholder="Filter by" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Messages</SelectItem>
							<SelectItem value="unread">Unread</SelectItem>
							<SelectItem value="flagged">Flagged</SelectItem>
							<SelectItem value="archived">Archived</SelectItem>
						</SelectContent>
					</Select>
					<Button variant="outline">
						<Filter className="mr-2 h-4 w-4" />
						More Filters
					</Button>
				</div>
			</div>
		</div>
	);
}
