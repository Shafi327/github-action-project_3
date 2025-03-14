import { Industry } from 'src/models/industry/entities';
import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateJobDto {
  @IsNotEmpty()
  department: string;

  @IsNotEmpty()
  jobType: string;

  @IsOptional()
  jobDescription: string;

  @IsNotEmpty()
  keyResponsibilities: string;

  @IsNotEmpty()
  requirements: string;

  @IsOptional()
  salary: string;

  @IsOptional()
  title: string;

  @IsOptional()
  @IsArray()
  skills: [string];

  @IsOptional()
  industry: Industry;
}
