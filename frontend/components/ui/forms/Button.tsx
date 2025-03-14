// "use client";

// import * as React from "react";
// import { Button as ShadcnButton } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { Loader2 } from "lucide-react";

// export interface ButtonProps
// 	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
// 	variant?:
// 		| "default"
// 		| "destructive"
// 		| "outline"
// 		| "secondary"
// 		| "ghost"
// 		| "link";
// 	size?: "default" | "sm" | "lg" | "icon";
// 	loading?: boolean;
// 	icon?: React.ReactNode;
// }

// export function Button({
// 	children,
// 	className,
// 	variant = "default",
// 	size = "default",
// 	loading = false,
// 	icon,
// 	disabled,
// 	...props
// }: ButtonProps) {
// 	return (
// 		<ShadcnButton
// 			className={cn(className)}
// 			variant={variant}
// 			size={size}
// 			disabled={loading || disabled}
// 			{...props}
// 		>
// 			{loading ? (
// 				<Loader2 className="mr-2 h-4 w-4 animate-spin" />
// 			) : (
// 				icon && <span className="mr-2">{icon}</span>
// 			)}
// 			{children}
// 		</ShadcnButton>
// 	);
// }

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { ReactNode } from "react";

const VariantOptions = [
	"default",
	"primary",
	"secondary",
	"success",
	"error",
	"dark",
	"outline",
	"ghost",
	"link",
] as const;

type ButtonProps = {
	variant?: (typeof VariantOptions)[number];
	Icon?: any;
	children?: ReactNode;
	text?: string;
	onClick?: () => void;
	disabled?: boolean;
	rounded?: boolean;
	loading?: boolean;
	fullWidth?: boolean;
	mini?: boolean;
};

export const ShadcnButton = ({
	variant = "default",
	disabled = false,
	Icon,
	rounded = false,
	onClick,
	children,
	text,
	loading = false,
	fullWidth = false,
	mini = false,
}: ButtonProps) => {
	const buttonClasses = [
		fullWidth ? "w-full" : "min-w-[80px]",
		rounded ? "rounded-full" : "rounded-md",
		mini ? "px-2 py-1 text-sm" : "px-4 py-2",
	].join(" ");

	return (
		<Button
			variant={variant}
			disabled={disabled}
			className={buttonClasses}
			onClick={onClick}
		>
			{loading ? (
				<div className="flex items-center justify-center">
					<Loader2 size={24} className="animate-spin" />
				</div>
			) : (
				<div className="flex items-center justify-center gap-x-2">
					{Icon && <Icon size={mini ? 16 : 20} />}
					{!mini && <span>{text || children}</span>}
				</div>
			)}
		</Button>
	);
};
