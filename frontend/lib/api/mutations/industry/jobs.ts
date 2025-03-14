import { useMutation } from "@tanstack/react-query";
import { endpoints } from "../../endpoints";
import api from "../../axios";

const PREFIX = "/jobs";
export const createJob = async (registerData: any) => {
	const { data } = await api.post(endpoints.jobs?.createJob, registerData);
	return data;
};

// update job
export const updateJob = async ({ id, body }: any) => {
	const { data } = await api.patch(`${PREFIX}/update/${id}`, body);
	return data;
};
