import { Industry } from 'src/models/industry/entities';
export declare class CreateJobDto {
    department: string;
    jobType: string;
    jobDescription: string;
    keyResponsibilities: string;
    requirements: string;
    salary: string;
    title: string;
    skills: [string];
    industry: Industry;
}
