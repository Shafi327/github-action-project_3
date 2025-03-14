import { userRole } from '../enum';
import { accountDto, personalDto } from 'src/models/student/dto';
export declare class CreateUserDto {
    personal: personalDto;
    account: accountDto;
    role: userRole;
}
