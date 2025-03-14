"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Calendar, Users, Video } from "lucide-react";

const events = [
	{
		title: "Tech Career Fair",
		date: "March 20, 2024",
		time: "10:00 AM - 4:00 PM",
		type: "Virtual",
		icon: Video,
	},
	{
		title: "Resume Workshop",
		date: "March 22, 2024",
		time: "2:00 PM - 3:30 PM",
		type: "Online",
		icon: Users,
	},
	{
		title: "Interview Prep Session",
		date: "March 25, 2024",
		time: "11:00 AM - 12:30 PM",
		type: "Virtual",
		icon: Video,
	},
];

export function UpcomingEvents() {
	return (
		<Card className="h-full">
			<CardHeader>
				<CardTitle>Upcoming Events</CardTitle>
				<CardDescription>Career events and workshops</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{events.map((event, index) => {
						const Icon = event.icon;
						return (
							<div
								key={index}
								className="flex flex-col gap-2 rounded-lg border p-4"
							>
								<div className="flex items-center justify-between">
									<span className="font-medium">
										{event.title}
									</span>
									<Icon className="h-4 w-4 text-muted-foreground" />
								</div>
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Calendar className="h-4 w-4" />
									<span>{event.date}</span>
								</div>
								<div className="text-sm text-muted-foreground">
									{event.time}
								</div>
								<Button
									variant="secondary"
									size="sm"
									className="mt-2"
								>
									Join Event
								</Button>
							</div>
						);
					})}
				</div>
			</CardContent>
		</Card>
	);
}
