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
exports.IndustryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const typeorm_2 = require("typeorm");
let IndustryService = class IndustryService {
    constructor(industryRepo) {
        this.industryRepo = industryRepo;
    }
    async create(createIndustryDto) {
        const { company, account, user } = createIndustryDto;
        await this.industryRepo.save({ ...company, ...account, user });
        return { message: 'company registered successfully  ', company };
    }
    async industryJobs(id, pagination) {
        const { search, page, limit } = pagination;
        const query = this.industryRepo
            .createQueryBuilder('industry')
            .leftJoin('industry.user', 'user')
            .leftJoin('industry.jobs', 'jobs')
            .addSelect(['jobs', 'jobs.createdAt', 'jobs.updatedAt'])
            .loadRelationCountAndMap('jobs.applicationCount', 'jobs.applications')
            .where('user.id=:id', { id });
        if (search) {
            query.where('LOWER(jobs.jobType) LIKE (:search) OR LOWER(jobs.title) LIKE (:search) OR LOWER(jobs.department) LIKE (:search) OR LOWER(jobs.skills) LIKE (:search)', {
                search: `%${search.toLowerCase()}%`,
            });
        }
        const industry = await query.getOne();
        const totalItems = industry.jobs.length;
        const totalPages = Math.ceil(totalItems / limit);
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
    async findOne(id) {
        const user = await this.industryRepo
            .createQueryBuilder('industry')
            .leftJoin('industry.user', 'user')
            .addSelect(['industry', 'user'])
            .where('user.id= :id', { id })
            .getOne();
        if (!user)
            throw new common_1.BadRequestException('user not found');
        return user;
    }
    update(id, updateIndustryDto) {
        return `This action updates a #${id} industry`;
    }
    remove(id) {
        return `This action removes a #${id} industry`;
    }
    async appliedStudent(id) {
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
};
exports.IndustryService = IndustryService;
exports.IndustryService = IndustryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Industry)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], IndustryService);
//# sourceMappingURL=industry.service.js.map