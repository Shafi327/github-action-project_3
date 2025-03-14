import { Student } from '../entities';
export declare class ExperienceDto {
    position: string;
    company: string;
    period: string;
    location: string;
    description?: [string];
    skills: [string];
    student: Student;
}
