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
exports.ApplicationController = void 0;
const users_service_1 = require("./../users/users.service");
const common_1 = require("@nestjs/common");
const application_service_1 = require("./application.service");
const guards_1 = require("../../auth/guards");
const decorator_1 = require("../../decorator");
const enum_1 = require("../users/enum");
const update_status_dto_1 = require("./dto/update-status.dto");
let ApplicationController = class ApplicationController {
    constructor(applicationService, usersService) {
        this.applicationService = applicationService;
        this.usersService = usersService;
    }
    async sendJobApplication(req, jobId) {
        const { student } = await this.usersService.findOneStudent(req.user.id);
        return await this.applicationService.sendJobApplication({
            student,
            hasApplied: true,
            job: { id: jobId },
        });
    }
    findOne(id) {
        return this.applicationService.findOne(+id);
    }
    async deleteApplication(req, applicationId) {
        const { student } = await this.usersService.findOneStudent(req.user?.id);
        return await this.applicationService.deleteApplication(student.id, applicationId);
    }
    async listStudentAppliedApplication(req, pagination) {
        const { student } = await this.usersService.findOneStudent(req.user?.id);
        return await this.applicationService.listAppliedApplication(student.id, pagination);
    }
    async updateApplicationStatus(applicationId, applicationStatus) {
        try {
            return await this.applicationService.updateStudentJobApplicationStatus(applicationId, applicationStatus);
        }
        catch (error) {
            throw new error(error.message);
        }
    }
};
exports.ApplicationController = ApplicationController;
__decorate([
    (0, common_1.UseGuards)(guards_1.jwtAuthGuard),
    (0, common_1.Post)('/student/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ApplicationController.prototype, "sendJobApplication", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApplicationController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.jwtAuthGuard),
    (0, common_1.Delete)('/student/delete/:applicationId'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('applicationId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ApplicationController.prototype, "deleteApplication", null);
__decorate([
    (0, decorator_1.Roles)(enum_1.userRole.Student),
    (0, common_1.UseGuards)(guards_1.jwtAuthGuard, guards_1.RolesGuard),
    (0, common_1.Get)('/student/applied'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, decorator_1.Pagination)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ApplicationController.prototype, "listStudentAppliedApplication", null);
__decorate([
    (0, decorator_1.Roles)(enum_1.userRole.Industry),
    (0, common_1.UseGuards)(guards_1.jwtAuthGuard, guards_1.RolesGuard),
    (0, common_1.Patch)('student/job/update-status/:applicationId'),
    __param(0, (0, common_1.Param)('applicationId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_status_dto_1.UpdateApplicationStatusDto]),
    __metadata("design:returntype", Promise)
], ApplicationController.prototype, "updateApplicationStatus", null);
exports.ApplicationController = ApplicationController = __decorate([
    (0, common_1.Controller)('application'),
    __metadata("design:paramtypes", [application_service_1.ApplicationService,
        users_service_1.UsersService])
], ApplicationController);
//# sourceMappingURL=application.controller.js.map