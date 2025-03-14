import { getApplicationsList } from "@/lib/api/queries";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useApplicationsList = (params: {
	page: number;
	limit: number;
}): UseQueryResult<any, Error> => {
	return useQuery({
		queryKey: ["applications", params],
		queryFn: () => getApplicationsList(params),
	});
};
