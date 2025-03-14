"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Download, ExternalLink } from "lucide-react";

const resources = [
	{
		id: 1,
		name: "Professional CV Template",
		category: "CV Templates",
		type: "DOCX",
		lastUpdated: "2024-03-20",
		downloads: 1543,
	},
	{
		id: 2,
		name: "Technical Interview Questions",
		category: "Interview Guides",
		type: "PDF",
		lastUpdated: "2024-03-18",
		downloads: 892,
	},
	{
		id: 3,
		name: "Networking Skills Workshop",
		category: "Video Tutorials",
		type: "Video",
		lastUpdated: "2024-03-15",
		downloads: 2341,
	},
	{
		id: 4,
		name: "Career Planning Worksheet",
		category: "Career Guides",
		type: "PDF",
		lastUpdated: "2024-03-10",
		downloads: 1234,
	},
];

export function ResourceList() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>All Resources</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Category</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Last Updated</TableHead>
							<TableHead>Downloads</TableHead>
							<TableHead className="text-right">
								Actions
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{resources.map((resource) => (
							<TableRow key={resource.id}>
								<TableCell className="font-medium">
									{resource.name}
								</TableCell>
								<TableCell>
									<Badge variant="outline">
										{resource.category}
									</Badge>
								</TableCell>
								<TableCell>{resource.type}</TableCell>
								<TableCell>{resource.lastUpdated}</TableCell>
								<TableCell>
									{resource.downloads.toLocaleString()}
								</TableCell>
								<TableCell className="text-right">
									<div className="flex justify-end space-x-2">
										<Button variant="ghost" size="icon">
											<ExternalLink className="h-4 w-4" />
										</Button>
										<Button variant="ghost" size="icon">
											<Download className="h-4 w-4" />
										</Button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
