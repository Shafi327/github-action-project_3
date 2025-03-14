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

interface StudentsFiltersProps {
	className?: string;
}

const filters = {
	year: [
		{ id: "first", label: "First Year" },
		{ id: "second", label: "Second Year" },
		{ id: "third", label: "Third Year" },
		{ id: "fourth", label: "Fourth Year" },
	],
	course: [
		{ id: "cs", label: "Computer Science" },
		{ id: "business", label: "Business" },
		{ id: "engineering", label: "Engineering" },
		{ id: "design", label: "Design" },
	],
	skills: [
		{ id: "programming", label: "Programming" },
		{ id: "design", label: "Design" },
		{ id: "marketing", label: "Marketing" },
		{ id: "analytics", label: "Analytics" },
	],
	status: [
		{ id: "active", label: "Active" },
		{ id: "inactive", label: "Inactive" },
		{ id: "graduated", label: "Graduated" },
	],
};

export function StudentsFilters({ className }: StudentsFiltersProps) {
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
					<AccordionItem value="year">
						<AccordionTrigger>Year</AccordionTrigger>
						<AccordionContent>
							<div className="space-y-2">
								{filters.year.map((item) => (
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
					<AccordionItem value="course">
						<AccordionTrigger>Course</AccordionTrigger>
						<AccordionContent>
							<div className="space-y-2">
								{filters.course.map((item) => (
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
					<AccordionItem value="status">
						<AccordionTrigger>Status</AccordionTrigger>
						<AccordionContent>
							<div className="space-y-2">
								{filters.status.map((item) => (
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
