"use client";

import { useFormContext } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

export interface TextAreaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string;
	label?: string;
	description?: string;
	className?: string;
}

export function TextArea({
	name,
	label,
	description,
	className,
	...props
}: TextAreaProps) {
	const form = useFormContext();

	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem className={cn("w-full", className)}>
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<Textarea {...field} {...props} />
					</FormControl>
					{description && (
						<FormDescription>{description}</FormDescription>
					)}
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
