"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CustomFormField } from "../CustomFormField";
import { SelectInput, TextInput } from "../ui";

export enum FormFieldType {
	INPUT = "input",
	TEXTAREA = "textarea",
	PHONE_INPUT = "phoneInput",
	CHECKBOX = "checkbox",
	DATE_PICKER = "datePicker",
	SELECT = "select",
	SKELETON = "skeleton",
}

const formSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	password: z.string().min(8, {
		message: "Password must be at least 8 characters.",
	}),
	option: z.string().optional(),
});

export const TestForm = () => {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-4 flex-1"
			>
				<section className="mb-4 space-y-2">
					<h2 className="text-2xl font-bold">Hi there 👋</h2>
					<p>Schedule your first appointment</p>
				</section>

				<SelectInput
					name="option"
					options={[
						{ value: "Option_1", label: "Option 1" },
						{ value: "Option_2", label: "Option 2" },
						{ value: "Option_3", label: "Option 3" },
					]}
					multi
					// onlyValue
				/>
				{/* <CustomFormField
					control={form.control}
					fieldType={FormFieldType.INPUT}
					name="name"
					label="Full Name"
					placeholder="John Doe"
					iconSrc="/assets/icons/user.svg"
					iconAlt="user"
				/>
				<CustomFormField
					control={form.control}
					fieldType={FormFieldType.INPUT}
					name="email"
					label="Email"
					placeholder="john@example.com"
					iconSrc="/assets/icons/email.svg"
					iconAlt="email"
				/>
				<CustomFormField
					fieldType={FormFieldType.PHONE_INPUT}
					control={form.control}
					name="phone"
					label="Phone number"
					placeholder="(555) 123-4567"
				/>
				<CustomFormField
					fieldType={FormFieldType.DATE_PICKER}
					control={form.control}
					name="schedule"
					label="Expected appointment date"
					showTimeSelect
					dateFormat="MM/dd/yyyy  -  h:mm aa"
				/> */}

				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};
