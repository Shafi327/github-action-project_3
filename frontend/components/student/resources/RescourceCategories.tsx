"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	BookOpen,
	FileText,
	Video,
	Users,
	Briefcase,
	GraduationCap,
} from "lucide-react";

const categories = [
	{ name: "CV Templates", icon: FileText, count: 15 },
	{ name: "Interview Guides", icon: Users, count: 8 },
	{ name: "Career Guides", icon: Briefcase, count: 12 },
	{ name: "Video Tutorials", icon: Video, count: 20 },
	{ name: "Study Materials", icon: BookOpen, count: 25 },
	{ name: "Academic Resources", icon: GraduationCap, count: 18 },
];

export function ResourceCategories() {
	return (
		<Card>
			<CardHeader>
				<h2 className="text-lg font-semibold">Categories</h2>
			</CardHeader>
			<CardContent>
				<ScrollArea className="h-[calc(100vh-300px)]">
					<div className="space-y-2">
						{categories.map((category) => (
							<Button
								key={category.name}
								variant="ghost"
								className="w-full justify-start"
							>
								<category.icon className="mr-2 h-4 w-4" />
								{category.name}
								<span className="ml-auto text-muted-foreground text-sm">
									{category.count}
								</span>
							</Button>
						))}
					</div>
				</ScrollArea>
			</CardContent>
		</Card>
	);
}
