"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

import {
	BookOpen,
	FileText,
	Video,
	Users,
	Briefcase,
	GraduationCap,
} from "lucide-react";
import { ResourceGrid } from "./ResourceGrid";

const categories = [
	{
		id: "cv-templates",
		name: "CV Templates",
		icon: FileText,
		count: 15,
		description:
			"Professional CV and resume templates for various industries",
	},
	{
		id: "interview-guides",
		name: "Interview Guides",
		icon: Users,
		count: 8,
		description: "Comprehensive guides for interview preparation",
	},
	{
		id: "career-guides",
		name: "Career Guides",
		icon: Briefcase,
		count: 12,
		description: "Career development and planning resources",
	},
	{
		id: "video-tutorials",
		name: "Video Tutorials",
		icon: Video,
		count: 20,
		description: "Video-based learning materials and workshops",
	},
	{
		id: "study-materials",
		name: "Study Materials",
		icon: BookOpen,
		count: 25,
		description: "Academic study resources and materials",
	},
	{
		id: "academic-resources",
		name: "Academic Resources",
		icon: GraduationCap,
		count: 18,
		description: "Resources for academic success and research",
	},
];

export function ResourceTabs() {
	const [activeTab, setActiveTab] = useState(categories[0].id);

	return (
		<Tabs
			value={activeTab}
			onValueChange={setActiveTab}
			className="space-y-4"
		>
			<div className="border rounded-lg p-2 overflow-x-auto">
				<TabsList className="md:grid md:grid-cols-3 lg:grid-cols-6 gap-2 h-32 px-4 overflow-x-auto ">
					{categories?.map((category) => (
						<TabsTrigger
							key={category.id}
							value={category.id}
							className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
						>
							<div className="flex flex-col items-center space-y-1 py-1">
								<category.icon className="h-5 w-5" />
								<span className="text-sm font-medium">
									{category.name}
								</span>
								<span className="text-xs text-white">
									{category.count} items
								</span>
							</div>
						</TabsTrigger>
					))}
				</TabsList>
			</div>

			{categories.map((category) => (
				<TabsContent key={category.id} value={category.id}>
					<Card>
						<CardContent className="p-6">
							<div className="mb-6">
								<h2 className="text-2xl font-semibold mb-2">
									{category.name}
								</h2>
								<p className="text-muted-foreground">
									{category.description}
								</p>
							</div>
							<ResourceGrid category={category.id} />
						</CardContent>
					</Card>
				</TabsContent>
			))}
		</Tabs>
	);
}
