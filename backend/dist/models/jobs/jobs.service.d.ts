import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Repository } from 'typeorm';
import { Jobs } from './entities';
export declare class JobsService {
    private readonly jobRepository;
    constructor(jobRepository: Repository<Jobs>);
    create(createJobDto: CreateJobDto): Promise<{
        message: string;
        job: any;
    }>;
    findAllJobs(id: number, pagination: {
        search?: string;
        page?: number;
        limit?: number;
    }): Promise<{
        data: any;
        pagination: {
            currentPage: number;
            itemsPerPage: number;
            totalItems: any;
            totalPages: number;
            hasNext: boolean;
            hasPrevious: boolean;
        };
    }>;
    findOne(id: number): Promise<any>;
    update(id: number, updateJobDto: UpdateJobDto): Promise<{
        message: string;
    }>;
    remove(id: number): string;
}
