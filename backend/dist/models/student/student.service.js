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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const typeorm_2 = require("typeorm");
let StudentService = class StudentService {
    constructor(studentRepo, educationRepo, experienceRepo) {
        this.studentRepo = studentRepo;
        this.educationRepo = educationRepo;
        this.experienceRepo = experienceRepo;
    }
    async create(createStudentDto) {
        const { education, skills, user } = createStudentDto;
        const student = await this.studentRepo.save({
            user,
            skills: skills.skills,
            languages: skills.languages,
        });
        await this.educationRepo.save({ ...education, student });
        return student;
    }
    async addEducationDetails(education, student) {
        return await this.educationRepo.save({ ...education, student });
    }
    async deleteEducation(educationId) {
        const deleteEducation = await this.educationRepo.delete({
            id: educationId,
        });
        return deleteEducation;
    }
    async updateEducation(id, updateEducationDto) {
        const updateEducation = await this.educationRepo.preload({
            id,
            ...updateEducationDto,
        });
        if (!updateEducation)
            throw new common_1.BadRequestException(`education not found with id ${id}`);
        return await this.educationRepo.save(updateEducation);
    }
    async addExperienceDetails(experienceDto) {
        return await this.experienceRepo.save(experienceDto);
    }
    async deleteExperience(experienceId, studentId) {
        const deleteExperience = await this.experienceRepo
            .createQueryBuilder()
            .delete()
            .where('id= :experienceId', { experienceId })
            .andWhere('student= :studentId', { studentId })
            .execute();
        if (deleteExperience.affected == 1)
            return { message: 'Experience deleted successfully ' };
    }
    async updateExperience(id, updateExperienceDto) {
        const experience = await this.experienceRepo.preload({
            id,
            ...updateExperienceDto,
        });
        if (!experience)
            throw new common_1.BadRequestException(`experience not found with id ${id}`);
        return await this.experienceRepo.save(experience);
    }
    findAll() {
        return `This action returns all student`;
    }
    async findOne(id) {
        const student = await this.studentRepo
            .createQueryBuilder('student')
            .leftJoin('student.user', 'user')
            .leftJoin('student.education', 'education')
            .leftJoin('student.experiences', 'experiences')
            .select(['student', 'user', 'education', 'experiences'])
            .where('user.id=:id', { id })
            .getOne();
        return student;
    }
    update(id, updateStudentDto) {
        return `This action updates a #${id} student`;
    }
    remove(id) {
        return `This action removes a #${id} student`;
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Student)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.Education)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.Experience)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], StudentService);
//# sourceMappingURL=student.service.js.map