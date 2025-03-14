import { UsersService } from './../users/users.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  UseInterceptors,
  UploadedFile,
  Req,
} from '@nestjs/common';
import { IndustryService } from './industry.service';
import { CreateIndustryDto } from './dto/create-industry.dto';
import { UpdateIndustryDto } from './dto/update-industry.dto';
import { accountDto, personalDto } from '../student/dto';
import { userRole } from '../users/enum';
import { jwtAuthGuard, RolesGuard } from 'src/auth/guards';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/middleware';
import { companyDto } from './dto/company.dto';
import { Pagination, Roles } from 'src/decorator';

@Controller('industry')
export class IndustryController {
  constructor(
    private readonly industryService: IndustryService,
    private readonly usersService: UsersService,
  ) {}

  @Post('/register')
  @UseInterceptors(FileInterceptor('avatar', multerOptions))
  async create(
    @Body() account: accountDto,
    @Body() company: companyDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const avatarUrl = file ? file.path : null;

    const user = await this.usersService.create({
      account,
      role: userRole.Industry,
      personal: {
        name: company.companyName,
        location: company.address,
        avatar: avatarUrl,
      } as personalDto,
    });

    return await this.industryService.create({ account, company, user });
  }

  @UseGuards(jwtAuthGuard)
  @Get('/profile')
  async getProfile(@Request() req: any) {
    return await this.industryService.findOne(req.user.id);
  }
  @Roles(userRole.Industry)
  @UseGuards(jwtAuthGuard, RolesGuard)
  @Get('/jobs')
  async industryJobs(
    @Request() req: any,
    @Pagination()
    pagination: { search?: string; page?: number; limit?: number },
  ) {
    return await this.industryService.industryJobs(req.user.id, pagination);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIndustryDto: UpdateIndustryDto,
  ) {
    return this.industryService.update(+id, updateIndustryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.industryService.remove(+id);
  }
  @Roles(userRole.Industry)
  @UseGuards(jwtAuthGuard, RolesGuard)
  @Get('/studentsApplied')
  async appliedStudents(@Req() req: any) {
    const { user, ...industry } = await this.industryService.findOne(
      req.user?.id,
    );
    const { jobs } = await this.industryService.appliedStudent(industry.id);
    return jobs;
  }
}
