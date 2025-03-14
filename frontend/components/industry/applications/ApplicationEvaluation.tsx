"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Plus, MessageSquare, Star } from "lucide-react";

interface ApplicationEvaluationProps {
	type?: "evaluation" | "communication";
}

export function ApplicationEvaluation({
	type = "evaluation",
}: ApplicationEvaluationProps) {
	if (type === "communication") {
		const messages = [
			{
				sender: "HR Manager",
				message:
					"Hi Sarah, we'd like to schedule a technical interview.",
				date: "2024-03-18 10:30 AM",
			},
			{
				sender: "Sarah Chen",
				message: "That sounds great! I'm available this week.",
				date: "2024-03-18 11:15 AM",
			},
		];

		return (
			<div className="space-y-4">
				<div className="flex justify-end">
					<Button>
						<Plus className="mr-2 h-4 w-4" />
						New Message
					</Button>
				</div>
				{messages.map((msg, index) => (
					<Card key={index} className="p-4">
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									<MessageSquare className="h-4 w-4 text-muted-foreground" />
									<span className="font-medium">
										{msg.sender}
									</span>
								</div>
								<span className="text-sm text-muted-foreground">
									{msg.date}
								</span>
							</div>
							<p className="text-sm">{msg.message}</p>
						</div>
					</Card>
				))}
			</div>
		);
	}

	return (
		<div className="space-y-4">
			<Card className="p-4">
				<div className="space-y-4">
					<div className="grid gap-4 sm:grid-cols-2">
						<div className="space-y-2">
							<label className="text-sm font-medium">
								Technical Skills
							</label>
							<Select defaultValue="4">
								<SelectTrigger>
									<SelectValue placeholder="Rate technical skills" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="5">Excellent</SelectItem>
									<SelectItem value="4">Very Good</SelectItem>
									<SelectItem value="3">Good</SelectItem>
									<SelectItem value="2">Fair</SelectItem>
									<SelectItem value="1">Poor</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="space-y-2">
							<label className="text-sm font-medium">
								Communication
							</label>
							<Select defaultValue="5">
								<SelectTrigger>
									<SelectValue placeholder="Rate communication" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="5">Excellent</SelectItem>
									<SelectItem value="4">Very Good</SelectItem>
									<SelectItem value="3">Good</SelectItem>
									<SelectItem value="2">Fair</SelectItem>
									<SelectItem value="1">Poor</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className="space-y-2">
						<label className="text-sm font-medium">
							Overall Rating
						</label>
						<div className="flex items-center gap-1">
							{[1, 2, 3, 4, 5].map((rating) => (
								<Star
									key={rating}
									className="h-5 w-5 fill-primary text-primary"
								/>
							))}
						</div>
					</div>
					<div className="space-y-2">
						<label className="text-sm font-medium">
							Evaluation Notes
						</label>
						<Textarea
							placeholder="Add detailed evaluation notes, strengths, areas of improvement..."
							className="min-h-[100px]"
						/>
					</div>
					<div className="flex justify-end">
						<Button>Save Evaluation</Button>
					</div>
				</div>
			</Card>
		</div>
	);
}
