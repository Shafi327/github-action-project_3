import { educationDto, ExperienceDto, UpdateEducationDto, UpdateExperienceDto } from 'src/models/student/dto';
import { UsersService } from './../users/users.service';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class StudentController {
    private readonly studentService;
    private readonly usersService;
    constructor(studentService: StudentService, usersService: UsersService);
    create(userDto: CreateUserDto, createStudentDto: CreateStudentDto, file?: Express.Multer.File): Promise<any>;
    profile(req: any): Promise<any>;
    addEducation(req: any, eduction: educationDto): Promise<any>;
    deleteEducation(educationId: number): Promise<any>;
    updateEducation(educationId: number, updateEducationDto: UpdateEducationDto): Promise<any>;
    addExperience(req: any, experienceDto: ExperienceDto): Promise<any>;
    deleteExperience(req: any, experienceId: number): Promise<{
        message: string;
    }>;
    updateExperience(experienceId: number, updateExperienceDto: UpdateExperienceDto): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateStudentDto: UpdateStudentDto): string;
    remove(id: string): string;
}
