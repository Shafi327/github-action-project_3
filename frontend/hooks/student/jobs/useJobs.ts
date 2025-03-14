import { applyToJob } from "@/lib/api/mutations";
import { getAllJobsList, getJobById } from "@/lib/api/queries";
import {
	useMutation,
	UseMutationResult,
	useQuery,
	useQueryClient,
	UseQueryResult,
} from "@tanstack/react-query";

// ====================== Jobs Mutations ============================ //
export const useApplyToJob = (): UseMutationResult<any, Error, any> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: applyToJob,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["jobs"] });
		},
	});
};

// ====================== Jobs Query ============================
export const useGetAllJobs = (params: {
	page: number;
	limit: number;
	skip: number;
	search?: string;
}) => {
	return useQuery({
		queryKey: ["jobs", params.page, params.search], // Use page number to track pagination
		queryFn: () => getAllJobsList(params),
		enabled: params.page > 0, // Prevents execution when page is invalid
	});
};

// job details get by id
export const useGetJobById = (id?: string) => {
	return useQuery({
		queryKey: ["job", id],
		queryFn: () => getJobById(id as string),
		enabled: !!id, // Runs only when `id` is truthy
	});
};
