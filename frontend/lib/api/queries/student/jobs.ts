import api from "../../axios";

const PREFIX = "/jobs";
export const getAllJobsList = async (params: {
	page: number;
	limit: number;
}) => {
	const { data } = await api.get(`${PREFIX}/list`, {
		params, // Ensure `params` includes `page` and `limit`
	});
	return data; // Expect response to include job list and pagination metadata
};

export const getJobById = async (id: string) => {
	const { data } = await api.get(`${PREFIX}/detail/${id}`);
	return data;
};
