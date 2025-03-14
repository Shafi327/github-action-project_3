import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { accountDto } from 'src/models/student/dto';
import { companyDto } from './company.dto';
import { User } from 'src/models/users/entities';

export class CreateIndustryDto {
  @ValidateNested()
  @Type(() => accountDto)
  account: accountDto;

  @ValidateNested()
  @Type(() => companyDto)
  company: companyDto;

  @IsOptional()
  user?: User;
}
