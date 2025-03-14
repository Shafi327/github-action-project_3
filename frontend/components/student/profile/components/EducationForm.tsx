import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextArea, TextInput } from "@/components/ui/forms";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
// Your custom textarea component

type EducationType = {
	university: string;
	year: string;
	gpa: string;
	degreeType: string;
};

type EducationFormProps = {
	initialData?: EducationType | null;
	onSubmit: (data: EducationType) => void;
	onCancel: () => void;
};

export function EducationForm({
	initialData,
	onSubmit,
	onCancel,
}: EducationFormProps) {
	console.log('initialData', initialData);
	const form = useForm<any>({
		defaultValues: {
			university: initialData?.university ?? "",
			year: initialData?.year ?? "",
			gpa: initialData?.gpa ?? "",
			degreeType: initialData?.degreeType ?? "",
		},
	});

	const submitHandler = (data: any) => {
		onSubmit(data);
		form.reset();
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(submitHandler)}
				className="space-y-4"
			>
				<TextInput
					control={form.control}
					name="university"
					label="School/University"
					placeholder="University of XYZ"
				/>
				<TextInput
					control={form.control}
					name="year"
					label="Duration"
					placeholder="2020 - 2024"
				/>
				<TextInput
					control={form.control}
					name="gpa"
					label="GPA"
					placeholder="3.8/4.0"
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
									<SelectItem value="metric">
										Metric
									</SelectItem>
									<SelectItem value="fsc">Fsc</SelectItem>
									<SelectItem value="ics">ICS</SelectItem>
									<SelectItem value="undergraduate">
										Undergraduate
									</SelectItem>
									<SelectItem value="graduate">
										Master
									</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex justify-end gap-2">
					<Button
						type="button"
						variant="secondary"
						onClick={onCancel}
					>
						Cancel
					</Button>
					<Button type="submit">
						{initialData ? "Update" : "Add"}
					</Button>
				</div>
			</form>
		</Form>
	);
}
