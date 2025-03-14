import { Jobs } from 'src/models/jobs/entities';
import { Student } from 'src/models/student/entities';
export declare class CreateApplicationDto {
    student?: Student;
    job: Jobs;
    hasApplied: boolean;
}
