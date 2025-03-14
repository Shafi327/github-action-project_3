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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustryController = void 0;
const users_service_1 = require("./../users/users.service");
const common_1 = require("@nestjs/common");
const industry_service_1 = require("./industry.service");
const update_industry_dto_1 = require("./dto/update-industry.dto");
const dto_1 = require("../student/dto");
const enum_1 = require("../users/enum");
const guards_1 = require("../../auth/guards");
const platform_express_1 = require("@nestjs/platform-express");
const middleware_1 = require("../../middleware");
const company_dto_1 = require("./dto/company.dto");
const decorator_1 = require("../../decorator");
let IndustryController = class IndustryController {
    constructor(industryService, usersService) {
        this.industryService = industryService;
        this.usersService = usersService;
    }
    async create(account, company, file) {
        const avatarUrl = file ? file.path : null;
        const user = await this.usersService.create({
            account,
            role: enum_1.userRole.Industry,
            personal: {
                name: company.companyName,
                location: company.address,
                avatar: avatarUrl,
            },
        });
        return await this.industryService.create({ account, company, user });
    }
    async getProfile(req) {
        return await this.industryService.findOne(req.user.id);
    }
    async industryJobs(req, pagination) {
        return await this.industryService.industryJobs(req.user.id, pagination);
    }
    update(id, updateIndustryDto) {
        return this.industryService.update(+id, updateIndustryDto);
    }
    remove(id) {
        return this.industryService.remove(+id);
    }
    async appliedStudents(req) {
        const { user, ...industry } = await this.industryService.findOne(req.user?.id);
        const { jobs } = await this.industryService.appliedStudent(industry.id);
        return jobs;
    }
};
exports.IndustryController = IndustryController;
__decorate([
    (0, common_1.Post)('/register'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar', middleware_1.multerOptions)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.accountDto,
        company_dto_1.companyDto, typeof (_b = typeof Express !== "undefined" && (_a = Express.Multer) !== void 0 && _a.File) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], IndustryController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.jwtAuthGuard),
    (0, common_1.Get)('/profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IndustryController.prototype, "getProfile", null);
__decorate([
    (0, decorator_1.Roles)(enum_1.userRole.Industry),
    (0, common_1.UseGuards)(guards_1.jwtAuthGuard, guards_1.RolesGuard),
    (0, common_1.Get)('/jobs'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, decorator_1.Pagination)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], IndustryController.prototype, "industryJobs", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_industry_dto_1.UpdateIndustryDto]),
    __metadata("design:returntype", void 0)
], IndustryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IndustryController.prototype, "remove", null);
__decorate([
    (0, decorator_1.Roles)(enum_1.userRole.Industry),
    (0, common_1.UseGuards)(guards_1.jwtAuthGuard, guards_1.RolesGuard),
    (0, common_1.Get)('/studentsApplied'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IndustryController.prototype, "appliedStudents", null);
exports.IndustryController = IndustryController = __decorate([
    (0, common_1.Controller)('industry'),
    __metadata("design:paramtypes", [industry_service_1.IndustryService,
        users_service_1.UsersService])
], IndustryController);
//# sourceMappingURL=industry.controller.js.map