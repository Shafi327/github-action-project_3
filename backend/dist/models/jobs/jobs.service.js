"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("./entities");
const enum_1 = require("./enum");
let JobsService = class JobsService {
    constructor(jobRepository) {
        this.jobRepository = jobRepository;
    }
    async create(createJobDto) {
        const { industry, ...job } = await this.jobRepository.save(createJobDto);
        return { message: 'job created successfully', job };
    }
    async findAllJobs(id, pagination) {
        const { search, page, limit } = pagination;
        const query = this.jobRepository
            .createQueryBuilder('jobs')
            .leftJoin('jobs.applications', 'applications')
            .leftJoin('applications.student', 'student', 'student.id=:id', { id })
            .loadRelationCountAndMap('jobs.applicationCount', 'jobs.applications')
            .select(['jobs', 'applications.hasApplied'])
            .addSelect(['jobs.createdAt', 'jobs.updatedAt'])
            .where('jobs.jobStatus=:status', { status: enum_1.jobStatus.ACTIVE })
            .orderBy('jobs.createdAt', 'DESC')
            .skip((page - 1) * limit)
            .take(limit);
        if (search) {
            query.where('LOWER(jobs.jobType) LIKE (:search) OR LOWER(jobs.title) LIKE (:search) OR LOWER(jobs.department) LIKE (:search) OR LOWER(jobs.skills) LIKE (:search)', {
                search: `%${search.toLowerCase()}%`,
            });
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
    async findOne(id) {
        const job = await this.jobRepository
            .createQueryBuilder('job')
            .addSelect(['job.createdAt', 'job.updatedAt'])
            .where('job.id= :id', { id })
            .loadRelationCountAndMap('job.applicationCount', 'job.applications')
            .getOne();
        if (!job)
            throw new common_1.NotFoundException(`job not fount with job id: ${id}`);
        return job;
    }
    async update(id, updateJobDto) {
        const result = await this.jobRepository.update(id, updateJobDto);
        if (result.affected === 0)
            throw new common_1.NotFoundException(`Job with ID ${id} not found`);
        return { message: 'job updated successfully' };
    }
    remove(id) {
        return `This action removes a #${id} job`;
    }
};
exports.JobsService = JobsService;
exports.JobsService = JobsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Jobs)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], JobsService);
//# sourceMappingURL=jobs.service.js.map