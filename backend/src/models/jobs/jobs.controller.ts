import { UsersService } from './../users/users.service';
import { Industry } from 'src/models/industry/entities';
import { IndustryService } from './../industry/industry.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Request,
  UseGuards,
  Query,
  Req,
  InternalServerErrorException,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { jwtAuthGuard, RolesGuard } from 'src/auth/guards';
import { Pagination, Roles } from 'src/decorator';
import { userRole } from '../users/enum';

@Controller('jobs')
export class JobsController {
  constructor(
    private readonly jobsService: JobsService,
    private readonly industryService: IndustryService,
    private readonly usersService: UsersService,
  ) {}
  @UseGuards(jwtAuthGuard)
  @Post('/create')
  async create(@Request() req: any, @Body() createJobDto: CreateJobDto) {
    try {
      const { user, ...industry } = await this.industryService.findOne(
        req.user?.id,
      );

      return await this.jobsService.create({
        ...createJobDto,
        industry: industry as Industry,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'error creating job',
        error.message,
      );
    }
  }
  @Roles(userRole.Student)
  @UseGuards(jwtAuthGuard, RolesGuard)
  @Get('/list')
  async listAllActiveJobs(
    @Req() req: any,
    @Pagination()
    pagination: { search?: string; page?: number; limit?: number },
  ) {
    const { student } = await this.usersService.findOneStudent(req.user.id);
    return await this.jobsService.findAllJobs(student.id, pagination);
  }

  @Get('/detail/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.jobsService.findOne(+id);
  }

  @Patch('/update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateJobDto: UpdateJobDto,
  ) {
    return await this.jobsService.update(+id, updateJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobsService.remove(+id);
  }
}
