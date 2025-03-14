import { CreateIndustryDto } from './dto/create-industry.dto';
import { UpdateIndustryDto } from './dto/update-industry.dto';
import { Industry } from './entities';
import { Repository } from 'typeorm';
export declare class IndustryService {
    private readonly industryRepo;
    constructor(industryRepo: Repository<Industry>);
    create(createIndustryDto: CreateIndustryDto): Promise<{
        message: string;
        company: import("./dto/company.dto").companyDto;
    }>;
    industryJobs(id: number, pagination: {
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
    findAll(): string;
    findOne(id: number): Promise<any>;
    update(id: number, updateIndustryDto: UpdateIndustryDto): string;
    remove(id: number): string;
    appliedStudent(id: number): Promise<any>;
}
