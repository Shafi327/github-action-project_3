"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtAuthGuard = void 0;
const passport_1 = require("@nestjs/passport");
class jwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
}
exports.jwtAuthGuard = jwtAuthGuard;
//# sourceMappingURL=jwtAuth.guard.js.map