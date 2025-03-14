"use client";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { Tooltip } from "@/components/ui/tooltip";
import { Controller, useFormContext } from "react-hook-form";
import { useEffect, forwardRef } from "react";
import { Label } from "../label";

type SelectProps = {
	id?: string;
	name: string;
	label?: string;
	options: { label: string; value: string }[];
	placeholder?: string;
	multi?: boolean;
	defaultValue?: any;
	value?: any;
	rules?: any;
	required?: boolean;
	tooltip?: string;
	onChange?: (value: any) => void;
	onBlur?: () => void;
	helpText?: string;
	disabled?: boolean;
	showError?: boolean;
};

export const SelectInput = forwardRef<HTMLDivElement, SelectProps>(
	(
		{
			id,
			name,
			label,
			options,
			placeholder,
			multi,
			defaultValue,
			value,
			rules,
			required,
			tooltip,
			onChange,
			onBlur,
			helpText,
			disabled,
			showError = true,
		},
		ref
	) => {
		const formContext = useFormContext();

		useEffect(() => {
			if ((value || defaultValue) && formContext) {
				formContext.setValue(name, value || defaultValue);
			}
		}, [value, defaultValue, formContext, name]);

		const getSelectComponent = (onChangeHandler: (value: any) => void) => (
			<Select
				onValueChange={onChangeHandler}
				defaultValue={defaultValue}
				disabled={disabled}
			>
				<SelectTrigger className="w-full">
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{options.map((option) => (
							<SelectItem key={option.value} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		);

		const ControlledSelect = () => (
			<Controller
				control={formContext.control}
				name={name}
				render={({ field }) =>
					getSelectComponent((value: any) => {
						field.onChange(value);
						onChange && onChange(value);
					})
				}
			/>
		);

		return (
			<div>
				{label && (
					<div className="flex justify-between items-center mb-2">
						<div>
							<Label>{label}</Label>
							{required && (
								<span className="text-red-500 ml-1">*</span>
							)}
						</div>
						{tooltip && <Tooltip>{tooltip}</Tooltip>}
					</div>
				)}

				{formContext ? (
					<ControlledSelect />
				) : (
					getSelectComponent(onChange || (() => {}))
				)}

				{showError && formContext?.formState.errors[name] && (
					<p className="text-red-500 text-sm mt-1">
						{String(formContext.formState.errors[name]?.message) ||
							"Invalid value"}
					</p>
				)}

				{helpText && (
					<p className="text-gray-500 text-sm mt-1">{helpText}</p>
				)}

				
			</div>
		);
	}
);

SelectInput.displayName = "SelectInput";
