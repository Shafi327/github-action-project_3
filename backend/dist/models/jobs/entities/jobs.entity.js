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
exports.Jobs = void 0;
const database_1 = require("../../../database");
const entities_1 = require("../../application/entities");
const entities_2 = require("../../industry/entities");
const typeorm_1 = require("typeorm");
const enum_1 = require("../enum");
let Jobs = class Jobs extends database_1.BaseEntity {
};
exports.Jobs = Jobs;
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Jobs.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array'),
    __metadata("design:type", Array)
], Jobs.prototype, "skills", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Jobs.prototype, "salary", void 0);
__decorate([
    (0, typeorm_1.Column)({ enum: enum_1.jobStatus, default: enum_1.jobStatus.ACTIVE }),
    __metadata("design:type", String)
], Jobs.prototype, "jobStatus", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Jobs.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Jobs.prototype, "jobType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Jobs.prototype, "jobDescription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Jobs.prototype, "keyResponsibilities", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Jobs.prototype, "requirements", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_2.Industry, (industry) => industry.jobs),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: 'id', name: 'industry' }),
    __metadata("design:type", entities_2.Industry)
], Jobs.prototype, "industry", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.Application, (application) => application.job),
    __metadata("design:type", Array)
], Jobs.prototype, "applications", void 0);
exports.Jobs = Jobs = __decorate([
    (0, typeorm_1.Entity)({ name: 'jobs' })
], Jobs);
//# sourceMappingURL=jobs.entity.js.map