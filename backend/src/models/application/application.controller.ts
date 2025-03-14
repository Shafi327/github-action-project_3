import { UsersService } from './../users/users.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApplicationService } from './application.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { jwtAuthGuard, RolesGuard } from 'src/auth/guards';
import { Student } from '../student/entities';
import { Jobs } from '../jobs/entities';
import { Pagination, Roles } from 'src/decorator';
import { userRole } from '../users/enum';
import { jobStatus } from './enum';
import { UpdateApplicationStatusDto } from './dto/update-status.dto';

@Controller('application')
export class ApplicationController {
  constructor(
    private readonly applicationService: ApplicationService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(jwtAuthGuard)
  @Post('/student/:id')
  async sendJobApplication(
    @Req() req: any,
    @Param('id', ParseIntPipe) jobId: number,
  ) {
    const { student } = await this.usersService.findOneStudent(req.user.id);

    return await this.applicationService.sendJobApplication({
      student,
      hasApplied: true,
      job: { id: jobId } as Jobs,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationService.findOne(+id);
  }

  @UseGuards(jwtAuthGuard)
  @Delete('/student/delete/:applicationId')
  async deleteApplication(
    @Req() req: any,
    @Param('applicationId', ParseIntPipe) applicationId: number,
  ) {
    const { student } = await this.usersService.findOneStudent(req.user?.id);
    return await this.applicationService.deleteApplication(
      student.id,
      applicationId,
    );
  }

  @Roles(userRole.Student)
  @UseGuards(jwtAuthGuard, RolesGuard)
  @Get('/student/applied')
  async listStudentAppliedApplication(
    @Req() req: any,
    @Pagination()
    pagination: { search?: string; page?: number; limit?: number },
  ) {
    const { student } = await this.usersService.findOneStudent(req.user?.id);

    return await this.applicationService.listAppliedApplication(
      student.id,
      pagination,
    );
  }

  @Roles(userRole.Industry)
  @UseGuards(jwtAuthGuard, RolesGuard)
  @Patch('student/job/update-status/:applicationId')
  async updateApplicationStatus(
    @Param('applicationId', ParseIntPipe) applicationId: number,
    @Body() applicationStatus: UpdateApplicationStatusDto,
  ) {
    try {
      return await this.applicationService.updateStudentJobApplicationStatus(
        applicationId,
        applicationStatus,
      );
    } catch (error) {
      throw new error(error.message);
    }
  }
}
