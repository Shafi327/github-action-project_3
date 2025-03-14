import { IsNotEmpty, IsOptional } from 'class-validator';
import { companyDto } from './../../industry/dto/company.dto';
import { Student } from '../entities';
export class ExperienceDto {
  @IsNotEmpty()
  position: string;

  @IsNotEmpty()
  company: string;

  @IsNotEmpty()
  period: string;

  @IsNotEmpty()
  location: string;

  @IsOptional()
  description?: [string];

  @IsNotEmpty()
  skills: [string];

  @IsOptional()
  student: Student;
}
