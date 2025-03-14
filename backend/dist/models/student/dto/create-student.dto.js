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
exports.CreateStudentDto = void 0;
const class_validator_1 = require("class-validator");
const index_1 = require("./index");
const class_transformer_1 = require("class-transformer");
const entities_1 = require("../../users/entities");
class CreateStudentDto {
}
exports.CreateStudentDto = CreateStudentDto;
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => index_1.educationDto),
    __metadata("design:type", index_1.educationDto)
], CreateStudentDto.prototype, "education", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => index_1.skillsDto),
    __metadata("design:type", index_1.skillsDto)
], CreateStudentDto.prototype, "skills", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", entities_1.User)
], CreateStudentDto.prototype, "user", void 0);
//# sourceMappingURL=create-student.dto.js.map