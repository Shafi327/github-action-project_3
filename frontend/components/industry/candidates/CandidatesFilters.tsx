"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

interface CandidatesFiltersProps {
	className?: string;
}

const filters = {
	experience: [
		{ id: "entry", label: "Entry Level (0-2 years)" },
		{ id: "mid", label: "Mid Level (3-5 years)" },
		{ id: "senior", label: "Senior Level (5+ years)" },
		{ id: "lead", label: "Lead/Manager (8+ years)" },
	],
	education: [
		{ id: "bachelor", label: "Bachelor's Degree" },
		{ id: "master", label: "Master's Degree" },
		{ id: "phd", label: "PhD" },
		{ id: "certification", label: "Professional Certification" },
	],
	skills: [
		{ id: "javascript", label: "JavaScript" },
		{ id: "python", label: "Python" },
		{ id: "react", label: "React" },
		{ id: "node", label: "Node.js" },
		{ id: "aws", label: "AWS" },
		{ id: "sql", label: "SQL" },
	],
	availability: [
		{ id: "immediate", label: "Immediate" },
		{ id: "two_weeks", label: "2 Weeks Notice" },
		{ id: "one_month", label: "1 Month Notice" },
		{ id: "negotiable", label: "Negotiable" },
	],
};

export function CandidatesFilters({ className }: CandidatesFiltersProps) {
	return (
		<Card className={cn("p-6", className)}>
			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<h2 className="font-semibold">Filters</h2>
					<Button
						variant="ghost"
						size="sm"
						className="h-auto p-0 text-muted-foreground"
					>
						Reset all
					</Button>
				</div>
				<Accordion type="multiple" className="w-full">
					<AccordionItem value="experience">
						<AccordionTrigger>Experience Level</AccordionTrigger>
						<AccordionContent>
							<div className="space-y-2">
								{filters.experience.map((item) => (
									<div
										key={item.id}
										className="flex items-center space-x-2"
									>
										<Checkbox id={item.id} />
										<label
											htmlFor={item.id}
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											{item.label}
										</label>
									</div>
								))}
							</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="education">
						<AccordionTrigger>Education</AccordionTrigger>
						<AccordionContent>
							<div className="space-y-2">
								{filters.education.map((item) => (
									<div
										key={item.id}
										className="flex items-center space-x-2"
									>
										<Checkbox id={item.id} />
										<label
											htmlFor={item.id}
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											{item.label}
										</label>
									</div>
								))}
							</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="skills">
						<AccordionTrigger>Skills</AccordionTrigger>
						<AccordionContent>
							<div className="space-y-2">
								{filters.skills.map((item) => (
									<div
										key={item.id}
										className="flex items-center space-x-2"
									>
										<Checkbox id={item.id} />
										<label
											htmlFor={item.id}
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											{item.label}
										</label>
									</div>
								))}
							</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="availability">
						<AccordionTrigger>Availability</AccordionTrigger>
						<AccordionContent>
							<div className="space-y-2">
								{filters.availability.map((item) => (
									<div
										key={item.id}
										className="flex items-center space-x-2"
									>
										<Checkbox id={item.id} />
										<label
											htmlFor={item.id}
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											{item.label}
										</label>
									</div>
								))}
							</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</Card>
	);
}
