"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useApplicationsList } from "@/hooks/industry";
import { Calendar, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useApplicationColumns } from "./hooks";
import { DataTable } from "@/components/ui/data-table";

const applications = [
	{
		id: 1,
		candidate: {
			name: "Sarah Chen",
			avatar: "/avatars/sarah.jpg",
			initials: "SC",
			email: "sarah.chen@example.com",
		},
		position: "Senior Frontend Developer",
		appliedDate: "2024-03-15",
		stage: "Interview",
		stageColor: "yellow",
		rating: 5,
		source: "LinkedIn",
	},
	{
		id: 2,
		candidate: {
			name: "Michael Brown",
			avatar: "/avatars/michael.jpg",
			initials: "MB",
			email: "michael.b@example.com",
		},
		position: "Full Stack Engineer",
		appliedDate: "2024-03-14",
		stage: "Screening",
		stageColor: "blue",
		rating: 4,
		source: "Company Website",
	},
	{
		id: 3,
		candidate: {
			name: "Emma Wilson",
			avatar: "/avatars/emma.jpg",
			initials: "EW",
			email: "emma.w@example.com",
		},
		position: "UX Designer",
		appliedDate: "2024-03-12",
		stage: "Offer",
		stageColor: "green",
		rating: 5,
		source: "Referral",
	},
];

export function ApplicationsTable() {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const { data, isLoading, isError } = useApplicationsList({
		page,
		limit,
	});
	const initialData = data?.flatMap((job: any) => job?.applications);
	const quickActions = [
		{
			label: "Export Selected",
			onClick: (selectedRows: any) => {
				console.log("Exporting:", selectedRows);
				// Implement export logic
			},
		},
		{
			label: "Approve Selected",
			onClick: (selectedRows: any) => {
				console.log("Approving:", selectedRows);
				// Implement approve logic
			},
		},
	];

	console.log("initialData", initialData);

	return (
		<div className="rounded-md border">
			<DataTable
				columns={useApplicationColumns}
				data={initialData}
				pagination={true}
				totalItems={initialData?.length}
				currentPage={page}
				itemsPerPage={limit}
				onPageChange={setPage}
				onPageSizeChange={setLimit}
			/>
			{/* <Table>
				<TableHeader>
					<TableRow>
						<TableHead>Candidate</TableHead>
						<TableHead>Position</TableHead>
						<TableHead>Applied Date</TableHead>
						<TableHead>Stage</TableHead>
						<TableHead>Rating</TableHead>
						<TableHead className="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{applications.map((application) => (
						<TableRow key={application.id}>
							<TableCell>
								<div className="flex items-center gap-3">
									<Avatar>
										<AvatarImage
											src={application.candidate.avatar}
										/>
										<AvatarFallback>
											{application.candidate.initials}
										</AvatarFallback>
									</Avatar>
									<div>
										<div className="font-medium">
											{application.candidate.name}
										</div>
										<div className="text-sm text-muted-foreground">
											{application.candidate.email}
										</div>
									</div>
								</div>
							</TableCell>
							<TableCell>{application.position}</TableCell>
							<TableCell>
								<div className="flex items-center gap-2">
									<Calendar className="h-4 w-4 text-muted-foreground" />
									<span>{application.appliedDate}</span>
								</div>
							</TableCell>
							<TableCell>
								<Badge
									variant="secondary"
									className={`bg-${application.stageColor}-500/10 text-${application.stageColor}-500`}
								>
									{application.stage}
								</Badge>
							</TableCell>
							<TableCell>
								<div className="flex items-center gap-1">
									<Star className="h-4 w-4 fill-primary text-primary" />
									<span>{application.rating}</span>
								</div>
							</TableCell>
							<TableCell className="text-right">
								<Button asChild variant="outline" size="sm">
									<Link
										href={`/industry/applications/${application.id}`}
									>
										View Details
									</Link>
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table> */}
		</div>
	);
}
