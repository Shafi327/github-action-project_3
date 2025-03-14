// "use client";

// import { useFormContext } from "react-hook-form";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
// 	FormControl,
// 	FormDescription,
// 	FormField,
// 	FormItem,
// 	FormLabel,
// 	FormMessage,
// } from "@/components/ui/form";
// import { cn } from "@/lib/utils";

// export interface CheckboxInputProps {
// 	name: string;
// 	label?: string;
// 	description?: string;
// 	className?: string;
// }

// export function CheckboxInput({
// 	name,
// 	label,
// 	description,
// 	className,
// }: CheckboxInputProps) {
// 	const form = useFormContext();

// 	return (
// 		<FormField
// 			control={form.control}
// 			name={name}
// 			render={({ field }) => (
// 				<FormItem
// 					className={cn(
// 						"flex flex-row items-start space-x-3 space-y-0 p-4",
// 						className
// 					)}
// 				>
// 					<FormControl>
// 						<Checkbox
// 							checked={field.value}
// 							onCheckedChange={field.onChange}
// 						/>
// 					</FormControl>
// 					<div className="space-y-1 leading-none">
// 						{label && <FormLabel>{label}</FormLabel>}
// 						{description && (
// 							<FormDescription>{description}</FormDescription>
// 						)}
// 					</div>
// 					<FormMessage />
// 				</FormItem>
// 			)}
// 		/>
// 	);
// }

import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { FocusEvent } from "react";
import { ClipLoader } from "react-spinners";

interface CheckboxInputProps {
	control: any;
	name: string;
	label?: string;
	helpText?: string;
	tooltip?: string;
	value?: any;
	rules?: any;
	onChange?: (checked: boolean) => void;
	onBlur?: (e: FocusEvent<HTMLButtonElement>) => void;
	defaultChecked?: boolean;
	loading?: boolean;
	required?: boolean;
	disabled?: boolean;
	showError?: boolean;
}

export function CheckboxInput({
	control,
	name,
	label,

	defaultChecked,

	helpText,
	tooltip,

	value,
	rules,
	onChange,
	onBlur,

	loading,
	required,
	disabled,
	showError = true,
}: CheckboxInputProps) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormControl>
						{!loading ? (
							<Checkbox
								{...field}
								checked={field.value ?? defaultChecked ?? false} // Ensure proper value fallback
								onCheckedChange={(checked: boolean) => {
									field.onChange(checked); // Send the `checked` state to react-hook-form
									if (onChange) {
										onChange(checked); // Call the custom onChange if provided
									}
								}}
								{...(value ? { value } : {})}
								onBlur={onBlur} // Pass the onBlur handler
								disabled={disabled}
								required={required}
							/>
						) : (
							<div className="w-[22px] h-[22px] flex items-center justify-center">
								<ClipLoader size={16} />
							</div>
						)}
					</FormControl>
					{label && <FormLabel>{label}</FormLabel>}
					{tooltip && <div className="tooltip">{tooltip}</div>}
					{helpText && <div className="help-text">{helpText}</div>}
					{showError && <FormMessage />}
				</FormItem>
			)}
		/>
	);
}
