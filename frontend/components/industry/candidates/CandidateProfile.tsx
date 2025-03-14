"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Download,
	Mail,
	MapPin,
	Phone,
	Calendar,
	Briefcase,
	GraduationCap,
	Globe,
} from "lucide-react";

export function CandidateProfile() {
	const candidate = {
		name: "Sarah Chen",
		avatar: "/avatars/sarah.jpg",
		initials: "SC",
		title: "Senior Frontend Developer",
		location: "San Francisco, CA",
		email: "sarah.chen@example.com",
		phone: "+1 (555) 123-4567",
		website: "sarahchen.dev",
		availability: "Available from July 2024",
		experience: "5 years",
		education: "BS Computer Science, University of California",
		skills: [
			"JavaScript",
			"TypeScript",
			"React",
			"Node.js",
			"GraphQL",
			"AWS",
			"Docker",
			"CI/CD",
		],
		status: "Shortlisted",
		statusColor: "green",
	};

	return (
		<div className="space-y-6">
			<Card className="p-6">
				<div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
					<div className="flex flex-col sm:flex-row sm:items-center gap-4">
						<Avatar className="h-20 w-20">
							<AvatarImage src={candidate.avatar} />
							<AvatarFallback>
								{candidate.initials}
							</AvatarFallback>
						</Avatar>
						<div className="space-y-1">
							<h1 className="text-2xl font-bold tracking-tight">
								{candidate.name}
							</h1>
							<p className="text-muted-foreground">
								{candidate.title}
							</p>
							<div className="flex flex-wrap items-center gap-2">
								<Badge
									variant="secondary"
									className={`bg-${candidate.statusColor}-500/10 text-${candidate.statusColor}-500`}
								>
									{candidate.status}
								</Badge>
								<Badge variant="outline">
									{candidate.experience} Experience
								</Badge>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2 sm:flex-row sm:items-center">
						<Button>
							<Mail className="mr-2 h-4 w-4" />
							Contact
						</Button>
						<Button variant="outline">
							<Download className="mr-2 h-4 w-4" />
							Download CV
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
							<span>{candidate.email}</span>
						</div>
						<div className="flex items-center gap-2">
							<Phone className="h-4 w-4 text-muted-foreground" />
							<span>{candidate.phone}</span>
						</div>
						<div className="flex items-center gap-2">
							<MapPin className="h-4 w-4 text-muted-foreground" />
							<span>{candidate.location}</span>
						</div>
						<div className="flex items-center gap-2">
							<Globe className="h-4 w-4 text-muted-foreground" />
							<span>{candidate.website}</span>
						</div>
						<div className="flex items-center gap-2">
							<Calendar className="h-4 w-4 text-muted-foreground" />
							<span>{candidate.availability}</span>
						</div>
					</div>
				</Card>

				<Card className="p-6">
					<h2 className="font-semibold mb-4">Professional Summary</h2>
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<Briefcase className="h-4 w-4 text-muted-foreground" />
							<span>{candidate.experience} of experience</span>
						</div>
						<div className="flex items-center gap-2">
							<GraduationCap className="h-4 w-4 text-muted-foreground" />
							<span>{candidate.education}</span>
						</div>
						<div className="space-y-2">
							<h3 className="text-sm font-medium">Skills</h3>
							<div className="flex flex-wrap gap-2">
								{candidate.skills.map((skill, index) => (
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
