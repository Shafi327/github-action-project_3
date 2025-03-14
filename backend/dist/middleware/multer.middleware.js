"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptions = void 0;
const common_1 = require("@nestjs/common");
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const config_1 = require("../config");
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: config_1.cloudinary,
    params: async (req, file) => {
        return {
            folder: 'CareerHub',
            public_id: `${file.originalname}_${Date.now()}`,
            use_filename: false,
            unique_filename: true,
        };
    },
});
exports.multerOptions = {
    storage,
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
            return cb(new common_1.BadRequestException('Only image files are allowed!'), false);
        }
        cb(null, true);
    },
};
//# sourceMappingURL=multer.middleware.js.map