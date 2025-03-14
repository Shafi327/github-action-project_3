"use client";
import { CreateJobForm } from "@/components/industry/jobs";
import { useGetJobById, useUpdateJob } from "@/hooks/industry";
import { toast } from "@/hooks/use-toast";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
	const params = useParams();
	const router = useRouter();
	const id = params?.id as string;

	const { mutate, isError, isPending, isSuccess } = useUpdateJob();
	const onSubmit = (data: any) => {
		mutate({ id: id, body: data });
	};
	const jobDetail = useGetJobById(id);
	useEffect(() => {
		if (isSuccess) {
			toast({
				title: "Job created successfully",
				description: (
					<p className="mt-2 w-[340px] rounded-md bg-black p-4">
						You have successfully created a new job.
					</p>
				),
			});
			router.push("/industry/jobs");
		}
	}, [isSuccess, router]);

	useEffect(() => {
		if (isError) {
			toast({
				title: "Error creating job",
				description: (
					<p className="mt-2 w-[340px] rounded-md bg-white p-4">
						There was an error creating the job. Please try again.
					</p>
				),
			});
		}
	}, [isError]);

	console.log("jobDetail", jobDetail?.data);
	return (
		<div>
			{jobDetail?.isError && <>Something went wrong try again</>}
			{jobDetail?.isLoading ? (
				<>Loading.....</>
			) : (
				<CreateJobForm onSubmit={onSubmit} editData={jobDetail?.data} />
			)}
		</div>
	);
};

export default Page;
