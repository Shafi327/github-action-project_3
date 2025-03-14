import { UsersService } from './../models/users/users.service';
import { User } from 'src/models/users/entities';
import { JwtService } from '@nestjs/jwt';
import { accountDto } from 'src/models/student/dto';
export declare class AuthService {
    private readonly usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(loginUser: accountDto): Promise<any>;
    login(user: User): Promise<{
        message: string;
        access_token: any;
    }>;
}
