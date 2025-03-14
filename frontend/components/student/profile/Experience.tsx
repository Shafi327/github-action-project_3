"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, Edit, Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DeleteModal, ExperienceForm } from "./components";
import {
	useAddStudentExperience,
	useDeleteStudentExperience,
	useUpdateStudentExperience,
} from "@/hooks";
import { toast } from "@/hooks/use-toast";
import Modal from "@/components/modal/Modal";

const experience = [
	{
		position: "Software Engineering Intern",
		company: "Tech Solutions Inc.",
		period: "Jun 2023 - Aug 2023",
		location: "San Francisco, CA",
		description: [
			"Developed and maintained web applications using React and Node.js",
			"Collaborated with senior developers on improving application performance",
			"Implemented responsive designs and user interface components",
		],
		skills: ["React", "Node.js", "TypeScript", "Git"],
	},
	{
		position: "Web Development Project Lead",
		company: "University Tech Club",
		period: "Sep 2022 - Present",
		location: "University Campus",
		description: [
			"Lead a team of 5 students in developing the club's website",
			"Organized weekly coding workshops for club members",
			"Implemented agile methodologies for project management",
		],
		skills: ["Leadership", "Next.js", "Tailwind CSS", "Team Management"],
	},
];

export function Experience({ data }: any) {
	console.log("data", data);
	const [editingIndex, setEditingIndex] = useState(null);
	const [isAddingNew, setIsAddingNew] = useState(data?.length === 0);

	const { mutate } = useAddStudentExperience();
	const { mutate: update } = useUpdateStudentExperience();
	const { mutate: deleteExperience } = useDeleteStudentExperience();

	const handleSubmit = (data: any, id?: number) => {
		setEditingIndex(null);
		setIsAddingNew(false);
		if (!isAddingNew) {
			// update api here
			update(
				{ id: id, body: data },
				{
					onSuccess: () => {
						toast({
							title: "Experience Updated",
							description:
								"Your experience has been updated successfully.",
							variant: "success",
						});
					},
					onError: (err) => {
						toast({
							title: "Error",
							description: `Error while updating experience please try again.
							`,
							variant: "destructive",
						});
					},
				}
			);
		}
		if (isAddingNew) {
			mutate(data, {
				onSuccess: () => {
					toast({
						title: "Experience Added",
						description:
							"Your experience has been added successfully.",
						variant: "success",
					});
				},
				onError: (err) => {
					toast({
						title: "Error",
						description: `${
							err ??
							"Error while adding experience please try again."
						} `,
						variant: "destructive",
					});
				},
			});
		}
	};

	const handleDelete = (id: any) => {
		deleteExperience(id, {
			onSuccess: () => {
				toast({
					title: "Experience Deleted",
					description:
						"Your experience has been deleted successfully.",
					variant: "success",
				});
			},
			onError: (err) => {
				toast({
					title: "Error",
					description: `
						"Error while deleting experience please try again."
					`,
					variant: "destructive",
				});
			},
		});
	};

	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between">
				<div>
					<CardTitle>Experience</CardTitle>
					<CardDescription>
						Your work history and projects
					</CardDescription>
				</div>
				{!isAddingNew && editingIndex === null && (
					<Button onClick={() => setIsAddingNew(true)}>
						<Plus className="h-4 w-4 mr-2" /> Add Experience
					</Button>
				)}
			</CardHeader>
			<CardContent className="space-y-6">
				{isAddingNew && (
					<ExperienceForm
						onSubmit={(data: any) => handleSubmit(data)}
						onCancel={() => {
							setIsAddingNew(false);
							// if (experiences.length === 0) setIsAddingNew(true);
						}}
					/>
				)}

				{data?.map((exp: any, index: any) => (
					<div key={index}>
						{editingIndex === index ? (
							<ExperienceForm
								experience={exp}
								onSubmit={(data: any) =>
									handleSubmit(data, exp?.id)
								}
								onCancel={() => setEditingIndex(null)}
							/>
						) : (
							<div className="space-y-2">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2">
										<Briefcase className="h-5 w-5 text-primary" />
										<h3 className="font-semibold">
											{exp?.position}
										</h3>
									</div>
									<div className="flex gap-2">
										<Button
											variant="ghost"
											size="icon"
											onClick={() =>
												setEditingIndex(index)
											}
										>
											<Edit className="h-4 w-4 text-blue-500" />
										</Button>
										<Modal>
											<Modal.Open opens="deleteApplication">
												<Button
													variant="ghost"
													size="icon"
													// onClick={() =>
													// 	handleDelete(exp?.id)
													// }
												>
													<Trash className="h-4 w-4 text-red-500" />
												</Button>
											</Modal.Open>
											<Modal.Window name="deleteApplication">
												<DeleteModal
													handleDelete={
														deleteExperience
													}
													id={exp?.id}
												/>
											</Modal.Window>
										</Modal>
									</div>
								</div>
								<div className="ml-7 space-y-2">
									<p className="text-muted-foreground">
										{exp?.company}
									</p>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<Calendar className="h-4 w-4" />
										<span>{exp.period}</span>
										<span>•</span>
										<span>{exp.location}</span>
									</div>
									<ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
										{exp?.description.map(
											(item: any, itemIndex: any) => (
												<li key={itemIndex}>{item}</li>
											)
										)}
									</ul>
									<div className="flex flex-wrap gap-2 pt-2">
										{exp?.skills?.map(
											(skill: any, skillIndex: any) => (
												<Badge
													key={skillIndex}
													variant="secondary"
												>
													{skill}
												</Badge>
											)
										)}
									</div>
								</div>
								{index < data?.length - 1 && (
									<hr className="my-4" />
								)}
							</div>
						)}
					</div>
				))}
			</CardContent>
		</Card>
	);
}
