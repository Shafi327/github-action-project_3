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

interface ApplicationsFiltersProps {
	className?: string;
}

const filters = {
	stage: [
		{ id: "screening", label: "Screening" },
		{ id: "interview", label: "Interview" },
		{ id: "technical", label: "Technical Assessment" },
		{ id: "offer", label: "Offer" },
		{ id: "hired", label: "Hired" },
		{ id: "rejected", label: "Rejected" },
	],
	position: [
		{ id: "frontend", label: "Frontend Developer" },
		{ id: "backend", label: "Backend Developer" },
		{ id: "fullstack", label: "Full Stack Developer" },
		{ id: "design", label: "UI/UX Designer" },
		{ id: "product", label: "Product Manager" },
	],
	rating: [
		{ id: "5", label: "5 Stars" },
		{ id: "4", label: "4 Stars & Up" },
		{ id: "3", label: "3 Stars & Up" },
	],
	source: [
		{ id: "website", label: "Company Website" },
		{ id: "linkedin", label: "LinkedIn" },
		{ id: "referral", label: "Employee Referral" },
		{ id: "agency", label: "Recruitment Agency" },
	],
};

export function ApplicationsFilters({ className }: ApplicationsFiltersProps) {
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
					<AccordionItem value="stage">
						<AccordionTrigger>Application Stage</AccordionTrigger>
						<AccordionContent>
							<div className="space-y-2">
								{filters.stage.map((item) => (
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
					<AccordionItem value="position">
						<AccordionTrigger>Position</AccordionTrigger>
						<AccordionContent>
							<div className="space-y-2">
								{filters.position.map((item) => (
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
					<AccordionItem value="rating">
						<AccordionTrigger>Candidate Rating</AccordionTrigger>
						<AccordionContent>
							<div className="space-y-2">
								{filters.rating.map((item) => (
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
					<AccordionItem value="source">
						<AccordionTrigger>Source</AccordionTrigger>
						<AccordionContent>
							<div className="space-y-2">
								{filters.source.map((item) => (
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
