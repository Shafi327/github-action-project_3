import { accountDto } from 'src/models/student/dto';
import { companyDto } from './company.dto';
import { User } from 'src/models/users/entities';
export declare class CreateIndustryDto {
    account: accountDto;
    company: companyDto;
    user?: User;
}
