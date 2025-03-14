"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CheckboxInput, TextArea, TextInput } from "@/components/ui/forms";

const verificationSchema = z.object({
	businessRegistration: z.any().optional(),
	taxDocument: z.any().optional(),
	additionalDocuments: z.any().optional(),
	comments: z.string().optional(),
	termsAccepted: z.boolean().refine((val) => val === true, {
		message: "You must accept the terms and conditions",
	}),
	privacyAccepted: z.boolean().refine((val) => val === true, {
		message: "You must accept the privacy policy",
	}),
	dataProcessingAccepted: z.boolean().refine((val) => val === true, {
		message: "You must accept the data processing agreement",
	}),
});

interface VerificationFormProps {
	onComplete: (data: z.infer<typeof verificationSchema>) => void;
	onBack: () => void;
}

export function VerificationForm({
	onComplete,
	onBack,
}: VerificationFormProps) {
	const form = useForm<z.infer<typeof verificationSchema>>({
		resolver: zodResolver(verificationSchema),
		defaultValues: {
			comments: "",
			termsAccepted: false,
			privacyAccepted: false,
			dataProcessingAccepted: false,
			businessRegistration: "",
			taxDocument: "",
			additionalDocuments: "",
		},
	});

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onComplete)}
				className="space-y-6"
			>
				<div className="space-y-4">
					<TextInput
						control={form.control}
						name="businessRegistration"
						label="Business Registration"
						type="file"
					/>

					<TextInput
						control={form.control}
						name="taxDocument"
						label="Tax Document"
						type="file"
					/>

					<TextInput
						control={form.control}
						name="additionalDocuments"
						label="Additional Documents"
						type="file"
					/>
				</div>

				<TextArea
					name="comments"
					label="Additional Comments"
					placeholder="Any additional information you'd like to provide"
					description="Optional: Add any relevant information about your verification documents"
				/>

				<div className="space-y-4">
					<CheckboxInput
						control={form.control}
						name="termsAccepted"
						label="Terms and Conditions"
					/>

					<CheckboxInput
						control={form.control}
						name="privacyAccepted"
						label="Privacy Policy"
					/>

					<CheckboxInput
						control={form.control}
						name="dataProcessingAccepted"
						label="Data Processing Agreement"
					/>
				</div>

				<div className="flex justify-between">
					<Button type="button" variant="outline" onClick={onBack}>
						Back
					</Button>
					<Button type="submit">Complete Registration</Button>
				</div>
			</form>
		</Form>
	);
}
