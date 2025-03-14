import api from "../../axios";
import { endpoints } from "../../endpoints";

const PREFIX = "/industry";

// get list of jobs
export const getJobsList = async (params: { page: number; limit: number }) => {
	const { data } = await api.get(`${PREFIX}/jobs`, {
		params, // Ensure `params` includes `page` and `limit`
	});
	return data; // Expect response to include job list and pagination metadata
};

// get single job by id
export const getIndustryJobById = async (id: string) => {
	const { data } = await api.get(`${PREFIX}/detail/${id}`);
	return data;
};
