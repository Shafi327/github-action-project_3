import { BaseEntity } from 'src/database';
import { Jobs } from 'src/models/jobs/entities';
import { User } from 'src/models/users/entities';
export declare class Industry extends BaseEntity {
    companyName: string;
    address: string;
    city: string;
    companySize: string;
    country: string;
    description: string;
    website: string;
    user: User;
    jobs: Jobs[];
}
