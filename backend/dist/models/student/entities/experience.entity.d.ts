import { BaseEntity } from 'src/database';
import { Student } from './student.entity';
export declare class Experience extends BaseEntity {
    position: string;
    company: string;
    period: string;
    location: string;
    description: string[];
    skills: string[];
    student: Student;
}
