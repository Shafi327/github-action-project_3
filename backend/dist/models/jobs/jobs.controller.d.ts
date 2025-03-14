import { UsersService } from './../users/users.service';
import { IndustryService } from './../industry/industry.service';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
export declare class JobsController {
    private readonly jobsService;
    private readonly industryService;
    private readonly usersService;
    constructor(jobsService: JobsService, industryService: IndustryService, usersService: UsersService);
    create(req: any, createJobDto: CreateJobDto): Promise<{
        message: string;
        job: any;
    }>;
    listAllActiveJobs(req: any, pagination: {
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
    remove(id: string): string;
}
