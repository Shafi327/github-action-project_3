"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useSignup } from "@/context/SignupContext";

const formSchema = z.object({
	university: z.string().min(2, "Please enter your university"),
	degreeType: z.string().min(2, "Please select your course"),
	year: z.string().min(1, "Please select your year"),
	gpa: z.string().optional(),
});

interface EducationInfoProps {
	onNext: () => void;
	onPrev: () => void;
}

export function EducationInfo({ onNext, onPrev }: EducationInfoProps) {
	const { updateState, signupState } = useSignup();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			university: signupState?.education?.university || "",
			degreeType: signupState?.education?.course || "",
			year: signupState?.education?.year || "",
			gpa: signupState?.education?.gpa || "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// setAssignStepSubmission((prevState: any) => ({
		// 	...prevState,
		// 	education: {
		// 		...values,
		// 	},
		// }));
		updateState("education", values);
		onNext();
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="university"
					render={({ field }) => (
						<FormItem>
							<FormLabel>University/College</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter your university"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="degreeType"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Degree Type</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}
							>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select your course" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="cs">
										Computer Science
									</SelectItem>
									<SelectItem value="business">
										Business Administration
									</SelectItem>
									<SelectItem value="engineering">
										Engineering
									</SelectItem>
									<SelectItem value="design">
										Design
									</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="grid gap-4 sm:grid-cols-2">
					<FormField
						control={form.control}
						name="year"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Year</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select year" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="1">
											First Year
										</SelectItem>
										<SelectItem value="2">
											Second Year
										</SelectItem>
										<SelectItem value="3">
											Third Year
										</SelectItem>
										<SelectItem value="4">
											Fourth Year
										</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="gpa"
						render={({ field }) => (
							<FormItem>
								<FormLabel>GPA (Optional)</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter your GPA"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
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
