"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Mail,
	Phone,
	MapPin,
	GraduationCap,
	Calendar,
	FileText,
} from "lucide-react";

export function StudentProfile() {
	const student = {
		name: "Sarah Chen",
		avatar: "/avatars/sarah.jpg",
		initials: "SC",
		email: "sarah.chen@example.com",
		phone: "+1 (555) 123-4567",
		location: "San Francisco, CA",
		course: "Computer Science",
		year: "3rd Year",
		gpa: "3.8/4.0",
		applications: 5,
		status: "Active",
		statusColor: "green",
		skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "Git"],
	};

	return (
		<div className="space-y-6">
			<Card className="p-6">
				<div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
					<div className="flex flex-col sm:flex-row sm:items-center gap-4">
						<Avatar className="h-20 w-20">
							<AvatarImage src={student.avatar} />
							<AvatarFallback>{student.initials}</AvatarFallback>
						</Avatar>
						<div className="space-y-1">
							<h1 className="text-2xl font-bold tracking-tight">
								{student.name}
							</h1>
							<p className="text-muted-foreground">
								{student.course}
							</p>
							<div className="flex flex-wrap items-center gap-2">
								<Badge
									variant="secondary"
									className={`bg-${student.statusColor}-500/10 text-${student.statusColor}-500`}
								>
									{student.status}
								</Badge>
								<Badge variant="outline">{student.year}</Badge>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2 sm:text-right">
						<Button>
							<Mail className="mr-2 h-4 w-4" />
							Contact Student
						</Button>
						<Button variant="outline">
							<FileText className="mr-2 h-4 w-4" />
							View CV
						</Button>
					</div>
				</div>
			</Card>

			<div className="grid gap-6 md:grid-cols-2">
				<Card className="p-6">
					<h2 className="font-semibold mb-4">Contact Information</h2>
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<Mail className="h-4 w-4 text-muted-foreground" />
							<span>{student.email}</span>
						</div>
						<div className="flex items-center gap-2">
							<Phone className="h-4 w-4 text-muted-foreground" />
							<span>{student.phone}</span>
						</div>
						<div className="flex items-center gap-2">
							<MapPin className="h-4 w-4 text-muted-foreground" />
							<span>{student.location}</span>
						</div>
					</div>
				</Card>

				<Card className="p-6">
					<h2 className="font-semibold mb-4">Academic Information</h2>
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<GraduationCap className="h-4 w-4 text-muted-foreground" />
							<span>{student.course}</span>
						</div>
						<div className="flex items-center gap-2">
							<Calendar className="h-4 w-4 text-muted-foreground" />
							<span>{student.year}</span>
						</div>
						<div className="space-y-2">
							<h3 className="text-sm font-medium">Skills</h3>
							<div className="flex flex-wrap gap-2">
								{student.skills.map((skill, index) => (
									<Badge key={index} variant="secondary">
										{skill}
									</Badge>
								))}
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
}
