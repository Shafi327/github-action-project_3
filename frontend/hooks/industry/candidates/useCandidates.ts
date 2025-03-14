import { getCandidateById, getCandidatesList } from "@/lib/api/queries";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

// get candidates
export const useGetCandidates = (params: {
	page: number;
	limit: number;
}): UseQueryResult<any, Error> => {
	return useQuery({
		queryKey: ["candidates", params.page],
		queryFn: () => getCandidatesList(params),
		// staleTime: 5000 data remains fresh for 5 seconds
	});
};

// get candidates by id
export const useGetCandidateById = (id: string): UseQueryResult<any, Error> => {
	return useQuery({
		queryKey: ["candidate", id],
		queryFn: () => getCandidateById(id),
		// staleTime: 5000 data remains fresh for 5 seconds
	});
};
