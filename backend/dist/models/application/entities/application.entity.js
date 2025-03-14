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
exports.Application = void 0;
const database_1 = require("../../../database");
const typeorm_1 = require("typeorm");
const enum_1 = require("../enum");
const entities_1 = require("../../student/entities");
const entities_2 = require("../../jobs/entities");
let Application = class Application extends database_1.BaseEntity {
};
exports.Application = Application;
__decorate([
    (0, typeorm_1.Column)({ enum: enum_1.jobStatus, default: enum_1.jobStatus.PENDING }),
    __metadata("design:type", String)
], Application.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], Application.prototype, "hasApplied", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.Student, (student) => student.applications, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: 'id', name: 'students' }),
    __metadata("design:type", entities_1.Student)
], Application.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_2.Jobs, (job) => job.applications, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: 'id', name: 'jobs' }),
    __metadata("design:type", entities_2.Jobs)
], Application.prototype, "job", void 0);
exports.Application = Application = __decorate([
    (0, typeorm_1.Entity)({ name: 'application' })
], Application);
//# sourceMappingURL=application.entity.js.map