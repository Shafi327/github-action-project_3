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
exports.StudentController = void 0;
const dto_1 = require("./dto");
const users_service_1 = require("./../users/users.service");
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const create_student_dto_1 = require("./dto/create-student.dto");
const update_student_dto_1 = require("./dto/update-student.dto");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const guards_1 = require("../../auth/guards");
const platform_express_1 = require("@nestjs/platform-express");
const middleware_1 = require("../../middleware");
const decorator_1 = require("../../decorator");
const enum_1 = require("../users/enum");
let StudentController = class StudentController {
    constructor(studentService, usersService) {
        this.studentService = studentService;
        this.usersService = usersService;
    }
    async create(userDto, createStudentDto, file) {
        console.log('file', file);
        try {
            const avatarUrl = file ? file.path : null;
            userDto.personal.avatar = avatarUrl;
            const user = (({ personal, account, password, ...user }) => user)(await this.usersService.create(userDto));
            if (!user)
                throw new common_1.BadRequestException('error while creating user');
            return await this.studentService.create({
                ...createStudentDto,
                user: user,
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error creating user');
        }
    }
    async profile(req) {
        const { user } = req;
        return await this.studentService.findOne(user.id);
    }
    async addEducation(req, eduction) {
        const { student } = await this.usersService.findOneStudent(req.user?.id);
        return await this.studentService.addEducationDetails(eduction, student);
    }
    async deleteEducation(educationId) {
        return await this.studentService.deleteEducation(educationId);
    }
    async updateEducation(educationId, updateEducationDto) {
        return await this.studentService.updateEducation(educationId, updateEducationDto);
    }
    async addExperience(req, experienceDto) {
        const { student } = await this.usersService.findOneStudent(req.user?.id);
        return await this.studentService.addExperienceDetails({
            ...experienceDto,
            student,
        });
    }
    async deleteExperience(req, experienceId) {
        const { student } = await this.usersService.findOneStudent(req.user?.id);
        return await this.studentService.deleteExperience(experienceId, student.id);
    }
    async updateExperience(experienceId, updateExperienceDto) {
        return await this.studentService.updateExperience(experienceId, updateExperienceDto);
    }
    findOne(id) {
        return this.studentService.findOne(parseInt(id));
    }
    update(id, updateStudentDto) {
        return this.studentService.update(+id, updateStudentDto);
    }
    remove(id) {
        return this.studentService.remove(+id);
    }
};
exports.StudentController = StudentController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar', middleware_1.multerOptions)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto,
        create_student_dto_1.CreateStudentDto, typeof (_b = typeof Express !== "undefined" && (_a = Express.Multer) !== void 0 && _a.File) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.jwtAuthGuard),
    (0, common_1.Get)('/profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "profile", null);
__decorate([
    (0, decorator_1.Roles)(enum_1.userRole.Student),
    (0, common_1.UseGuards)(guards_1.jwtAuthGuard, guards_1.RolesGuard),
    (0, common_1.Post)('/add-education'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.educationDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "addEducation", null);
__decorate([
    (0, common_1.Delete)('/delete/education/:educationId'),
    (0, common_1.UseGuards)(guards_1.jwtAuthGuard),
    __param(0, (0, common_1.Param)('educationId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "deleteEducation", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.jwtAuthGuard),
    (0, common_1.Patch)('/update-education/:educationId'),
    __param(0, (0, common_1.Param)('educationId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.UpdateEducationDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "updateEducation", null);
__decorate([
    (0, decorator_1.Roles)(enum_1.userRole.Student),
    (0, common_1.UseGuards)(guards_1.jwtAuthGuard, guards_1.RolesGuard),
    (0, common_1.Post)('/add-experience'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.ExperienceDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "addExperience", null);
__decorate([
    (0, decorator_1.Roles)(enum_1.userRole.Student),
    (0, common_1.UseGuards)(guards_1.jwtAuthGuard, guards_1.RolesGuard),
    (0, common_1.Delete)('/delete/experience/:experienceId'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('experienceId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "deleteExperience", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.jwtAuthGuard),
    (0, common_1.Patch)('/update-experience/:experienceId'),
    __param(0, (0, common_1.Param)('experienceId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.UpdateExperienceDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "updateExperience", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_student_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "remove", null);
exports.StudentController = StudentController = __decorate([
    (0, common_1.Controller)('student'),
    __metadata("design:paramtypes", [student_service_1.StudentService,
        users_service_1.UsersService])
], StudentController);
//# sourceMappingURL=student.controller.js.map