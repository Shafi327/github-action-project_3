import { UsersService } from './../models/users/users.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from 'src/models/users/entities';
import { JwtService } from '@nestjs/jwt';
import { accountDto } from 'src/models/student/dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(loginUser: accountDto) {
    const userExist = await this.usersService.findByEmail(loginUser.email);
    if (!userExist) throw new NotFoundException(`user not found plz sign up`);
    const { password, createdAt, updatedAt, ...user } = userExist;
    if (loginUser.password !== password)
      throw new BadRequestException('password is incorrect');

    return user;
  }
  async login(user: User) {
    const payload = {
      sub: user.id,
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    const access_token = await this.jwtService.signAsync(payload);

    return { message: 'login successfully', access_token };
  }
}
