"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Shield, Building2, Users2, FileCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIndustrySignupStore } from "@/lib/stores/IndustrySignupStore";
import { AccountDetailsForm } from "@/components/industry/signup/AccountDetailsForm";
import { CompanyDetailsForm } from "@/components/industry/signup/CompanyDetailsForm";
import { TeamDetailsForm } from "@/components/industry/signup/TeamDetailsForm";
import { VerificationForm } from "@/components/industry/signup/VerificationForm";
import { useIndustrySignup } from "@/hooks";

const STEPS = [
	{
		id: "account",
		title: "Account",
		icon: Shield,
		description: "Create your login credentials",
	},
	{
		id: "company",
		title: "Company",
		icon: Building2,
		description: "Your company details",
	},
	// {
	// 	id: "team",
	// 	title: "Team",
	// 	icon: Users2,
	// 	description: "Key team members",
	// },
	// {
	// 	id: "verification",
	// 	title: "Verification",
	// 	icon: FileCheck,
	// 	description: "Verify your company",
	// },
];

export default function IndustrySignupPage() {
	const router = useRouter();
	const { toast } = useToast();
	const [currentStep, setCurrentStep] = useState("account");
	const {
		formData,
		setFormData,
		resetForm,
		isStepCompleted,
		setStepCompleted,
	} = useIndustrySignupStore();
	const { mutate, error, isSuccess } = useIndustrySignup();
	// Calculate progress
	const currentStepIndex = STEPS.findIndex((step) => step.id === currentStep);
	const progress = ((currentStepIndex + 1) / STEPS.length) * 100;

	// Protect direct URL access
	useEffect(() => {
		const checkAccess = () => {
			if (currentStep !== "account") {
				const previousSteps = STEPS.slice(0, currentStepIndex);
				const canAccess = previousSteps.every((step) =>
					isStepCompleted(step.id)
				);

				if (!canAccess) {
					const lastCompletedStep = [...previousSteps]
						.reverse()
						.find((step) => isStepCompleted(step.id));

					setCurrentStep(lastCompletedStep?.id || "account");
					toast({
						title: "Access Denied",
						description:
							"Please complete the previous steps first.",
						variant: "destructive",
					});
				}
			}
		};

		checkAccess();
	}, [currentStep, isStepCompleted, toast]);

	const handleStepComplete = (stepId: string, data: any) => {
		setFormData(stepId, data);
		setStepCompleted(stepId);

		const nextStepIndex = STEPS.findIndex((step) => step.id === stepId) + 1;
		if (nextStepIndex < STEPS.length) {
			setCurrentStep(STEPS[nextStepIndex].id);
		} else {
			handleFinalSubmit(data);
		}
	};

	// const handleFinalSubmit = async (formValues: any) => {
	// 	try {
	// 		// Here you would typically send all the data to your API
	// 		mutate(formValues);

	// 		toast({
	// 			title: "Registration Successful",
	// 			description:
	// 				"Your company account has been created. Please check your email for verification.",
	// 		});

	// 		// Redirect to dashboard or verification page
	// 		// router.push("/industry/verification");
	// 	} catch (error) {
	// 		toast({
	// 			title: "Error",
	// 			description: "Something went wrong. Please try again.",
	// 			variant: "destructive",
	// 		});
	// 	}
	// };

	const handleFinalSubmit = async (data: any) => {
		try {
			const formValues: any = new FormData();
			Object.entries({
				...formData?.account,
				...data,
			}).forEach(([key, value]) => {
				formValues.append(key, value);
			});

			mutate(formValues);
			resetForm();
			toast({
				title: "Registration Successful",
				description:
					"Your company account has been created. Please check your email for verification.",
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Something went wrong. Please try again.",
				variant: "destructive",
			});
		}
	};

	const renderStep = () => {
		switch (currentStep) {
			case "account":
				return (
					<AccountDetailsForm
						onComplete={(data) =>
							handleStepComplete("account", data)
						}
					/>
				);
			case "company":
				return (
					<CompanyDetailsForm
						onComplete={(data) =>
							handleStepComplete("company", data)
						}
						onBack={() => setCurrentStep("account")}
					/>
				);
			// case "team":
			// 	return (
			// 		<TeamDetailsForm
			// 			onComplete={(data) => handleStepComplete("team", data)}
			// 			onBack={() => setCurrentStep("company")}
			// 		/>
			// 	);
			// case "verification":
			// 	return (
			// 		<VerificationForm
			// 			onComplete={(data) =>
			// 				handleStepComplete("verification", data)
			// 			}
			// 			onBack={() => setCurrentStep("team")}
			// 		/>
			// 	);
			default:
				return null;
		}
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="max-w-3xl mx-auto">
				<Card>
					<CardHeader className="space-y-1">
						<CardTitle className="text-2xl font-bold">
							Register Your Company
						</CardTitle>
						<CardDescription>
							Join our platform to connect with talented students
							and grow your team
						</CardDescription>
					</CardHeader>
					<CardContent>
						{/* Progress indicator */}
						<div className="mb-8">
							<Progress value={progress} className="h-2" />
							<div className="mt-4 grid grid-cols-2 gap-4">
								{STEPS.map((step) => {
									const isActive = step.id === currentStep;
									const isCompleted = isStepCompleted(
										step.id
									);

									return (
										<div
											key={step.id}
											className={`flex flex-col items-center text-center ${
												isActive
													? "text-primary"
													: isCompleted
													? "text-muted-foreground"
													: "text-muted"
											}`}
										>
											<div
												className={`w-10 h-10 rounded-full flex items-center justify-center mb-2
															${
																isActive
																	? "bg-primary text-primary-foreground"
																	: isCompleted
																	? "bg-muted"
																	: "bg-muted/50"
															}
														`}
											>
												<step.icon className="w-5 h-5" />
											</div>
											<div className="text-sm font-medium">
												{step.title}
											</div>
											<div className="text-xs text-muted-foreground">
												{step.description}
											</div>
										</div>
									);
								})}
							</div>
						</div>

						{/* Step content */}
						<div className="mt-6">{renderStep()}</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
