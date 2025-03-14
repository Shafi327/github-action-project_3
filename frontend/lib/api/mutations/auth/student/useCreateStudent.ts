import { useMutation } from "@tanstack/react-query";
import { createStudent } from "./studentService";
import { useRouter } from "next/navigation";

// signup student mutation
export const useCreateStudent = () => {
	const router = useRouter();
	const signupStudentMutation = useMutation({
		mutationFn: async (data: any) => {
			const response = await createStudent(data);
			// const response = await api.post(
			// 	`${endpoints.auth.student}`,
			// 	credentials
			// );
			return response;
		},
		onSuccess: (data) => {
			router.push("/student");
		},
		onError: (error) => {
			return error.message;
		},
	});

	return {
		signupStudent: signupStudentMutation.mutate,
		isLoading: signupStudentMutation.isPending,
		isError: signupStudentMutation.isError,
		isSuccess: signupStudentMutation.isSuccess,
	};
};
