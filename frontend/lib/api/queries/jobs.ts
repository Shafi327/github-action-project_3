import { useQuery } from "@tanstack/react-query";
import { Job, JobsResponse, JobSearchParams } from "../types";
import api from "../axios";
import { endpoints } from "../endpoints";
import { queryKeys } from "../query-keys";

export const useJobs = (params: JobSearchParams = {}) => {
	return useQuery<JobsResponse>({
		queryKey: queryKeys.jobs.list(params),
		queryFn: async () => {
			const { data } = await api.get(endpoints.jobs.list, { params });
			return data;
		},
	});
};

export const useJob = (id: string) => {
	return useQuery<Job>({
		queryKey: queryKeys.jobs.detail(id),
		queryFn: async () => {
			const { data } = await api.get(endpoints.jobs.details(id));
			return data;
		},
		enabled: !!id,
	});
};
