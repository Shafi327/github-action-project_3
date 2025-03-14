import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { educationDto, accountDto, personalDto, skillsDto } from './index';
import { Type } from 'class-transformer';
import { User } from 'src/models/users/entities';

export class CreateStudentDto {
  @ValidateNested()
  @Type(() => educationDto)
  education: educationDto; // student

  @ValidateNested()
  @Type(() => skillsDto)
  skills: skillsDto; //student

  @IsOptional()
  user?: User;
}
