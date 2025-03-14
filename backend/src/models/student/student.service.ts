import { UpdateEducationDto } from './dto/update-education.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { ExperienceDto } from './dto/experience.dto';
import { personalDto } from './dto/personal.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Education, Experience, Student } from './entities';
import { Repository } from 'typeorm';
import { educationDto, skillsDto } from './dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepo: Repository<Student>,
    @InjectRepository(Education)
    private readonly educationRepo: Repository<Education>,
    @InjectRepository(Experience)
    private readonly experienceRepo: Repository<Experience>,
  ) {}
  async create(createStudentDto: CreateStudentDto) {
    const { education, skills, user } = createStudentDto;
    const student = await this.studentRepo.save({
      user,
      skills: skills.skills,
      languages: skills.languages,
    });
    await this.educationRepo.save({ ...education, student });

    return student;
  }

  async addEducationDetails(education: educationDto, student: Student) {
    return await this.educationRepo.save({ ...education, student });
  }
  async deleteEducation(educationId: number) {
    const deleteEducation = await this.educationRepo.delete({
      id: educationId,
    });

    return deleteEducation;
  }
  async updateEducation(id: number, updateEducationDto: UpdateEducationDto) {
    const updateEducation = await this.educationRepo.preload({
      id,
      ...updateEducationDto,
    });

    if (!updateEducation)
      throw new BadRequestException(`education not found with id ${id}`);

    return await this.educationRepo.save(updateEducation);
  }
  async addExperienceDetails(experienceDto: ExperienceDto) {
    return await this.experienceRepo.save(experienceDto);
  }
  async deleteExperience(experienceId: number, studentId: number) {
    const deleteExperience = await this.experienceRepo
      .createQueryBuilder()
      .delete()
      .where('id= :experienceId', { experienceId })
      .andWhere('student= :studentId', { studentId })
      .execute();

    if (deleteExperience.affected == 1)
      return { message: 'Experience deleted successfully ' };
  }
  async updateExperience(id: number, updateExperienceDto: UpdateExperienceDto) {
    const experience = await this.experienceRepo.preload({
      id,
      ...updateExperienceDto,
    });
    if (!experience)
      throw new BadRequestException(`experience not found with id ${id}`);

    return await this.experienceRepo.save(experience);
  }

  findAll() {
    return `This action returns all student`;
  }

  async findOne(id: number) {
    const student = await this.studentRepo
      .createQueryBuilder('student')
      .leftJoin('student.user', 'user')
      .leftJoin('student.education', 'education')
      .leftJoin('student.experiences', 'experiences')
      .select(['student', 'user', 'education', 'experiences'])
      .where('user.id=:id', { id })
      .getOne();

    return student;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
