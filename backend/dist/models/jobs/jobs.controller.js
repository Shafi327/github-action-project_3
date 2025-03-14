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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsController = void 0;
const users_service_1 = require("./../users/users.service");
const industry_service_1 = require("./../industry/industry.service");
const common_1 = require("@nestjs/common");
const jobs_service_1 = require("./jobs.service");
const create_job_dto_1 = require("./dto/create-job.dto");
const update_job_dto_1 = require("./dto/update-job.dto");
const guards_1 = require("../../auth/guards");
const decorator_1 = require("../../decorator");
const enum_1 = require("../users/enum");
let JobsController = class JobsController {
    constructor(jobsService, industryService, usersService) {
        this.jobsService = jobsService;
        this.industryService = industryService;
        this.usersService = usersService;
    }
    async create(req, createJobDto) {
        try {
            const { user, ...industry } = await this.industryService.findOne(req.user?.id);
            return await this.jobsService.create({
                ...createJobDto,
                industry: industry,
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('error creating job', error.message);
        }
    }
    async listAllActiveJobs(req, pagination) {
        const { student } = await this.usersService.findOneStudent(req.user.id);
        return await this.jobsService.findAllJobs(student.id, pagination);
    }
    async findOne(id) {
        return await this.jobsService.findOne(+id);
    }
    async update(id, updateJobDto) {
        return await this.jobsService.update(+id, updateJobDto);
    }
    remove(id) {
        return this.jobsService.remove(+id);
    }
};
exports.JobsController = JobsController;
__decorate([
    (0, common_1.UseGuards)(guards_1.jwtAuthGuard),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_job_dto_1.CreateJobDto]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "create", null);
__decorate([
    (0, decorator_1.Roles)(enum_1.userRole.Student),
    (0, common_1.UseGuards)(guards_1.jwtAuthGuard, guards_1.RolesGuard),
    (0, common_1.Get)('/list'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, decorator_1.Pagination)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "listAllActiveJobs", null);
__decorate([
    (0, common_1.Get)('/detail/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_job_dto_1.UpdateJobDto]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobsController.prototype, "remove", null);
exports.JobsController = JobsController = __decorate([
    (0, common_1.Controller)('jobs'),
    __metadata("design:paramtypes", [jobs_service_1.JobsService,
        industry_service_1.IndustryService,
        users_service_1.UsersService])
], JobsController);
//# sourceMappingURL=jobs.controller.js.map