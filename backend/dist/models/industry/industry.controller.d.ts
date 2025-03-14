import { UsersService } from './../users/users.service';
import { IndustryService } from './industry.service';
import { UpdateIndustryDto } from './dto/update-industry.dto';
import { accountDto } from '../student/dto';
import { companyDto } from './dto/company.dto';
export declare class IndustryController {
    private readonly industryService;
    private readonly usersService;
    constructor(industryService: IndustryService, usersService: UsersService);
    create(account: accountDto, company: companyDto, file: Express.Multer.File): Promise<{
        message: string;
        company: companyDto;
    }>;
    getProfile(req: any): Promise<any>;
    industryJobs(req: any, pagination: {
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
    update(id: string, updateIndustryDto: UpdateIndustryDto): string;
    remove(id: string): string;
    appliedStudents(req: any): Promise<any>;
}
