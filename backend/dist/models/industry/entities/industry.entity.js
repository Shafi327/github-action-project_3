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
exports.Industry = void 0;
const database_1 = require("../../../database");
const entities_1 = require("../../jobs/entities");
const entities_2 = require("../../users/entities");
const typeorm_1 = require("typeorm");
let Industry = class Industry extends database_1.BaseEntity {
};
exports.Industry = Industry;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Industry.prototype, "companyName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Industry.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Industry.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Industry.prototype, "companySize", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Industry.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Industry.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Industry.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => entities_2.User, (user) => user.industry, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: 'id', name: 'user' }),
    __metadata("design:type", entities_2.User)
], Industry.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.Jobs, (job) => job.industry),
    __metadata("design:type", Array)
], Industry.prototype, "jobs", void 0);
exports.Industry = Industry = __decorate([
    (0, typeorm_1.Entity)({ name: 'industry' })
], Industry);
//# sourceMappingURL=industry.entity.js.map