import { IsEnum, IsNotEmpty } from 'class-validator';
import { jobStatus } from '../enum';

export class UpdateApplicationStatusDto {
  @IsNotEmpty()
  @IsEnum(jobStatus)
  status: jobStatus;
}
