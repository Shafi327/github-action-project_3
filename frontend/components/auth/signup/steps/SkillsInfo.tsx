"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useSignup } from "@/context/SignupContext";

const formSchema = z.object({
	skills: z.array(z.string()).min(1, "Please select at least one skill"),
	languages: z
		.array(z.string())
		.min(1, "Please select at least one language"),
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
];

const languages = [
	"English",
	"Spanish",
	"French",
	"German",
	"Chinese",
	"Japanese",
	"Korean",
	"Arabic",
];

interface SkillsInfoProps {
	onNext: () => void;
	onPrev: () => void;
}

export function SkillsInfo({ onNext, onPrev }: SkillsInfoProps) {
	const { updateState, signupState } = useSignup();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			skills: signupState?.skills?.skills ?? [],
			languages: signupState?.skills?.languages ?? [],
		},
	});

	const [skillsOpen, setSkillsOpen] = useState(false);
	const [languagesOpen, setLanguagesOpen] = useState(false);

	function onSubmit(values: z.infer<typeof formSchema>) {
		// setAssignStepSubmission((prevState: any) => ({
		// 	...prevState,
		// 	skills: {
		// 		...values,
		// 	},
		// }));
		updateState("skills", values);
		onNext();
	}

	function toggleSelection(
		selected: string,
		current: string[],
		onChange: (value: string[]) => void
	) {
		const newValue = current.includes(selected)
			? current.filter((item) => item !== selected)
			: [...current, selected];
		onChange(newValue);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				{/* Skills */}
				<FormField
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
				/>

				{/* Languages */}
				<FormField
					control={form.control}
					name="languages"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Languages</FormLabel>
							<Popover
								open={languagesOpen}
								onOpenChange={setLanguagesOpen}
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
												setLanguagesOpen(!languagesOpen)
											}
										>
											{field.value.length
												? `${field.value.length} selected`
												: "Select languages"}
											<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-full p-2">
									<div className="space-y-2">
										{languages.map((language) => (
											<div
												key={language}
												className="flex items-center cursor-pointer"
												onClick={() =>
													toggleSelection(
														language,
														field.value,
														field.onChange
													)
												}
											>
												<Check
													className={cn(
														"mr-2 h-4 w-4",
														field.value.includes(
															language
														)
															? "opacity-100"
															: "opacity-0"
													)}
												/>
												<span>{language}</span>
											</div>
										))}
									</div>
								</PopoverContent>
							</Popover>
							{field.value.length > 0 && (
								<div className="mt-3 flex flex-wrap gap-2">
									{field.value.map((language) => (
										<Badge
											key={language}
											variant="secondary"
											className="cursor-pointer"
											onClick={() =>
												toggleSelection(
													language,
													field.value,
													field.onChange
												)
											}
										>
											{language} ×
										</Badge>
									))}
								</div>
							)}
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Navigation Buttons */}
				<div className="flex justify-between">
					<Button type="button" variant="outline" onClick={onPrev}>
						Back
					</Button>
					<Button type="submit">Continue</Button>
				</div>
			</form>
		</Form>
	);
}
