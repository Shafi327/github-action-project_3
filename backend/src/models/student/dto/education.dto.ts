import { IsNotEmpty, IsOptional } from 'class-validator';

export class educationDto {
  @IsOptional()
  degreeType?: string;

  @IsNotEmpty()
  university: string;

  @IsNotEmpty()
  year: string;

  @IsOptional()
  gpa: string;
}
