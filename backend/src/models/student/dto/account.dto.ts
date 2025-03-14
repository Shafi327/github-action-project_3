import { IsEmail, IsNotEmpty } from 'class-validator';

export class accountDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'enter valid email' })
  email: string;

  @IsNotEmpty()
  password: string;
}
