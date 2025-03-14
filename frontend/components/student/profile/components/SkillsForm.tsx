"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus } from "lucide-react";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type SkillType = {
	technical: { name: string }[];
	soft: { name: string }[];
	languages: { name: string; level: string }[];
	newTechSkill: string;
	newSoftSkill: string;
	newLanguageName: string;
	newLanguageLevel: string;
};

type SkillsFormProps = {
	initialData?: Omit<
		SkillType,
		"newTechSkill" | "newSoftSkill" | "newLanguageName" | "newLanguageLevel"
	>;
	onSubmit: (
		data: Omit<
			SkillType,
			| "newTechSkill"
			| "newSoftSkill"
			| "newLanguageName"
			| "newLanguageLevel"
		>
	) => void;
	onCancel: () => void;
};

export function SkillsForm({
	initialData,
	onSubmit,
	onCancel,
}: SkillsFormProps) {
	const form = useForm<SkillType>({
		defaultValues: {
			technical: initialData?.technical || [],
			soft: initialData?.soft || [],
			languages: initialData?.languages || [],
			// newTechSkill: "",
			// newSoftSkill: "",
			// newLanguageName: "",
			// newLanguageLevel: "",
		},
	});

	const { control, handleSubmit, watch, setValue } = form;

	const technicalSkills = useFieldArray({
		control,
		name: "technical",
	});

	const softSkills = useFieldArray({
		control,
		name: "soft",
	});

	const languages = useFieldArray({
		control,
		name: "languages",
	});

	const submitHandler = (data: SkillType) => {
		const { soft, technical, languages } = data;
		const submissionData = { soft, technical, languages };
		onSubmit(submissionData);
	};

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
				{/* Technical Skills */}
				<div>
					<h3 className="text-sm font-medium">Technical Skills</h3>
					<div className="flex flex-wrap gap-2 mt-2">
						{technicalSkills.fields.map((field, index) => (
							<Badge
								key={field.id}
								variant="secondary"
								className="flex items-center gap-1"
							>
								{watch(`technical.${index}.name`)}
								<button
									type="button"
									onClick={() =>
										technicalSkills.remove(index)
									}
									className="ml-1 text-red-500"
								>
									<Trash2 size={14} />
								</button>
							</Badge>
						))}
					</div>
					<div className="flex gap-2 mt-2">
						<FormField
							control={control}
							name="newTechSkill"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormControl>
										<Input
											placeholder="Add new skill"
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<Button
							type="button"
							variant="outline"
							onClick={() => {
								const newSkill = watch("newTechSkill")?.trim();
								if (newSkill) {
									technicalSkills.append({ name: newSkill });
									setValue("newTechSkill", "");
								}
							}}
						>
							<Plus size={16} />
						</Button>
					</div>
				</div>

				{/* Soft Skills */}
				<div>
					<h3 className="text-sm font-medium">Soft Skills</h3>
					<div className="flex flex-wrap gap-2 mt-2">
						{softSkills.fields.map((field, index) => (
							<Badge
								key={field.id}
								variant="outline"
								className="flex items-center gap-1"
							>
								{watch(`soft.${index}.name`)}
								<button
									type="button"
									onClick={() => softSkills.remove(index)}
									className="ml-1 text-red-500"
								>
									<Trash2 size={14} />
								</button>
							</Badge>
						))}
					</div>
					<div className="flex gap-2 mt-2">
						<FormField
							control={control}
							name="newSoftSkill"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormControl>
										<Input
											placeholder="Add new skill"
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<Button
							type="button"
							variant="outline"
							onClick={() => {
								const newSkill = watch("newSoftSkill")?.trim();
								if (newSkill) {
									softSkills.append({ name: newSkill });
									setValue("newSoftSkill", "");
								}
							}}
						>
							<Plus size={16} />
						</Button>
					</div>
				</div>

				{/* Languages */}
				<div>
					<h3 className="text-sm font-medium">Languages</h3>
					<div className="space-y-2 mt-2">
						{languages.fields.map((field, index) => (
							<div
								key={field.id}
								className="flex items-center justify-between text-sm"
							>
								<span>
									{watch(`languages.${index}.name`)} (
									{watch(`languages.${index}.level`)})
								</span>
								<Button
									type="button"
									variant="ghost"
									onClick={() => languages.remove(index)}
									className="text-red-500"
								>
									<Trash2 size={16} />
								</Button>
							</div>
						))}
					</div>
					<div className="flex gap-2 mt-2">
						<FormField
							control={control}
							name="newLanguageName"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormControl>
										<Input
											placeholder="Language"
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={control}
							name="newLanguageLevel"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormControl>
										<Input
											placeholder="Proficiency"
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<Button
							type="button"
							variant="outline"
							onClick={() => {
								const newLang =
									watch("newLanguageName")?.trim();
								const newLevel =
									watch("newLanguageLevel")?.trim();
								if (newLang && newLevel) {
									languages.append({
										name: newLang,
										level: newLevel,
									});
									setValue("newLanguageName", "");
									setValue("newLanguageLevel", "");
								}
							}}
						>
							<Plus size={16} />
						</Button>
					</div>
				</div>

				{/* Actions */}
				<div className="flex justify-end gap-2 mt-4">
					<Button
						type="button"
						variant="secondary"
						onClick={onCancel}
					>
						Cancel
					</Button>
					<Button type="submit">Save Changes</Button>
				</div>
			</form>
		</Form>
	);
}
