import api from "../../axios";

export const applyToJob = async (id: any) => {
	const { data } = await api.post(`/application/student/${id}`);
	return data;
};
