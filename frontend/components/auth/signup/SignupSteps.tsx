"use client";

import { Check } from "lucide-react";

interface SignupStepsProps {
	steps: { title: string; description: string }[];
	currentStep: number;
}

export function SignupSteps({ steps, currentStep }: SignupStepsProps) {
	return (
		<div className="relative">
			<div className="absolute left-0 top-[15px] h-0.5 w-full bg-muted">
				<div
					className="absolute h-full bg-primary transition-all duration-500"
					style={{
						width: `${(currentStep / (steps.length - 1)) * 100}%`,
					}}
				/>
			</div>
			<div className="relative z-10 flex justify-between">
				{steps.map((step, index) => {
					const isCompleted = currentStep > index;
					const isCurrent = currentStep === index;

					return (
						<div key={index} className="flex flex-col items-center">
							<div
								className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors ${
									isCompleted || isCurrent
										? "border-primary bg-primary text-primary-foreground"
										: "border-muted bg-background"
								}`}
							>
								{isCompleted ? (
									<Check className="h-4 w-4" />
								) : (
									<span className="text-sm">{index + 1}</span>
								)}
							</div>
							<div className="mt-2 text-center">
								<div className="text-sm font-medium">
									{step.title}
								</div>
								<div className="text-xs text-muted-foreground">
									{step.description}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
