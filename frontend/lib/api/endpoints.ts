// // API endpoints configuration
// export const endpoints = {
// 	auth: {
// 		login: "/auth/login",
// 		register: "/auth/register",
// 		refreshToken: "/auth/refresh",
// 		logout: "/auth/logout",
// 	},
// 	profile: {
// 		get: "/profile",
// 		update: "/profile",
// 		uploadCV: "/profile/cv",
// 	},
// 	jobs: {
// 		list: "/jobs",
// 		details: (id: string) => `/jobs/${id}`,
// 		apply: (id: string) => `/jobs/${id}/apply`,
// 		search: "/jobs/search",
// 	},
// 	applications: {
// 		list: "/applications",
// 		details: (id: string) => `/applications/${id}`,
// 		withdraw: (id: string) => `/applications/${id}/withdraw`,
// 	},
// } as const;

// API endpoints configuration
export const endpoints = {
	auth: {
		login: "/auth/login",
		student: "/auth/signup/student",
		refreshToken: "/auth/refresh",
		logout: "/auth/logout",
		register: "/auth/register",
	},
	student: {
		profile: "/student/profile",
	},
	profile: {
		get: "/auth/profile",
		update: "/profile",
		uploadCV: "/profile/cv",
	},
	jobs: {
		list: "/jobs",
		createJob: "/jobs/create",
		update: "/jobs/update",
		details: (id: string) => `/jobs/${id}`,
		apply: (id: string) => `/jobs/${id}/apply`,
		search: "/jobs/search",
	},
	applications: {
		list: "/applications",
		details: (id: string) => `/applications/${id}`,
		withdraw: (id: string) => `/applications/${id}/withdraw`,
	},
} as const;
