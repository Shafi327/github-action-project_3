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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const database_1 = require("../../../database");
const entities_1 = require("../../application/entities");
const entities_2 = require("../../users/entities");
const typeorm_1 = require("typeorm");
const education_entity_1 = require("./education.entity");
const experience_entity_1 = require("./experience.entity");
let Student = class Student extends database_1.BaseEntity {
};
exports.Student = Student;
__decorate([
    (0, typeorm_1.Column)('simple-array'),
    __metadata("design:type", Array)
], Student.prototype, "skills", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array'),
    __metadata("design:type", Array)
], Student.prototype, "languages", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => entities_2.User, (user) => user.student, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: 'id', name: 'user' }),
    __metadata("design:type", entities_2.User)
], Student.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.Application, (application) => application.student),
    __metadata("design:type", Array)
], Student.prototype, "applications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => education_entity_1.Education, (education) => education.student),
    __metadata("design:type", education_entity_1.Education)
], Student.prototype, "education", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => experience_entity_1.Experience, (experience) => experience.student),
    __metadata("design:type", Array)
], Student.prototype, "experiences", void 0);
exports.Student = Student = __decorate([
    (0, typeorm_1.Entity)({ name: 'students' })
], Student);
//# sourceMappingURL=student.entity.js.map