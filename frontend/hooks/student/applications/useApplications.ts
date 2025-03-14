import { getStudentApplications } from "@/lib/api/queries";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useStudentAppliedJobs = (params: {
	page: number;
	limit: number;
	search?: string;
}): UseQueryResult<any, Error> => {
	return useQuery({
		queryKey: ["studentAppliedJobs", params?.page, params?.search],
		queryFn: () => getStudentApplications(params),
		enabled: params.page > 0,
	});
};
