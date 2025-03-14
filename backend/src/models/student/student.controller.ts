import {
  accountDto,
  educationDto,
  ExperienceDto,
  personalDto,
  skillsDto,
  UpdateEducationDto,
  UpdateExperienceDto,
} from 'src/models/student/dto';
import { UsersService } from './../users/users.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  UseGuards,
  Request,
  UseInterceptors,
  UploadedFile,
  Req,
  InternalServerErrorException,
  ParseIntPipe,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities';
import { jwtAuthGuard, RolesGuard } from 'src/auth/guards';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/middleware';
import { Roles } from 'src/decorator';
import { userRole } from '../users/enum';

@Controller('student')
export class StudentController {
  constructor(
    private readonly studentService: StudentService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('avatar', multerOptions))
  async create(
    @Body() userDto: CreateUserDto,
    @Body() createStudentDto: CreateStudentDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    console.log('file', file);
    try {
      const avatarUrl = file ? file.path : null;
      userDto.personal.avatar = avatarUrl;

      const user = (({ personal, account, password, ...user }) => user)(
        await this.usersService.create(userDto),
      );
      if (!user) throw new BadRequestException('error while creating user');
      return await this.studentService.create({
        ...createStudentDto,
        user: user as User,
      });
    } catch (error) {
      throw new InternalServerErrorException('Error creating user');
    }
  }

  @UseGuards(jwtAuthGuard)
  @Get('/profile')
  async profile(@Request() req: any) {
    const { user } = req;

    return await this.studentService.findOne(user.id);
  }
  @Roles(userRole.Student)
  @UseGuards(jwtAuthGuard, RolesGuard)
  @Post('/add-education')
  async addEducation(@Req() req: any, @Body() eduction: educationDto) {
    const { student } = await this.usersService.findOneStudent(req.user?.id);
    return await this.studentService.addEducationDetails(eduction, student);
  }
  @Delete('/delete/education/:educationId')
  @UseGuards(jwtAuthGuard)
  async deleteEducation(
    @Param('educationId', ParseIntPipe) educationId: number,
  ) {
    return await this.studentService.deleteEducation(educationId);
  }
  @UseGuards(jwtAuthGuard)
  @Patch('/update-education/:educationId')
  async updateEducation(
    @Param('educationId', ParseIntPipe) educationId: number,
    @Body() updateEducationDto: UpdateEducationDto,
  ) {
    return await this.studentService.updateEducation(
      educationId,
      updateEducationDto,
    );
  }
  @Roles(userRole.Student)
  @UseGuards(jwtAuthGuard, RolesGuard)
  @Post('/add-experience')
  async addExperience(@Req() req: any, @Body() experienceDto: ExperienceDto) {
    const { student } = await this.usersService.findOneStudent(req.user?.id);

    return await this.studentService.addExperienceDetails({
      ...experienceDto,
      student,
    });
  }
  @Roles(userRole.Student)
  @UseGuards(jwtAuthGuard, RolesGuard)
  @Delete('/delete/experience/:experienceId')
  async deleteExperience(
    @Req() req: any,
    @Param('experienceId', ParseIntPipe) experienceId: number,
  ) {
    const { student } = await this.usersService.findOneStudent(req.user?.id);
    return await this.studentService.deleteExperience(experienceId, student.id);
  }
  @UseGuards(jwtAuthGuard)
  @Patch('/update-experience/:experienceId')
  async updateExperience(
    @Param('experienceId', ParseIntPipe) experienceId: number,
    @Body() updateExperienceDto: UpdateExperienceDto,
  ) {
    return await this.studentService.updateExperience(
      experienceId,
      updateExperienceDto,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(parseInt(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
}
