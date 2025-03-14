"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink } from "lucide-react";

const featuredResources = [
	{
		title: "Complete CV Writing Guide 2024",
		description: "Learn how to create a standout CV that gets results",
		type: "PDF Guide",
		downloads: 1234,
		isNew: true,
	},
	{
		title: "Interview Preparation Toolkit",
		description: "Essential tips and practice questions for job interviews",
		type: "Interactive",
		downloads: 856,
		isNew: true,
	},
	{
		title: "Career Development Roadmap",
		description: "Plan your career progression step by step",
		type: "Template",
		downloads: 2156,
		isNew: false,
	},
];

export function FeaturedResources() {
	return (
		<div className="grid gap-6 md:grid-cols-3">
			{featuredResources.map((resource) => (
				<Card key={resource.title}>
					<CardHeader className="space-y-1">
						<div className="flex items-center justify-between">
							<CardTitle className="text-lg">
								{resource.title}
							</CardTitle>
							{resource.isNew && (
								<Badge variant="secondary">New</Badge>
							)}
						</div>
						<p className="text-sm text-muted-foreground">
							{resource.description}
						</p>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-between">
							<Badge variant="outline">{resource.type}</Badge>
							<div className="flex space-x-2">
								<Button size="sm" variant="ghost">
									<ExternalLink className="h-4 w-4" />
								</Button>
								<Button size="sm" variant="ghost">
									<Download className="h-4 w-4" />
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
