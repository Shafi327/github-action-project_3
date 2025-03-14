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
import { useSignup } from "@/context/SignupContext";
import { CheckboxInput, TextInput } from "@/components/ui";

const formSchema = z.object({
	firstName: z.string().min(2, "First name must be at least 2 characters"),
	lastName: z.string().min(2, "Last name must be at least 2 characters"),
	phone: z.string().min(10, "Please enter a valid phone number"),
	location: z.string().min(2, "Please enter your location"),
	// checkbox
	check: z.boolean().optional(),
	// check: z.boolean().refine((val) => val === true, {
	// 	message: "You must accept this condition",
	// }),
});

interface PersonalInfoProps {
	onNext: () => void;
}

export function PersonalInfo({ onNext }: PersonalInfoProps) {
	const { updateState, signupState } = useSignup();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: signupState?.personal?.firstName ?? "",
			lastName: signupState?.personal?.lastName ?? "",
			phone: signupState?.personal?.phone ?? "",
			location: signupState?.personal?.location ?? "",
			// check: ,
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		updateState("personal", values);
		onNext();
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<div className="grid gap-4 sm:grid-cols-2">
					<TextInput
						name="firstName"
						label="First Name"
						control={form.control}
						placeholder="John"
					/>

					<TextInput
						name="lastName"
						label="Last Name"
						control={form.control}
						placeholder="Doe"
					/>
				</div>

				<TextInput
					name="phone"
					label="Phone Number"
					control={form.control}
					placeholder="+1 (555) 000-0000"
				/>
				<FormField
					control={form.control}
					name="location"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Location</FormLabel>
							<FormControl>
								<Input placeholder="City, Country" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex justify-end">
					<Button type="submit">Continue</Button>
				</div>
			</form>
		</Form>
	);
}
