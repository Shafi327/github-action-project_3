"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MultiSelect, TextArea, TextInput } from "@/components/ui";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const jobSchema = z.object({
	title: z.string().min(5, "Title must be at least 5 characters"),
	department: z
		.string()
		.min(5, "Department name must be at least 5 characters"),
	jobType: z.string().min(5, "Job type must be at least 5 characters"),
	jobDescription: z
		.string()
		.min(2, "Job description must be at least 100 characters"),
	keyResponsibilities: z
		.string()
		.min(2, "Job description must be at least 100 characters"),
	requirements: z
		.string()
		.min(2, "Job description must be at least 100 characters"),
	skills: z.array(z.string()).min(1, "Please select at least one skill"),
});

export const CreateJobForm = ({
	editData,
	onSubmit,
	isLoading,
}: {
	onSubmit: any;
	editData?: any;
	isLoading?: boolean;
}) => {
	const [skillsOpen, setSkillsOpen] = useState(false);
	const form = useForm<z.infer<typeof jobSchema>>({
		mode: "all",
		// resolver: zodResolver(jobSchema),
		defaultValues: {
			title: editData?.title ?? "",
			department: editData?.department ?? "",
			jobType: editData?.jobType ?? "",
			jobDescription: editData?.jobDescription ?? "",
			keyResponsibilities: editData?.keyResponsibilities ?? "",
			requirements: editData?.requirements ?? "",
			skills: editData?.skills ?? [],
		},
	});
	const skills = [
		"JavaScript",
		"TypeScript",
		"React",
		"Node.js",
		"Python",
		"Java",
		"SQL",
		"Git",
		"AWS",
		"Docker",
		"SEO",
		"Google Ads",
		"Social Media Marketing",
		"HRIS",
		"Recruiting",
		"Employee Engagement",
		"TensorFlow",
		"SQL",
	];

	// function toggleSelection(
	// 	selected: string,
	// 	current: string[],
	// 	onChange: (value: string[]) => void
	// ) {
	// 	const newValue = current.includes(selected)
	// 		? current.filter((item) => item !== selected)
	// 		: [...current, selected];
	// 	onChange(newValue);
	// }

	return (
		<div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<TextInput
						control={form.control}
						name="title"
						label="Job Title "
						placeholder="Enter Job Title"
					/>
					<TextInput
						control={form.control}
						name="salary"
						label="Salary "
						placeholder="Enter salary range $100k-$200k"
					/>
					<TextInput
						control={form.control}
						name="department"
						label="Department "
						placeholder="Enter your department"
					/>
					<TextInput
						control={form.control}
						name="jobType"
						label="Job Type"
						placeholder="Enter your job type"
					/>
					<TextArea
						name="jobDescription"
						label="Company Description"
						placeholder="Tell us about your company, mission, and values"
						description="This will be displayed on your company profile"
					/>
					<TextArea
						name="keyResponsibilities"
						label="Key Responsibilities"
						placeholder="What are the key responsibilities of the job?"
						description="This will show responsibilities on the job listing"
					/>
					<TextArea
						name="requirements"
						label="Requirements"
						placeholder="Job requirements like qualification, experience etc"
						description="This will show requirements on the job listing"
					/>
					{/* <FormField
						control={form.control}
						name="skills"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Technical Skills</FormLabel>
								<Popover
									open={skillsOpen}
									onOpenChange={setSkillsOpen}
								>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant="outline"
												role="combobox"
												className={cn(
													"w-full justify-between",
													!field.value.length &&
														"text-muted-foreground"
												)}
												onClick={() =>
													setSkillsOpen(!skillsOpen)
												}
											>
												{field.value.length
													? `${field.value.length} selected`
													: "Select skills"}
												<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent className="w-full p-2">
										<div className="space-y-2">
											{skills.map((skill) => (
												<div
													key={skill}
													className="flex items-center cursor-pointer"
													onClick={() =>
														toggleSelection(
															skill,
															field.value,
															field.onChange
														)
													}
												>
													<Check
														className={cn(
															"mr-2 h-4 w-4",
															field.value.includes(
																skill
															)
																? "opacity-100"
																: "opacity-0"
														)}
													/>
													<span>{skill}</span>
												</div>
											))}
										</div>
									</PopoverContent>
								</Popover>
								{field.value.length > 0 && (
									<div className="mt-3 flex flex-wrap gap-2">
										{field.value.map((skill) => (
											<Badge
												key={skill}
												variant="secondary"
												className="cursor-pointer"
												onClick={() =>
													toggleSelection(
														skill,
														field.value,
														field.onChange
													)
												}
											>
												{skill} ×
											</Badge>
										))}
									</div>
								)}
								<FormMessage />
							</FormItem>
						)}
					/> */}
					<MultiSelect
						control={form.control}
						name="skills"
						label="Technical Skills"
						options={skills}
						placeholder="Select skills"
					/>
					{isLoading ? (
						<Skeleton className="w-20 h-12 rounded-lg" />
					) : (
						<Button type="submit">
							{editData ? "Update Job" : "Post Job"}
						</Button>
					)}
				</form>
			</Form>
		</div>
	);
};
