import { IsArray, IsOptional } from 'class-validator';

export class skillsDto {
  @IsOptional()
  @IsArray()
  languages?: [string];

  @IsOptional()
  @IsArray()
  skills?: [string];
}
