import { Timestamp } from 'typeorm';
export declare abstract class BaseEntity {
    id: number;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
