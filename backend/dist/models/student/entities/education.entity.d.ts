import { Student } from './student.entity';
import { BaseEntity } from 'src/database';
export declare class Education extends BaseEntity {
    degreeType: string;
    university: string;
    year: string;
    gpa: string;
    student: Student;
}
