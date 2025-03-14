"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localAuthGuard = void 0;
const passport_1 = require("@nestjs/passport");
class localAuthGuard extends (0, passport_1.AuthGuard)('local') {
}
exports.localAuthGuard = localAuthGuard;
//# sourceMappingURL=localAuth.guard.js.map