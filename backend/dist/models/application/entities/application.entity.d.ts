import { BaseEntity } from 'src/database';
import { jobStatus } from '../enum';
import { Student } from 'src/models/student/entities';
import { Jobs } from 'src/models/jobs/entities';
export declare class Application extends BaseEntity {
    status: jobStatus;
    hasApplied: boolean;
    student: Student;
    job: Jobs;
}
