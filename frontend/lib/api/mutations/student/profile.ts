import api from "../../axios";

export const addStudentExperience = async (body: any) => {
	const { data } = await api.post(`/student/add-experience`, body);
	return data;
};

export const updateStudentExperience = async ({ id, body }: any) => {
	console.log("id", id);
	console.log("body", body);
	const { data } = await api.patch(`/student/update-experience/${id}`, body);
	return data;
};

export const deleteStudentExperience = async (id: number) => {
	const { data } = await api.delete(`/student/delete/experience/${id}`);
	return data;
};

// add education
export const addStudentEducation = async (body: any) => {
	const { data } = await api.post(`/student/add-education`, body);
	return data;
};

// update education
export const updateStudentEducation = async ({ id, body }: any) => {
	const { data } = await api.patch(`/student/update-education/${id}`, body);
	return data;
};

// delete education
export const deleteStudentEducation = async (id: number) => {
	const { data } = await api.delete(`/student/delete/education/${id}`);
	return data;
};
