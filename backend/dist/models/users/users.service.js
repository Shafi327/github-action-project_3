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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        const { personal, account } = createUserDto;
        personal.name = personal.name
            ? personal.name
            : personal?.firstName.concat(' ', personal?.lastName);
        const userExist = await this.findByEmail(account.email);
        if (userExist)
            throw new common_1.BadRequestException('user already exist');
        const user = await this.userRepository.save({
            ...createUserDto,
            ...personal,
            ...account,
        });
        return user;
    }
    findAll() {
        return `This action returns all users`;
    }
    async findByEmail(email) {
        const user = await this.userRepository
            .createQueryBuilder('user')
            .addSelect('user.password')
            .where('user.email = :email', { email })
            .getOne();
        return user;
    }
    async findOneStudent(id) {
        const query = await this.userRepository
            .createQueryBuilder('user')
            .leftJoin('user.student', 'student')
            .addSelect('student')
            .where('user.id = :id', { id })
            .getOne();
        if (!query.student)
            throw new common_1.NotFoundException(`student not found `);
        return query;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    async remove(id) {
        return await this.userRepository.delete(id);
    }
    async findOneIndustry(id) {
        const query = await this.userRepository
            .createQueryBuilder('user')
            .leftJoin('user.industry', 'industry')
            .addSelect('industry')
            .where('user.id = :id', { id })
            .getOne();
        if (!query.industry)
            throw new common_1.NotFoundException(`industry not found `);
        return query;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsersService);
//# sourceMappingURL=users.service.js.map