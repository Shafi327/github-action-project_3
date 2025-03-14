import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateIndustryDto } from './dto/create-industry.dto';
import { UpdateIndustryDto } from './dto/update-industry.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Industry } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class IndustryService {
  constructor(
    @InjectRepository(Industry)
    private readonly industryRepo: Repository<Industry>,
  ) {}

  async create(createIndustryDto: CreateIndustryDto) {
    const { company, account, user } = createIndustryDto;

    await this.industryRepo.save({ ...company, ...account, user });

    return { message: 'company registered successfully  ', company };
  }

  async industryJobs(
    id: number,
    pagination: { search?: string; page?: number; limit?: number },
  ) {
    const { search, page, limit } = pagination;
    const query = this.industryRepo
      .createQueryBuilder('industry')
      .leftJoin('industry.user', 'user')
      .leftJoin('industry.jobs', 'jobs')
      .addSelect(['jobs', 'jobs.createdAt', 'jobs.updatedAt'])
      .loadRelationCountAndMap('jobs.applicationCount', 'jobs.applications')
      .where('user.id=:id', { id });

    if (search) {
      query.where(
        'LOWER(jobs.jobType) LIKE (:search) OR LOWER(jobs.title) LIKE (:search) OR LOWER(jobs.department) LIKE (:search) OR LOWER(jobs.skills) LIKE (:search)',
        {
          search: `%${search.toLowerCase()}%`,
        },
      );
    }

    const industry = await query.getOne();
    const totalItems = industry.jobs.length;
    const totalPages = Math.ceil(totalItems / limit);
    // Calculate pagination for the jobs array,
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const data = industry.jobs.slice(startIndex, endIndex);

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

  findAll() {
    return `This action returns all industry`;
  }

  async findOne(id: number) {
    const user = await this.industryRepo
      .createQueryBuilder('industry')
      .leftJoin('industry.user', 'user')
      .addSelect(['industry', 'user'])
      .where('user.id= :id', { id })
      .getOne();
    if (!user) throw new BadRequestException('user not found');

    return user;
  }

  update(id: number, updateIndustryDto: UpdateIndustryDto) {
    return `This action updates a #${id} industry`;
  }

  remove(id: number) {
    return `This action removes a #${id} industry`;
  }

  async appliedStudent(id: number) {
    return await this.industryRepo
      .createQueryBuilder('industry')
      .select('industry.id')
      .leftJoin('industry.jobs', 'jobs')
      .leftJoin('jobs.applications', 'applications')
      .leftJoin('applications.student', 'student')
      .addSelect([
        'jobs.id',
        'jobs.jobType',
        'applications.id',
        'applications.status',
        'student',
      ])
      .where('industry.id=:id', { id })
      .getOne();
  }
}
