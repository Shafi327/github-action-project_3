import { UpdateEducationDto } from './dto/update-education.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { ExperienceDto } from './dto/experience.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Education, Experience, Student } from './entities';
import { Repository } from 'typeorm';
import { educationDto } from './dto';
export declare class StudentService {
    private readonly studentRepo;
    private readonly educationRepo;
    private readonly experienceRepo;
    constructor(studentRepo: Repository<Student>, educationRepo: Repository<Education>, experienceRepo: Repository<Experience>);
    create(createStudentDto: CreateStudentDto): Promise<any>;
    addEducationDetails(education: educationDto, student: Student): Promise<any>;
    deleteEducation(educationId: number): Promise<any>;
    updateEducation(id: number, updateEducationDto: UpdateEducationDto): Promise<any>;
    addExperienceDetails(experienceDto: ExperienceDto): Promise<any>;
    deleteExperience(experienceId: number, studentId: number): Promise<{
        message: string;
    }>;
    updateExperience(id: number, updateExperienceDto: UpdateExperienceDto): Promise<any>;
    findAll(): string;
    findOne(id: number): Promise<any>;
    update(id: number, updateStudentDto: UpdateStudentDto): string;
    remove(id: number): string;
}
