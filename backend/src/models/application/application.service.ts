import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Application } from './entities';
import { Repository } from 'typeorm';
import { UpdateApplicationStatusDto } from './dto/update-status.dto';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(Application)
    private readonly applicationRepo: Repository<Application>,
  ) { }

  async sendJobApplication(createApplicationDto: CreateApplicationDto) {
    return await this.applicationRepo.save(createApplicationDto);
  }

  async listAppliedApplication(
    id: number,
    pagination: { search?: string; page?: number; limit?: number },
  ) {
    const { search, page, limit } = pagination;

    const query = this.applicationRepo
      .createQueryBuilder('application')
      .select('application')
      .leftJoin('application.student', 'student')
      .leftJoin('application.job', 'job')
      .leftJoin('job.industry', 'industry')
      .leftJoin('industry.user', 'user')
      .where('student.id = :id', { id })
      .addSelect([
        'application.createdAt',
        'application.updatedAt',
        'job.id',
        'job.title',
        'industry',
        'user',
      ])
      .skip((page - 1) * limit)
      .take(limit);

    if (search) {
      query.where(
        'LOWER(application.status) LIKE (:search) OR LOWER(job.title) LIKE (:search) ',
        {
          search: `%${search}%`,
        },
      );
    }

    const [data, totalItems] = await query.getManyAndCount();
    const totalPages = Math.ceil(totalItems / limit);

    return {
      data,
      pagination: {
        currentPage: page,
        itemsPerPage: limit,
        totalItems,
        totalPages,
        hasNext: page < totalPages,
        hasPrevious: page > 1,
      },
    };
  }
  async deleteApplication(id: number, applicationId: number) {
    const application = await this.applicationRepo
      .createQueryBuilder()
      .delete()
      .where('student = :id', { id })
      .andWhere('id = :applicationId', { applicationId })
      .execute();

    if (application.affected == 1)
      return { message: 'Experience deleted successfully ' };
  }
  findOne(id: number) {
    return `This action returns a #${id} application`;
  }

  async updateStudentJobApplicationStatus(
    id: number,
    applicationStatus: UpdateApplicationStatusDto,
  ) {
    const { status } = applicationStatus;
    try {
      const updateStatus = await this.applicationRepo.preload({
        id,
        status,
      });
      return await this.applicationRepo.save(updateStatus);
    } catch (error) {
      throw new error(error.message);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} application`;
  }
}
