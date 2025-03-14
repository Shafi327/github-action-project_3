import api from "../../axios";

export const getStudentApplications = async (params: {
	page: number;
	limit: number;
}) => {
	const { data } = await api.get(`application/student/applied`, { params });
	return data;
};
