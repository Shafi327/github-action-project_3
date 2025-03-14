"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Import Next.js hooks

import { Card } from "@/components/ui/card";
import { SignupSteps } from "./SignupSteps";
import { PersonalInfo } from "./steps/PersonalInfo";
import { EducationInfo } from "./steps/EducationInfo";
import { SkillsInfo } from "./steps/SkillsInfo";
import { AccountInfo } from "./steps/AccountInfo";

const steps = [
  {
    title: "Personal",
    description: "Basic information",
    slug: "personal-info",
  },
  {
    title: "Education",
    description: "Academic details",
    slug: "education-info",
  },
  { title: "Skills", description: "Your expertise", slug: "skills-info" },
  { title: "Account", description: "Create account", slug: "account-info" },
];

export function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(0);

  // const [assignStepSubmission, setAssignStepSubmission] = useState({
  // 	personal: {},
  // 	education: {},
  // 	skills: {},
  // 	account: {},
  // });
  // Sync currentStep with the "step" query parameter
  useEffect(() => {
    const stepSlug = searchParams.get("step");
    const stepIndex = steps.findIndex((step) => step.slug === stepSlug);
    if (stepIndex !== -1) {
      setCurrentStep(stepIndex);
    }
  }, [searchParams]);

  // Navigate to the next step
  const nextStep = () => {
    const nextIndex = Math.min(currentStep + 1, steps.length - 1);
    router.push(`?step=${steps[nextIndex]?.slug}`); // Update the query parameter
    setCurrentStep(nextIndex);
  };

  // Navigate to the previous step
  const prevStep = () => {
    const prevIndex = Math.max(currentStep - 1, 0);
    router.push(`?step=${steps[prevIndex].slug}`); // Update the query parameter
    setCurrentStep(prevIndex);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card className="p-6">
        <SignupSteps steps={steps} currentStep={currentStep} />
        <div className="mt-8">
          {currentStep === 0 && <PersonalInfo onNext={nextStep} />}
          {currentStep === 1 && (
            <EducationInfo onNext={nextStep} onPrev={prevStep} />
          )}
          {currentStep === 2 && (
            <SkillsInfo onNext={nextStep} onPrev={prevStep} />
          )}
          {currentStep === 3 && <AccountInfo onPrev={prevStep} />}
        </div>
      </Card>
    </Suspense>
  );
}
