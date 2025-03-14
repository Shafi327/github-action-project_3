"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const common_1 = require("@nestjs/common");
exports.Pagination = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    const query = req.query;
    return {
        search: query?.search || '',
        page: Number(query?.page || 1),
        limit: Number(query?.limit || 10),
    };
});
//# sourceMappingURL=pagination.decorator.js.map