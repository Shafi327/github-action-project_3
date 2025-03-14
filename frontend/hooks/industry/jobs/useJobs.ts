// export const useJobs = () => {
// 	const jobPostMutation = useCreateJob();

import { createJob, updateJob } from "@/lib/api/mutations";
import { getIndustryJobById, getJobsList } from "@/lib/api/queries";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";

// 	const createJob = async (data: any) => {
// 		await jobPostMutation.mutateAsync(data);
// 	};

// 	return {
// 		createJob,
// 	};
// };

// ========================================= Mutation Hooks ========================================

// Create job
export const useCreateJob = (): UseMutationResult<any, Error, any> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] }); // ✅ Correct way
    },
  });
};

// updateJob
export const useUpdateJob = (): UseMutationResult<any, Error, any> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] }); // ✅ Correct way
    },
  });
};
// ========================================= Mutation Hooks ========================================

// List of jobs
export const useGetJobsList = (params: {
  page: number;
  limit: number;
}): UseQueryResult<any, Error> => {
  return useQuery({
    queryKey: ["jobs", params.page],
    queryFn: () => getJobsList(params),
    // staleTime: 5000, // Data remains fresh for 5 seconds
  });
};
// Get single job by id
export const useGetJobById = (id?: string) => {
  return useQuery({
    queryKey: ["job", id],
    queryFn: () => getIndustryJobById(id as string),
    enabled: !!id, // Runs only when `id` is truthy
  });
};
