import { PartialType } from '@nestjs/mapped-types';
import { educationDto } from './education.dto';

export class UpdateEducationDto extends PartialType(educationDto) {}
