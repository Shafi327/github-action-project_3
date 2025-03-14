import { IsNotEmpty, IsOptional } from 'class-validator';

export class companyDto {
  @IsNotEmpty()
  companyName: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  city: string;

  @IsOptional()
  companySize?: string;

  @IsNotEmpty()
  country: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  website?: string;
}
