import { useQuery } from "@tanstack/react-query";
import api from "../../axios";
import { endpoints } from "../../endpoints";
import { queryKeys } from "../../query-keys";
import axios from "axios";
import { getStudentProfile } from "./studentProfile";

export const useProfile = () => {
	return useQuery<any>({
		queryKey: queryKeys.profile.detail,
		queryFn: getStudentProfile,
		// async () => {
		// 	const response = await getStudentProfile();
		// 	return response;
		// },
	});
};
