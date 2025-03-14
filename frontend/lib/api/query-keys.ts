import { JobSearchParams } from "./types";

export const queryKeys = {
	auth: {
		user: ["auth", "user"],
	},
	profile: {
		detail: ["profile"],
	},
	jobs: {
		all: ["jobs"],
		list: (params: JobSearchParams) => [
			...queryKeys.jobs.all,
			"list",
			params,
		],
		detail: (id: string) => [...queryKeys.jobs.all, "detail", id],
	},
	applications: {
		all: ["applications"],
		list: ["applications", "list"],
		detail: (id: string) => ["applications", "detail", id],
	},
} as const;
