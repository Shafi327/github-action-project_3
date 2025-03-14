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
	department: [
		{ id: "engineering", label: "Engineering" },
		{ id: "design", label: "Design" },
		{ id: "product", label: "Product" },
		{ id: "marketing", label: "Marketing" },
	],
	type: [
		{ id: "full-time", label: "Full Time" },
		{ id: "part-time", label: "Part Time" },
		{ id: "contract", label: "Contract" },
		{ id: "internship", label: "Internship" },
	],
	location: [
		{ id: "remote", label: "Remote" },
		{ id: "hybrid", label: "Hybrid" },
		{ id: "onsite", label: "On-site" },
	],
	experience: [
		{ id: "entry", label: "Entry Level" },
		{ id: "mid", label: "Mid Level" },
		{ id: "senior", label: "Senior Level" },
		{ id: "lead", label: "Lead" },
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
					<AccordionItem value="department">
						<AccordionTrigger>Department</AccordionTrigger>
						<AccordionContent>
							<div className="space-y-2">
								{filters.department.map((item) => (
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
					<AccordionItem value="type">
						<AccordionTrigger>Job Type</AccordionTrigger>
						<AccordionContent>
							<div className="space-y-2">
								{filters.type.map((item) => (
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
				</Accordion>
			</div>
		</Card>
	);
}
