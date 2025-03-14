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

interface JobFiltersProps {
	className?: string;
}

const filters = {
	experience: [
		{ id: "entry", label: "Entry Level" },
		{ id: "mid", label: "Mid Level" },
		{ id: "senior", label: "Senior Level" },
		{ id: "lead", label: "Lead" },
	],
	location: [
		{ id: "remote", label: "Remote" },
		{ id: "hybrid", label: "Hybrid" },
		{ id: "onsite", label: "On-site" },
	],
	industry: [
		{ id: "tech", label: "Technology" },
		{ id: "finance", label: "Finance" },
		{ id: "healthcare", label: "Healthcare" },
		{ id: "education", label: "Education" },
		{ id: "retail", label: "Retail" },
	],
	skills: [
		{ id: "javascript", label: "JavaScript" },
		{ id: "python", label: "Python" },
		{ id: "react", label: "React" },
		{ id: "node", label: "Node.js" },
		{ id: "sql", label: "SQL" },
		{ id: "aws", label: "AWS" },
	],
};

export function JobFilters({ className }: JobFiltersProps) {
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
					<AccordionItem value="location">
						<AccordionTrigger>Location Type</AccordionTrigger>
						<AccordionContent>
							<div className="space-y-2">
								{filters.location.map((item) => (
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
					<AccordionItem value="industry">
						<AccordionTrigger>Industry</AccordionTrigger>
						<AccordionContent>
							<div className="space-y-2">
								{filters.industry.map((item) => (
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
						<AccordionTrigger>Required Skills</AccordionTrigger>
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
				</Accordion>
			</div>
		</Card>
	);
}
