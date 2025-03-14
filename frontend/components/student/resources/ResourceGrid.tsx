"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink } from "lucide-react";

const resourcesByCategory = {
	"cv-templates": [
		{
			title: "Modern Professional CV",
			description:
				"Clean and modern CV template suitable for all industries",
			type: "DOCX",
			downloads: 2345,
			isNew: true,
		},
		{
			title: "Creative Portfolio CV",
			description: "Stand out with this creative CV design",
			type: "PDF",
			downloads: 1876,
			isNew: false,
		},
		// Add more CV templates...
	],
	"interview-guides": [
		{
			title: "Technical Interview Prep",
			description: "Comprehensive guide for technical interviews",
			type: "PDF",
			downloads: 3421,
			isNew: true,
		},
		{
			title: "Behavioral Questions Guide",
			description: "Master behavioral interview questions",
			type: "PDF",
			downloads: 2198,
			isNew: false,
		},
		// Add more interview guides...
	],
	// Add resources for other categories...
};

interface ResourceGridProps {
	category: string;
}

export function ResourceGrid({ category }: ResourceGridProps) {
	const resources =
		resourcesByCategory[category as keyof typeof resourcesByCategory] || [];

	return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{resources.map((resource) => (
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
