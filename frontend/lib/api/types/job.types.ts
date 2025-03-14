export interface Job {
	id: string;
	title: string;
	company: string;
	location: string;
	type: "full-time" | "part-time" | "contract" | "internship";
	salary: string;
	description: string;
	requirements: string[];
	posted: string;
	deadline: string;
}

export interface JobsResponse {
	jobs: Job[];
	total: number;
	page: number;
	limit: number;
}

export interface JobSearchParams {
	query?: string;
	type?: string;
	location?: string;
	page?: number;
	limit?: number;
}
