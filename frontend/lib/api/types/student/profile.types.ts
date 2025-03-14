export interface User {
	
	email: string;
	firstName: string;
	lastName: string;
	location: string;
	phone: string;
	role: string;
	id: number;
}

export interface UserProfile {
	id: number;
	university: string;
	course: string;
	gpa: string;
	year: string;
	languages: string[];
	skills: string[];
	user: User;
}

