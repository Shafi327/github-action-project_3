// "use client";
// import { ChangeEvent, FocusEvent } from "react";
// import {
// 	FormField,
// 	FormItem,
// 	FormLabel,
// 	FormControl,
// 	FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// export type InputType =
// 	| "text"
// 	| "number"
// 	| "password"
// 	| "email"
// 	| "search"
// 	| "tel"
// 	| "date"
// 	| "time"
// 	| "url"
// 	| "color"
// 	| "file"
// 	| "datetime-local";

// interface TextInputProps {
// 	control?: any;
// 	name: string;
// 	label?: string;
// 	placeholder?: string;
// 	type?: InputType;
// 	onChange?: (value: string) => void;
// 	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
// 	rules?: any;
// 	value?: any;
// }

// export const TextInput = ({
// 	control,
// 	name,
// 	label,
// 	placeholder = "",
// 	type = "text",
// 	onChange,
// 	onBlur,
// 	rules,
// 	value,
// }: TextInputProps) => {
// 	return (
// 		<FormField
// 			control={control}
// 			name={name}
// 			render={({ field }) => (
// 				<FormItem>
// 					<FormLabel>{label}</FormLabel>
// 					<FormControl>
// 						<Input
// 							placeholder={placeholder}
// 							type={type}
// 							{...field}
// 							{...value}
// 							onChange={(e: ChangeEvent<HTMLInputElement>) => {
// 								// Call the form's onChange and the custom onChange if it's provided
// 								field.onChange(e);

// 								if (onChange) {
// 									if (type === "file") {
// 										const file: any = e.target.files
// 											? e?.target?.files[0]
// 											: null;
// 										onChange(file ?? "");
// 									} else {
// 										onChange(e.target.value);
// 									} // Pass the string value if onChange is provided
// 								}
// 							}}
// 							onBlur={onBlur} // Handle onBlur event
// 						/>
// 					</FormControl>
// 					<FormMessage />
// 				</FormItem>
// 			)}
// 		/>
// 	);
// };

"use client";
import { ChangeEvent, FocusEvent } from "react";
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export type InputType =
	| "text"
	| "number"
	| "password"
	| "email"
	| "search"
	| "tel"
	| "date"
	| "time"
	| "url"
	| "color"
	| "file"
	| "datetime-local";

interface TextInputProps {
	control?: any;
	name: string;
	label?: string;
	placeholder?: string;
	type?: InputType;
	onChange?: (value: string | File) => void;
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
	rules?: any;
	value?: any;
}

export const TextInput = ({
	control,
	name,
	label,
	placeholder = "",
	type = "text",
	onChange,
	onBlur,
	value,
}: TextInputProps) => {
	// If control exists, use react-hook-form, otherwise use basic input handling
	if (control) {
		return (
			<FormField
				control={control}
				name={name}
				render={({ field }) => (
					<FormItem>
						{label && <FormLabel>{label}</FormLabel>}
						<FormControl>
							<Input
								placeholder={placeholder}
								type={type}
								{...field}
								onChange={(
									e: ChangeEvent<HTMLInputElement>
								) => {
									field.onChange(e);
									if (onChange) {
										onChange(
											type === "file"
												? e.target.files?.[0] ?? ""
												: e.target.value
										);
									}
								}}
								onBlur={onBlur ?? field.onBlur}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		);
	}

	// If no control, handle form state manually
	return (
		<FormItem>
			{label && <FormLabel>{label}</FormLabel>}
			<FormControl>
				<Input
					placeholder={placeholder}
					type={type}
					value={value}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						onChange?.(
							type === "file"
								? e.target.files?.[0] ?? ""
								: e.target.value
						);
					}}
					onBlur={onBlur}
				/>
			</FormControl>
		</FormItem>
	);
};
