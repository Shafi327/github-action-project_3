import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class personalDto {
  @IsOptional()
  firstName?: string;

  @IsOptional()
  lastName?: string;

  @IsOptional()
  location?: string;

  @IsOptional()
  name?: string;

  @IsOptional()
  avatar?: string;

  @IsOptional()
  @MinLength(11)
  phone?: string;
}
