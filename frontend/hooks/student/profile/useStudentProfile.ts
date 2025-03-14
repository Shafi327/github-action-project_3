import {
	addStudentEducation,
	addStudentExperience,
	deleteStudentEducation,
	deleteStudentExperience,
	updateStudentEducation,
	updateStudentExperience,
} from "@/lib/api/mutations";
import { getStudentProfile } from "@/lib/api/queries";
import {
	useMutation,
	UseMutationResult,
	useQuery,
	useQueryClient,
	UseQueryResult,
} from "@tanstack/react-query";

export const useStudentProfile = (): UseQueryResult<any, Error> => {
	return useQuery({
		queryKey: ["studentProfile"],
		queryFn: () => getStudentProfile(),
	});
};

// ====================== Student Profile Mutations ============================
export const useAddStudentExperience = (): UseMutationResult<
	any,
	Error,
	any
> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: addStudentExperience,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["studentProfile"] });
		},
	});
};

// update
export const useUpdateStudentExperience = (): UseMutationResult<
	any,
	Error,
	any
> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: updateStudentExperience,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["studentProfile"] });
		},
	});
};

// delete
export const useDeleteStudentExperience = (): UseMutationResult<
	any,
	Error,
	any
> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteStudentExperience,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["studentProfile"] });
		},
	});
};

// add education
export const useAddStudentEducation = (): UseMutationResult<
	any,
	Error,
	any
> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: addStudentEducation,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["studentProfile"] });
		},
	});
};

// update education
export const useUpdateStudentEducation = (): UseMutationResult<
	any,
	Error,
	any
> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: updateStudentEducation,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["studentProfile"] });
		},
	});
};

// delete education
export const useDeleteStudentEducation = (): UseMutationResult<
	any,
	Error,
	any
> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteStudentEducation,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["studentProfile"] });
		},
	});
};
