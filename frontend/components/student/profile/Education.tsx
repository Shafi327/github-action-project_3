"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Calendar, PlusCircle, Trash, Edit } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { EducationForm } from "./components/EducationForm";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	useAddStudentEducation,
	useDeleteStudentEducation,
	useUpdateStudentEducation,
} from "@/hooks";
import { toast } from "@/hooks/use-toast";
import Modal from "@/components/modal/Modal";
import { DeleteEducationModal } from "./components";

// const education = [
// 	{
// 		degree: "Bachelor of Science in Computer Science",
// 		school: "University of Technology",
// 		period: "2020 - 2024",
// 		gpa: "3.8/4.0",
// 		courses: [
// 			"Data Structures",
// 			"Algorithms",
// 			"Web Development",
// 			"AI & ML",
// 		],
// 	},
// 	{
// 		degree: "High School Diploma",
// 		school: "Tech High School",
// 		period: "2016 - 2020",
// 		gpa: "4.0/4.0",
// 		courses: ["Computer Science", "Mathematics", "Physics"],
// 	},
// ];

export function Education({ education }: any) {
	console.log("data", education);
	const [editingIndex, setEditingIndex] = useState<number | null>(null);
	const [isAdding, setIsAdding] = useState(false);

	const { mutate: addEducation } = useAddStudentEducation();
	const { mutate: updateEducation } = useUpdateStudentEducation();
	const { mutate: deleteEducation } = useDeleteStudentEducation();
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		control,
		formState: { errors },
	} = useForm<any>();

	// Handle form submission for add/edit
	const onSubmit = (data: any, id?: number) => {
		if (editingIndex !== null) {
			console.log("onSubmit updated", data);
			// Update API call here
			updateEducation(
				{ id: id, body: data },
				{
					onSuccess: () => {
						toast({
							title: "Education updated",
							description: `Education details updated successfully.`,
							variant: "success",
						});
					},
					onError: () => {
						toast({
							title: "Error",
							description: `Error updating education details.`,
							variant: "destructive",
						});
					},
				}
			);
		}
		if (isAdding) {
			addEducation(data, {
				onSuccess: () => {
					toast({
						title: "Education added",
						description: `Education details added successfully.`,
						variant: "success",
					});
				},
				onError: () => {
					toast({
						title: "Error",
						description: `Error while adding education details please try again.`,
						variant: "destructive",
					});
				},
			});
		}

		reset();
		setIsAdding(false);
	};

	// Handle edit
	const handleEdit = (index: number) => {
		setEditingIndex(index);
	};

	const handleCancel = () => {
		setEditingIndex(null);
		setIsAdding(false);
		reset();
	};
	return (
		<Card>
			<CardHeader>
				<CardTitle>Education</CardTitle>
				<CardDescription>
					Your academic background and achievements
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				{isAdding && (
					<EducationForm
						// initialData={data}
						onSubmit={(data: any) => onSubmit(data)}
						onCancel={handleCancel}
					/>
				)}

				{education?.length > 0 ? (
					education?.map((edu: any, index: number) => (
						<div key={index} className="space-y-2">
							{editingIndex === index ? (
								<EducationForm
									initialData={edu}
									onSubmit={(data: any) =>
										onSubmit(data, edu?.id)
									}
									onCancel={handleCancel}
								/>
							) : (
								<>
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<GraduationCap className="h-5 w-5 text-primary" />
											<h3 className="font-semibold capitalize">
												{edu?.degreeType}
											</h3>
										</div>
										<div className="flex gap-2">
											<Button
												variant="ghost"
												size="icon"
												onClick={() =>
													handleEdit(index)
												}
											>
												<Edit className="h-4 w-4 text-blue-500" />
											</Button>

											<Modal>
												<Modal.Open opens="deleteApplication">
													<Button
														variant="ghost"
														size="icon"
													>
														<Trash className="h-4 w-4 text-red-500" />
													</Button>
												</Modal.Open>
												<Modal.Window name="deleteApplication">
													<DeleteEducationModal
														handleDelete={
															deleteEducation
														}
														id={edu?.id}
													/>
												</Modal.Window>
											</Modal>
										</div>
									</div>
									<div className="ml-7 space-y-1">
										<p className="text-muted-foreground">
											{edu.university}
										</p>
										<div className="flex items-center gap-2 text-sm text-muted-foreground">
											<Calendar className="h-4 w-4" />
											<span>{edu?.year}</span>
											<Badge variant="secondary">
												GPA: {edu?.gpa}
											</Badge>
										</div>
									</div>
									{index < education?.length - 1 && (
										<hr className="my-4" />
									)}
								</>
							)}
						</div>
					))
				) : (
					<p className="text-sm text-muted-foreground">
						No education details added yet.
					</p>
				)}

				{/* Show Add Button if Not Editing */}
				{!isAdding && (
					<Button
						onClick={() => setIsAdding(true)}
						className="w-full"
					>
						<PlusCircle className="h-5 w-5 mr-2" />
						Add Education
					</Button>
				)}
			</CardContent>
		</Card>
	);
}
