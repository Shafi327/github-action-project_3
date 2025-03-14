"use client";
import { CreateJobForm } from "@/components/industry/jobs";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useCreateJob } from "@/hooks/industry";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

// TODO: Job Title, Salary, skills,

const Page = () => {
	const { mutate, isError, isPending, isSuccess } = useCreateJob();
	const router = useRouter();
	const onSubmit = (data: any) => {
		mutate(data, {
			onError: () => {
				toast({
					title: "Error creating job",
					description:
						"There was an error creating the job. Please try again.",
					variant: "destructive",
				});
			},
			onSuccess: () => {
				toast({
					title: "Job created successfully",
					description: "Your job has been created successfully.",
				}),
					router.push("/industry/jobs");
			},
		});
	};

	return (
		<div className="max-w-7xl mx-auto my-10 ">
			<Card>
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold">
						Post New Job
					</CardTitle>
					<CardDescription>
						Post a new job on our platform to find the right
					</CardDescription>
				</CardHeader>
				<CardContent className="max-h-[34rem] overflow-auto remove-scrollbar">
					<CreateJobForm onSubmit={onSubmit} isLoading={isPending} />
				</CardContent>
			</Card>
		</div>
	);
};

export default Page;
