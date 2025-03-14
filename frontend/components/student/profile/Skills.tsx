"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { SkillsForm } from "./components/SkillsForm";
import { Button } from "@/components/ui/button";
import { Edit, Plus } from "lucide-react";

const skills = {
	technical: [
		// 	"JavaScript",
		// 	"TypeScript",
		// 	"React",
		// 	"Node.js",
		// 	"Python",
		// 	"SQL",
		// 	"Git",
		// 	"AWS",
	],
	soft: [
		// 	"Problem Solving",
		// 	"Team Leadership",
		// 	"Communication",
		// 	"Time Management",
		// 	"Agile",
	],
	languages: [
		// 	{ name: "English", level: "Native" },
		// 	{ name: "Spanish", level: "Intermediate" },
		// 	{ name: "Mandarin", level: "Basic" },
	],
};

export function Skills() {
	const [isEditing, setIsEditing] = useState(false);
	const [skillsData, setSkillsData] = useState(skills);

	const handleSave = (updatedSkills: any) => {
		setSkillsData(updatedSkills);
		setIsEditing(false);
	};
	return (
		<Card>
			<CardHeader>
				<div className="flex justify-between">
					<CardTitle>Skills & Languages</CardTitle>

					<Button
						variant="ghost"
						size="icon"
						onClick={() => setIsEditing(true)}
					>
						<Edit className="h-4 w-4" />
					</Button>
				</div>
				<CardDescription>
					Your technical and soft skills
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				{(skillsData?.languages?.length === 0 &&
					skillsData?.soft?.length === 0 &&
					skillsData?.technical?.length === 0) ||
				isEditing ? (
					<SkillsForm
						initialData={skillsData}
						onSubmit={handleSave}
						onCancel={() => setIsEditing(false)}
					/>
				) : skillsData &&
				  (skillsData?.languages?.length > 0 ||
						skillsData?.soft?.length > 0 ||
						skillsData?.technical?.length > 0) ? (
					<>
						<div className="space-y-2">
							<h3 className="text-sm font-medium">
								Technical Skills
							</h3>
							<div className="flex flex-wrap gap-2">
								{skillsData?.technical?.map(
									(skill: any, index: any) => (
										<Badge key={index} variant="secondary">
											{skill?.name}
										</Badge>
									)
								)}
							</div>
						</div>
						<div className="space-y-2">
							<h3 className="text-sm font-medium">Soft Skills</h3>
							<div className="flex flex-wrap gap-2">
								{skillsData.soft.map(
									(skill: any, index: any) => (
										<Badge key={index} variant="outline">
											{skill?.name}
										</Badge>
									)
								)}
							</div>
						</div>
						<div className="space-y-2">
							<h3 className="text-sm font-medium">Languages</h3>
							<div className="space-y-2">
								{skillsData?.languages.map(
									(language: any, index: any) => (
										<div
											key={index}
											className="flex items-center justify-between text-sm"
										>
											<span>{language?.name}</span>
											<Badge variant="secondary">
												{language?.level}
											</Badge>
										</div>
									)
								)}
							</div>
						</div>
					</>
				) : (
					<>No data found</>
				)}
			</CardContent>
		</Card>
	);
}
