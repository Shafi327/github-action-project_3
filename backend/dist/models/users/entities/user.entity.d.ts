import { BaseEntity } from 'src/database';
import { userRole } from '../enum';
import { Student } from 'src/models/student/entities';
import { Industry } from 'src/models/industry/entities';
export declare class User extends BaseEntity {
    name: string;
    email: string;
    password: string;
    role: userRole;
    location: string;
    phone: string;
    avatar: string;
    student: Student;
    industry: Industry;
}
