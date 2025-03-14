import { CreateApplicationDto } from './dto/create-application.dto';
import { Application } from './entities';
import { Repository } from 'typeorm';
import { UpdateApplicationStatusDto } from './dto/update-status.dto';
export declare class ApplicationService {
    private readonly applicationRepo;
    constructor(applicationRepo: Repository<Application>);
    sendJobApplication(createApplicationDto: CreateApplicationDto): Promise<any>;
    listAppliedApplication(id: number, pagination: {
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
    deleteApplication(id: number, applicationId: number): Promise<{
        message: string;
    }>;
    findOne(id: number): string;
    updateStudentJobApplicationStatus(id: number, applicationStatus: UpdateApplicationStatusDto): Promise<any>;
    remove(id: number): string;
}
