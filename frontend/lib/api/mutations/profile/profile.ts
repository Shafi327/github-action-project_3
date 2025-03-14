import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserProfile } from "../../types";
import { endpoints } from "../../endpoints";
import { queryKeys } from "../../query-keys";
import api from "../../axios";

export const useUpdateProfile = () => {
	const queryClient = useQueryClient();

	return useMutation<UserProfile, Error, Partial<UserProfile>>({
		mutationFn: async (profileData) => {
			const { data } = await api.put(
				endpoints.profile.update,
				profileData
			);
			return data;
		},
		onSuccess: (data) => {
			queryClient.setQueryData(queryKeys.profile.detail, data);
		},
	});
};

export const useUploadCV = () => {
	const queryClient = useQueryClient();

	return useMutation<{ cvUrl: string }, Error, File>({
		mutationFn: async (file: any) => {
			const formData = new FormData();
			formData.append("cv", file);

			const { data } = await api.post(
				endpoints.profile.uploadCV,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
			return data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: queryKeys.profile.detail,
			});
		},
	});
};
