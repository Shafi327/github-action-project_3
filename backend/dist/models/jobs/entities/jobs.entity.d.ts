import { BaseEntity } from 'src/database';
import { Application } from 'src/models/application/entities';
import { Industry } from 'src/models/industry/entities';
import { jobStatus } from '../enum';
export declare class Jobs extends BaseEntity {
    title: string;
    skills: string[];
    salary: string;
    jobStatus: jobStatus;
    department: string;
    jobType: string;
    jobDescription: string;
    keyResponsibilities: string;
    requirements: string;
    industry: Industry;
    applications: Application[];
}
