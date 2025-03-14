"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextInput, SelectInput } from "@/components/ui/forms";

const teamSchema = z.object({
	primaryContact: z.object({
		name: z.string().min(2, "Name is required"),
		position: z.string().min(2, "Position is required"),
		email: z.string().email("Please enter a valid email"),
		phone: z
			.string()
			.regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),
	}),
	hrContact: z.object({
		name: z.string().min(2, "Name is required"),
		email: z.string().email("Please enter a valid email"),
		phone: z
			.string()
			.regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),
	}),
	hiringManager: z.object({
		name: z.string().min(2, "Name is required"),
		department: z.string().min(2, "Department is required"),
		email: z.string().email("Please enter a valid email"),
	}),
});

interface TeamDetailsFormProps {
	onComplete: (data: z.infer<typeof teamSchema>) => void;
	onBack: () => void;
}

export function TeamDetailsForm({ onComplete, onBack }: TeamDetailsFormProps) {
	const form = useForm<z.infer<typeof teamSchema>>({
		resolver: zodResolver(teamSchema),
		defaultValues: {
			primaryContact: {
				name: "",
				position: "",
				email: "",
				phone: "",
			},
			hrContact: {
				name: "",
				email: "",
				phone: "",
			},
			hiringManager: {
				name: "",
				department: "",
				email: "",
			},
		},
	});

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onComplete)}
				className="space-y-8"
			>
				{/* Primary Contact */}
				<div className="space-y-6">
					<h3 className="text-lg font-semibold">Primary Contact</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<TextInput
							control={form.control}
							name="primaryContact.name"
							label="Full Name"
							placeholder="Enter full name"
						/>
						<TextInput
							control={form.control}
							name="primaryContact.position"
							label="Position"
							placeholder="Enter position"
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<TextInput
							control={form.control}
							name="primaryContact.email"
							label="Email"
							placeholder="Enter email"
						/>
						<TextInput
							control={form.control}
							name="primaryContact.phone"
							label="Phone"
							placeholder="Enter phone number"
						/>
					</div>
				</div>

				{/* HR Contact */}
				<div className="space-y-6">
					<h3 className="text-lg font-semibold">HR Contact</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<TextInput
							control={form.control}
							name="hrContact.name"
							label="Full Name"
							placeholder="Enter full name"
						/>
						<TextInput
							control={form.control}
							name="hrContact.email"
							label="Email"
							placeholder="Enter email"
						/>
					</div>
					<TextInput
						control={form.control}
						name="hrContact.phone"
						label="Phone"
						placeholder="Enter phone number"
					/>
				</div>

				{/* Hiring Manager */}
				<div className="space-y-6">
					<h3 className="text-lg font-semibold">Hiring Manager</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<TextInput
							control={form.control}
							name="hiringManager.name"
							label="Full Name"
							placeholder="Enter full name"
						/>
						<TextInput
							control={form.control}
							name="hiringManager.department"
							label="Department"
							placeholder="Enter department"
						/>
					</div>
					<TextInput
						control={form.control}
						name="hiringManager.email"
						label="Email"
						placeholder="Enter email"
					/>
				</div>

				<div className="flex justify-between">
					<Button type="button" variant="outline" onClick={onBack}>
						Back
					</Button>
					<Button type="submit">Next</Button>
				</div>
			</form>
		</Form>
	);
}
