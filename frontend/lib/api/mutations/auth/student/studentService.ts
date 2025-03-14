import axios from "axios";

// Create student
export async function createStudent(data: any) {
	try {
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_API_URL}/student`,
			data,
			{
				headers: {
					// "Content-Type": "multipart/form-data",
				},
			}
		);
		return response;
	} catch (error) {
		return { success: false, error };
	}
}
