"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Calendar, Mail, Star, Building2 } from "lucide-react";

export function ApplicationDetails() {
	const application = {
		id: 1,
		candidate: {
			name: "Sarah Chen",
			avatar: "/avatars/sarah.jpg",
			initials: "SC",
			email: "sarah.chen@example.com",
		},
		position: "Senior Frontend Developer",
		department: "Engineering",
		appliedDate: "2024-03-15",
		source: "LinkedIn",
		stage: "Interview",
		stageColor: "yellow",
		rating: 5,
		interviewer: "John Smith",
		nextStep: "Technical Interview",
		nextStepDate: "2024-03-20",
	};

	return (
		<div className="space-y-6">
			<Card className="p-6">
				<div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
					<div className="flex flex-col sm:flex-row sm:items-center gap-4">
						<Avatar className="h-20 w-20">
							<AvatarImage src={application.candidate.avatar} />
							<AvatarFallback>
								{application.candidate.initials}
							</AvatarFallback>
						</Avatar>
						<div className="space-y-1">
							<h1 className="text-2xl font-bold tracking-tight">
								{application.candidate.name}
							</h1>
							<p className="text-muted-foreground">
								{application.position}
							</p>
							<div className="flex flex-wrap items-center gap-2">
								<Badge
									variant="secondary"
									className={`bg-${application.stageColor}-500/10 text-${application.stageColor}-500`}
								>
									{application.stage}
								</Badge>
								<div className="flex items-center gap-1">
									<Star className="h-4 w-4 fill-primary text-primary" />
									<span>{application.rating}/5</span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<Select defaultValue={application.stage.toLowerCase()}>
							<SelectTrigger className="w-[200px]">
								<SelectValue placeholder="Update Stage" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="screening">
									Screening
								</SelectItem>
								<SelectItem value="interview">
									Interview
								</SelectItem>
								<SelectItem value="technical">
									Technical Assessment
								</SelectItem>
								<SelectItem value="offer">Offer</SelectItem>
								<SelectItem value="hired">Hired</SelectItem>
								<SelectItem value="rejected">
									Rejected
								</SelectItem>
							</SelectContent>
						</Select>
						<Button>
							<Mail className="mr-2 h-4 w-4" />
							Send Message
						</Button>
					</div>
				</div>
			</Card>

			<div className="grid gap-6 md:grid-cols-2">
				<Card className="p-6">
					<h2 className="font-semibold mb-4">Application Details</h2>
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<Building2 className="h-4 w-4 text-muted-foreground" />
							<span>Department: {application.department}</span>
						</div>
						<div className="flex items-center gap-2">
							<Calendar className="h-4 w-4 text-muted-foreground" />
							<span>Applied: {application.appliedDate}</span>
						</div>
						<div className="flex items-center gap-2">
							<Mail className="h-4 w-4 text-muted-foreground" />
							<span>{application.candidate.email}</span>
						</div>
						<div className="text-sm text-muted-foreground">
							Source: {application.source}
						</div>
					</div>
				</Card>

				<Card className="p-6">
					<h2 className="font-semibold mb-4">Next Steps</h2>
					<div className="space-y-4">
						<div className="space-y-2">
							<p className="font-medium">
								{application.nextStep}
							</p>
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<Calendar className="h-4 w-4" />
								<span>
									Scheduled for {application.nextStepDate}
								</span>
							</div>
						</div>
						<div className="space-y-2">
							<p className="text-sm text-muted-foreground">
								Interviewer: {application.interviewer}
							</p>
						</div>
						<Button className="w-full">Schedule Interview</Button>
					</div>
				</Card>
			</div>
		</div>
	);
}
