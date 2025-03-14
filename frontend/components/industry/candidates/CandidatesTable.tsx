"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ColumnDef } from "@tanstack/react-table";
import {
	MapPin,
	GraduationCap,
	Briefcase,
	EyeIcon,
	Delete,
	DeleteIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const candidates = [
	{
		id: 1,
		name: "Sarah Chen",
		avatar: "/avatars/sarah.jpg",
		initials: "SC",
		title: "Frontend Developer",
		location: "San Francisco, CA",
		experience: "5 years",
		education: "BS Computer Science",
		skills: ["React", "TypeScript", "Node.js"],
		status: "Shortlisted",
		statusColor: "green",
	},
	{
		id: 2,
		name: "Michael Brown",
		avatar: "/avatars/michael.jpg",
		initials: "MB",
		title: "Full Stack Engineer",
		location: "New York, NY",
		experience: "3 years",
		education: "MS Software Engineering",
		skills: ["Python", "Django", "React"],
		status: "New",
		statusColor: "blue",
	},
	{
		id: 3,
		name: "Emma Wilson",
		avatar: "/avatars/emma.jpg",
		initials: "EW",
		title: "UX Designer",
		location: "Remote",
		experience: "4 years",
		education: "BFA Design",
		skills: ["Figma", "UI Design", "User Research"],
		status: "Reviewing",
		statusColor: "yellow",
	},
	{
		id: 4,
		name: "David Lee",
		avatar: "/avatars/david.jpg",
		initials: "DL",
		title: "Data Scientist",
		location: "London, UK",
		experience: "6 years",
		education: "PhD Data Science",
		skills: ["Python", "Machine Learning", "R"],
		status: "Rejected",
		statusColor: "red",
	},
	{
		id: 5,
		name: "David Lee",
		avatar: "/avatars/david.jpg",
		initials: "DL",
		title: "Data Scientist",
		location: "London, UK",
		experience: "6 years",
		education: "PhD Data Science",
		skills: ["Python", "Machine Learning", "R"],
		status: "Rejected",
		statusColor: "red",
	},
	{
		id: 6,
		name: "David Lee",
		avatar: "/avatars/david.jpg",
		initials: "DL",
		title: "Data Scientist",
		location: "London, UK",
		experience: "6 years",
		education: "PhD Data Science",
		skills: ["Python", "Machine Learning", "R"],
		status: "Rejected",
		statusColor: "red",
	},
	{
		id: 7,
		name: "David Lee",
		avatar: "/avatars/david.jpg",
		initials: "DL",
		title: "Data Scientist",
		location: "London, UK",
		experience: "6 years",
		education: "PhD Data Science",
		skills: ["Python", "Machine Learning", "R"],
		status: "Rejected",
		statusColor: "red",
	},
	{
		id: 8,
		name: "David Lee",
		avatar: "/avatars/david.jpg",
		initials: "DL",
		title: "Data Scientist",
		location: "London, UK",
		experience: "6 years",
		education: "PhD Data Science",
		skills: ["Python", "Machine Learning", "R"],
		status: "Rejected",
		statusColor: "red",
	},
	{
		id: 9,
		name: "David Lee",
		avatar: "/avatars/david.jpg",
		initials: "DL",
		title: "Data Scientist",
		location: "London, UK",
		experience: "6 years",
		education: "PhD Data Science",
		skills: ["Python", "Machine Learning", "R"],
		status: "Rejected",
		statusColor: "red",
	},
	{
		id: 10,
		name: "David Lee",
		avatar: "/avatars/david.jpg",
		initials: "DL",
		title: "Data Scientist",
		location: "London, UK",
		experience: "6 years",
		education: "PhD Data Science",
		skills: ["Python", "Machine Learning", "R"],
		status: "Rejected",
		statusColor: "red",
	},
	{
		id: 11,
		name: "David Lee",
		avatar: "/avatars/david.jpg",
		initials: "DL",
		title: "Data Scientist",
		location: "London, UK",
		experience: "6 years",
		education: "PhD Data Science",
		skills: ["Python", "Machine Learning", "R"],
		status: "Rejected",
		statusColor: "red",
	},
	{
		id: 12,
		name: "David Lee",
		avatar: "/avatars/david.jpg",
		initials: "DL",
		title: "Data Scientist",
		location: "London, UK",
		experience: "6 years",
		education: "PhD Data Science",
		skills: ["Python", "Machine Learning", "R"],
		status: "Rejected",
		statusColor: "red",
	},
];

export const columns: ColumnDef<any>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "amount",
		header: "Amount",
	},
];
export function CandidatesTable() {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);
	const [totalItems, setTotalItems] = useState(0);

	return (
		// <div className="rounded-md border">
		// 	<Table>
		// 		<TableHeader>
		// 			<TableRow>
		// 				<TableHead>Candidate</TableHead>
		// 				<TableHead>Location</TableHead>
		// 				<TableHead>Experience</TableHead>
		// 				<TableHead>Status</TableHead>
		// 				<TableHead className="text-right">Actions</TableHead>
		// 			</TableRow>
		// 		</TableHeader>
		// 		<TableBody>
		// 			{candidates.map((candidate) => (
		// 				<TableRow key={candidate.id}>
		// 					<TableCell>
		// 						<div className="flex items-center gap-3">
		// 							<Avatar>
		// 								<AvatarImage src={candidate.avatar} />
		// 								<AvatarFallback>
		// 									{candidate.initials}
		// 								</AvatarFallback>
		// 							</Avatar>
		// 							<div>
		// 								<div className="font-medium">
		// 									{candidate.name}
		// 								</div>
		// 								<div className="text-sm text-muted-foreground">
		// 									{candidate.title}
		// 								</div>
		// 								<div className="mt-1 flex flex-wrap gap-1">
		// 									{candidate.skills.map(
		// 										(skill, index) => (
		// 											<Badge
		// 												key={index}
		// 												variant="secondary"
		// 												className="text-xs"
		// 											>
		// 												{skill}
		// 											</Badge>
		// 										)
		// 									)}
		// 								</div>
		// 							</div>
		// 						</div>
		// 					</TableCell>
		// 					<TableCell>
		// 						<div className="flex items-center gap-1">
		// 							<MapPin className="h-4 w-4 text-muted-foreground" />
		// 							<span>{candidate.location}</span>
		// 						</div>
		// 					</TableCell>
		// 					<TableCell>
		// 						<div className="space-y-1">
		// 							<div className="flex items-center gap-1">
		// 								<Briefcase className="h-4 w-4 text-muted-foreground" />
		// 								<span>{candidate.experience}</span>
		// 							</div>
		// 							<div className="flex items-center gap-1">
		// 								<GraduationCap className="h-4 w-4 text-muted-foreground" />
		// 								<span>{candidate.education}</span>
		// 							</div>
		// 						</div>
		// 					</TableCell>
		// 					<TableCell>
		// 						<Badge
		// 							variant="secondary"
		// 							className={`bg-${candidate.statusColor}-500/10 text-${candidate.statusColor}-500`}
		// 						>
		// 							{candidate.status}
		// 						</Badge>
		// 					</TableCell>
		// 					<TableCell className="text-right">
		// 						<Button asChild variant="outline" size="sm">
		// 							<Link
		// 								href={`/industry/candidates/${candidate.id}`}
		// 							>
		// 								View Profile
		// 							</Link>
		// 						</Button>
		// 					</TableCell>
		// 				</TableRow>
		// 			))}
		// 		</TableBody>
		// 	</Table>
		// </div>
		<DataTable
			columns={columns}
			data={candidates}
			pagination
			currentPage={currentPage}
			itemsPerPage={itemsPerPage}
			totalItems={totalItems}
			onPageChange={setCurrentPage}
			onPageSizeChange={setItemsPerPage}
			enableRowSelection
			quickActions={[
				{
					label: "Bulk Delete",
					icon: <DeleteIcon />,
					onClick: (candidate) => console.log(candidate),
				},
			]}
			// loading={loading}
		/>
	);
}
