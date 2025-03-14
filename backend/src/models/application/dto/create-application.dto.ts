import { IsOptional } from 'class-validator';
import { Jobs } from 'src/models/jobs/entities';
import { Student } from 'src/models/student/entities';

export class CreateApplicationDto {
  @IsOptional()
  student?: Student;

  @IsOptional()
  job: Jobs;

  @IsOptional()
  hasApplied: boolean = false;
}
