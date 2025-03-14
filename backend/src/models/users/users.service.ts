import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities';
import { Repository } from 'typeorm';
import { Student } from '../student/entities';
import { Industry } from '../industry/entities';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const { personal, account } = createUserDto;

    personal.name = personal.name
      ? personal.name
      : personal?.firstName.concat(' ', personal?.lastName);

    const userExist = await this.findByEmail(account.email);

    if (userExist) throw new BadRequestException('user already exist');

    const user = await this.userRepository.save({
      ...createUserDto,
      ...personal,
      ...account,
    });
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.email = :email', { email })
      .getOne();

    return user;
  }

  async findOneStudent(id: number) {
    const query = await this.userRepository
      .createQueryBuilder('user')
      .leftJoin('user.student', 'student')
      .addSelect('student')
      .where('user.id = :id', { id })
      .getOne();

    if (!query.student) throw new NotFoundException(`student not found `);
    return query;
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }

  async findOneIndustry(id: number) {
    const query = await this.userRepository
      .createQueryBuilder('user')
      .leftJoin('user.industry', 'industry')
      .addSelect('industry')
      .where('user.id = :id', { id })
      .getOne();

    if (!query.industry) throw new NotFoundException(`industry not found `);
    return query;
  }
}
