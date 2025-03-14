import {
  IsEmail,
  IsEnum,
  isNotEmpty,
  IsNotEmpty,
  IsOptional,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { userRole } from '../enum';
import { Type } from 'class-transformer';
import { accountDto, personalDto } from 'src/models/student/dto';

export class CreateUserDto {
  @ValidateNested()
  @Type(() => personalDto)
  personal: personalDto; //user

  @ValidateNested()
  @Type(() => accountDto)
  account: accountDto;

  @IsOptional()
  @IsEnum(userRole, {
    message: `Role must be one of the following:${Object.values(userRole).join(', ')}`,
  })
  role: userRole;
}
