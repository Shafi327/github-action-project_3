"use server";
import axios from "axios";
import { cookies } from "next/headers";
import apiClient from "../../axios";
import { endpoints } from "../../endpoints";
import api from "../../axios";

// Create student
export const getStudentProfile = async () => {
	const { data } = await api.get(endpoints.student.profile);
	return data;
};
