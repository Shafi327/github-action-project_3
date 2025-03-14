import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form";

interface MultiSelectProps {
	options: string[];
	label: string;
	name: string;
	control: Control<any>;
	placeholder?: string;
}

const toggleSelection = (
	selected: string,
	current: string[],
	onChange: (value: string[]) => void
) => {
	const newValue = current.includes(selected)
		? current.filter((item) => item !== selected)
		: [...current, selected];
	onChange(newValue);
};

export function MultiSelect({
	options,
	label,
	name,
	control,
	placeholder = "Select options",
}: MultiSelectProps) {
	const [open, setOpen] = React.useState(false);

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<FormControl>
								<Button
									variant="outline"
									role="combobox"
									className={cn(
										"w-full justify-between",
										!field.value?.length &&
											"text-muted-foreground"
									)}
									onClick={() => setOpen(!open)}
								>
									{field.value?.length
										? `${field.value.length} selected`
										: placeholder}
									<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
								</Button>
							</FormControl>
						</PopoverTrigger>
						<PopoverContent className="w-full p-2 h-56 overflow-y-auto remove-scrollbar">
							<div className="space-y-2">
								{options.map((option) => (
									<div
										key={option}
										className="flex items-center cursor-pointer hover:bg-muted/50 rounded-sm px-2 py-1.5"
										onClick={() =>
											toggleSelection(
												option,
												field.value || [],
												field.onChange
											)
										}
									>
										<Check
											className={cn(
												"mr-2 h-4 w-4",
												field.value?.includes(option)
													? "opacity-100"
													: "opacity-0"
											)}
										/>
										<span>{option}</span>
									</div>
								))}
							</div>
						</PopoverContent>
					</Popover>
					{field.value?.length > 0 && (
						<div className="mt-3 flex flex-wrap gap-2">
							{field.value.map((selected: string) => (
								<Badge
									key={selected}
									variant="secondary"
									className="cursor-pointer"
									onClick={() =>
										toggleSelection(
											selected,
											field.value,
											field.onChange
										)
									}
								>
									{selected} ×
								</Badge>
							))}
						</div>
					)}
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
