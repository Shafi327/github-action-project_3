import { UsersService } from './../users/users.service';
import { ApplicationService } from './application.service';
import { UpdateApplicationStatusDto } from './dto/update-status.dto';
export declare class ApplicationController {
    private readonly applicationService;
    private readonly usersService;
    constructor(applicationService: ApplicationService, usersService: UsersService);
    sendJobApplication(req: any, jobId: number): Promise<any>;
    findOne(id: string): string;
    deleteApplication(req: any, applicationId: number): Promise<{
        message: string;
    }>;
    listStudentAppliedApplication(req: any, pagination: {
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
    updateApplicationStatus(applicationId: number, applicationStatus: UpdateApplicationStatusDto): Promise<any>;
}
