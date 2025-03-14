import { educationDto, skillsDto } from './index';
import { User } from 'src/models/users/entities';
export declare class CreateStudentDto {
    education: educationDto;
    skills: skillsDto;
    user?: User;
}
