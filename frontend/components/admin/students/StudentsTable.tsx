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
import { GraduationCap, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const students = [
	{
		id: 1,
		name: "Sarah Chen",
		avatar: "/avatars/sarah.jpg",
		initials: "SC",
		email: "sarah.chen@example.com",
		course: "Computer Science",
		year: "3rd Year",
		location: "San Francisco, CA",
		applications: 5,
		status: "Active",
		statusColor: "green",
	},
	{
		id: 2,
		name: "Michael Brown",
		avatar: "/avatars/michael.jpg",
		initials: "MB",
		email: "michael.b@example.com",
		course: "Business Administration",
		year: "2nd Year",
		location: "New York, NY",
		applications: 3,
		status: "Active",
		statusColor: "green",
	},
	{
		id: 3,
		name: "Emma Wilson",
		avatar: "/avatars/emma.jpg",
		initials: "EW",
		email: "emma.w@example.com",
		course: "Graphic Design",
		year: "4th Year",
		location: "Los Angeles, CA",
		applications: 7,
		status: "Graduated",
		statusColor: "blue",
	},
];

export function StudentsTable() {
	return (
		<div className="rounded-md border">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Student</TableHead>
						<TableHead>Course</TableHead>
						<TableHead>Location</TableHead>
						<TableHead>Applications</TableHead>
						<TableHead>Status</TableHead>
						<TableHead className="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{students.map((student) => (
						<TableRow key={student.id}>
							<TableCell>
								<div className="flex items-center gap-3">
									<Avatar>
										<AvatarImage src={student.avatar} />
										<AvatarFallback>
											{student.initials}
										</AvatarFallback>
									</Avatar>
									<div>
										<div className="font-medium">
											{student.name}
										</div>
										<div className="flex items-center gap-1 text-sm text-muted-foreground">
											<Mail className="h-3 w-3" />
											<span>{student.email}</span>
										</div>
									</div>
								</div>
							</TableCell>
							<TableCell>
								<div className="space-y-1">
									<div className="flex items-center gap-1">
										<GraduationCap className="h-4 w-4 text-muted-foreground" />
										<span>{student.course}</span>
									</div>
									<span className="text-sm text-muted-foreground">
										{student.year}
									</span>
								</div>
							</TableCell>
							<TableCell>
								<div className="flex items-center gap-1">
									<MapPin className="h-4 w-4 text-muted-foreground" />
									<span>{student.location}</span>
								</div>
							</TableCell>
							<TableCell>{student.applications}</TableCell>
							<TableCell>
								<Badge
									variant="secondary"
									className={`bg-${student.statusColor}-500/10 text-${student.statusColor}-500`}
								>
									{student.status}
								</Badge>
							</TableCell>
							<TableCell className="text-right">
								<Button asChild variant="outline" size="sm">
									<Link
										href={`/admin/students/${student.id}`}
									>
										View Profile
									</Link>
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
