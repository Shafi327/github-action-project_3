import api from "../../axios";

const PREFIX = "/industry";
export const getApplicationsList = async (params: {
	page: number;
	limit: number;
}) => {
	const { data } = await api.get(`${PREFIX}/studentsApplied`, {
		params, // Ensure `params` includes `page` and `limit`
	});
	return data; // Expect response to include job list and pagination metadata
};

// get candidate by id
// export const getCandidateById = async (id: string) => {
// 	const { data } = await api.get(`${PREFIX}/detail/${id}`);
// 	return data;
// };
