import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<any>;
    findAll(): string;
    findByEmail(email: string): Promise<any>;
    findOneStudent(id: number): Promise<any>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): Promise<any>;
    findOneIndustry(id: number): Promise<any>;
}
