"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextInput, SelectInput, TextArea } from "@/components/ui/forms";
import { Input } from "@/components/ui/input";

const companySchema = z.object({
	companyName: z
		.string()
		.min(2, "Company name must be at least 2 characters"),
	industry: z.string().min(1, "Please select your industry"),
	companySize: z.string().min(1, "Please select company size"),
	website: z.string().url("Please enter a valid website URL"),
	description: z
		.string()
		.min(100, "Company description must be at least 100 characters"),
	address: z.string().min(1, "Address is required"),
	city: z.string().min(1, "City is required"),
	country: z.string().min(1, "Country is required"),
	avatar: z.any().optional(),
});

interface CompanyDetailsFormProps {
	onComplete: (data: z.infer<typeof companySchema>) => void;
	onBack: () => void;
}

export function CompanyDetailsForm({
	onComplete,
	onBack,
}: CompanyDetailsFormProps) {
	const form = useForm<z.infer<typeof companySchema>>({
		mode: "all",
		resolver: zodResolver(companySchema),
	});

	const industryOptions = [
		{ label: "Technology", value: "technology" },
		{ label: "Finance", value: "finance" },
		{ label: "Healthcare", value: "healthcare" },
		{ label: "Education", value: "education" },
		{ label: "Manufacturing", value: "manufacturing" },
		{ label: "Retail", value: "retail" },
		{ label: "Other", value: "other" },
	];

	const companySizeOptions = [
		{ label: "1-10 employees", value: "1-10" },
		{ label: "11-50 employees", value: "11-50" },
		{ label: "51-200 employees", value: "51-200" },
		{ label: "201-500 employees", value: "201-500" },
		{ label: "501+ employees", value: "501+" },
	];

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onComplete)}
				className="space-y-6"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<TextInput
						control={form.control}
						name="companyName"
						label="Company Name"
						placeholder="Enter your company name"
					/>

					<SelectInput
						name="industry"
						label="Industry"
						options={industryOptions}
						placeholder="Select your industry"
					/>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<SelectInput
						name="companySize"
						label="Company Size"
						options={companySizeOptions}
						placeholder="Select company size"
					/>

					<TextInput
						control={form.control}
						name="website"
						label="Company Website"
						placeholder="https://example.com"
					/>
				</div>

				<TextArea
					name="description"
					label="Company Description"
					placeholder="Tell us about your company, mission, and values"
					description="This will be displayed on your company profile"
				/>

				<TextInput
					control={form.control}
					name="address"
					label="Address"
					placeholder="Enter company address"
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<TextInput
						control={form.control}
						name="city"
						label="City"
						placeholder="Enter city"
					/>

					<TextInput
						control={form.control}
						name="country"
						label="Country"
						placeholder="Enter country"
					/>
				</div>

				{/* <TextInput
					control={form.control}
					name="avatar"
					label="Company Logo"
					type="file"
				/> */}
				<FormField
					control={form.control}
					name="avatar"
					render={({ field: { onChange, value, ...field } }) => (
						<FormItem>
							<FormLabel>Avatar</FormLabel>
							<FormControl>
								<Input
									type="file"
									accept="image/*"
									onChange={(e) => {
										const file = e.target.files?.[0];
										onChange(e?.target?.files?.[0]); // This triggers the transform
									}}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex justify-between">
					<Button type="button" variant="outline" onClick={onBack}>
						Back
					</Button>
					<Button type="submit">Register</Button>
				</div>
			</form>
		</Form>
	);
}
