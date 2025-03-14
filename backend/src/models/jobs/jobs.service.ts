import { Pagination } from './../../decorator/pagination.decorator';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Jobs } from './entities';
import { jobStatus } from './enum';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Jobs) private readonly jobRepository: Repository<Jobs>,
  ) { }
  async create(createJobDto: CreateJobDto) {
    const { industry, ...job } = await this.jobRepository.save(createJobDto);

    return { message: 'job created successfully', job };
  }

  async findAllJobs(
    id: number,
    pagination: { search?: string; page?: number; limit?: number },
  ) {
    const { search, page, limit } = pagination;
    const query = this.jobRepository
      .createQueryBuilder('jobs')
      .leftJoin('jobs.applications', 'applications')
      .leftJoin('applications.student', 'student', 'student.id=:id', { id })
      .loadRelationCountAndMap('jobs.applicationCount', 'jobs.applications')
      .select(['jobs', 'applications.hasApplied'])
      .addSelect(['jobs.createdAt', 'jobs.updatedAt'])
      .where('jobs.jobStatus=:status', { status: jobStatus.ACTIVE })
      .orderBy('jobs.createdAt', 'DESC')
      .skip((page - 1) * limit)
      .take(limit);

    if (search) {
      query.where(
        'LOWER(jobs.jobType) LIKE (:search) OR LOWER(jobs.title) LIKE (:search) OR LOWER(jobs.department) LIKE (:search) OR LOWER(jobs.skills) LIKE (:search)',
        {
          search: `%${search.toLowerCase()}%`,
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

  async findOne(id: number) {
    const job = await this.jobRepository
      .createQueryBuilder('job')
      .addSelect(['job.createdAt', 'job.updatedAt'])
      .where('job.id= :id', { id })
      .loadRelationCountAndMap('job.applicationCount', 'job.applications')
      .getOne();
    if (!job) throw new NotFoundException(`job not fount with job id: ${id}`);
    return job;
  }

  async update(id: number, updateJobDto: UpdateJobDto) {
    const result = await this.jobRepository.update(id, updateJobDto);
    if (result.affected === 0)
      throw new NotFoundException(`Job with ID ${id} not found`);

    return { message: 'job updated successfully' };
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }
}
