"use client";

import { useForm, useFieldArray } from "react-hook-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { MultiSelect, TextArea, TextInput } from "@/components/ui/forms";

export const ExperienceForm = ({ experience, onSubmit, onCancel }: any) => {
	const form = useForm<any>({
		defaultValues: {
			position: experience?.position || "",
			company: experience?.company || "",
			period: experience?.period || "",
			location: experience?.location || "",
			// description: experience?.description || "",
			description: experience?.description?.join(",") || "",
			skills: experience?.skills || [],
		},
	});

	const { control, handleSubmit, watch } = form;
	const { fields, append, remove } = useFieldArray({
		control,
		name: "skills",
	});

	const formSubmit = (data: any) => {
		// useAddStudentExperience
		const structuredData = {
			...data,
			// desccription make an array
			description: data?.description
				.split(",")
				.map((item: any) => item.trim()),
		};
		onSubmit(structuredData);
	};

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

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit(formSubmit)} className="space-y-6">
				<TextInput
					control={control}
					name="position"
					label="Position"
					placeholder="Software Engineer"
				/>

				<TextInput
					control={control}
					name="company"
					label="Company"
					placeholder="Tech Company Inc."
				/>

				<TextInput
					control={control}
					name="period"
					label="Period"
					placeholder="Jun 2023 - Present"
				/>

				<TextInput
					control={control}
					name="location"
					label="Location"
					placeholder="San Francisco, CA"
				/>

				<TextArea
					name="description"
					label="Description"
					placeholder="Enter your responsibilities and achievements (one per line)"
					description="Each line will be displayed as a separate bullet point"
				/>

				{/* Skills Section */}
				{/* <div className="space-y-2">
					<label className="text-sm font-medium">Skills</label>
					<div className="flex flex-wrap gap-2 mb-2">
						{fields?.map((skill: any, index: any) => (
							<Badge
								key={skill.id}
								variant="secondary"
								className="flex items-center gap-1"
							>
								{skill?.value ?? "NA"}
								<X
									className="h-3 w-3 cursor-pointer"
									onClick={() => remove(index)}
								/>
							</Badge>
						))}
					</div>
					<div className="flex gap-2">
						<TextInput
							name="newSkill"
							placeholder="Add a skill..."
						/>
						<Button
							type="button"
							onClick={() => {
								const newSkill: any = watch("newSkill");
								if (newSkill?.trim()) {
									append({ value: newSkill.trim() });
									form.setValue("newSkill", "");
								}
							}}
						>
							Add
						</Button>
					</div>
				</div> */}
				<MultiSelect
					control={form.control}
					name="skills"
					label="Technical Skills"
					options={skills}
					placeholder="Select skills"
				/>

				<div className="flex justify-end gap-2 mt-4">
					<Button type="button" variant="ghost" onClick={onCancel}>
						Cancel
					</Button>
					<Button
						type="submit"
						variant={experience ? "success" : "primary"}
					>
						{experience ? "Update" : "Add"}
					</Button>
				</div>
			</form>
		</Form>
	);
};
