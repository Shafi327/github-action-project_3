import { BaseEntity } from 'src/database';
import { Application } from 'src/models/application/entities';
import { User } from 'src/models/users/entities';
import { Education } from './education.entity';
import { Experience } from './experience.entity';
export declare class Student extends BaseEntity {
    skills: string[];
    languages: string[];
    user: User;
    applications: Application[];
    education: Education;
    experiences: Experience[];
}
