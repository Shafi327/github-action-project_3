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
exports.ApplicationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const typeorm_2 = require("typeorm");
let ApplicationService = class ApplicationService {
    constructor(applicationRepo) {
        this.applicationRepo = applicationRepo;
    }
    async sendJobApplication(createApplicationDto) {
        return await this.applicationRepo.save(createApplicationDto);
    }
    async listAppliedApplication(id, pagination) {
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
            query.where('LOWER(application.status) LIKE (:search) OR LOWER(job.title) LIKE (:search) ', {
                search: `%${search}%`,
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
    async deleteApplication(id, applicationId) {
        const application = await this.applicationRepo
            .createQueryBuilder()
            .delete()
            .where('student = :id', { id })
            .andWhere('id = :applicationId', { applicationId })
            .execute();
        if (application.affected == 1)
            return { message: 'Experience deleted successfully ' };
    }
    findOne(id) {
        return `This action returns a #${id} application`;
    }
    async updateStudentJobApplicationStatus(id, applicationStatus) {
        const { status } = applicationStatus;
        try {
            const updateStatus = await this.applicationRepo.preload({
                id,
                status,
            });
            return await this.applicationRepo.save(updateStatus);
        }
        catch (error) {
            throw new error(error.message);
        }
    }
    remove(id) {
        return `This action removes a #${id} application`;
    }
};
exports.ApplicationService = ApplicationService;
exports.ApplicationService = ApplicationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Application)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ApplicationService);
//# sourceMappingURL=application.service.js.map