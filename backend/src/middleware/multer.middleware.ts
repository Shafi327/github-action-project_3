import { FileFilterCallback } from 'multer';
import { BadRequestException } from '@nestjs/common';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { cloudinary } from 'src/config';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req: any, file: Express.Multer.File) => {
    return {
      folder: 'CareerHub',
      public_id: `${file.originalname}_${Date.now()}`,
      use_filename: false,
      unique_filename: true,
    };
  },
});
export const multerOptions = {
  storage,
  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback,
  ) => {
    if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
      return cb(
        new BadRequestException(
          'Only image files are allowed!',
        ) as unknown as null,
        false,
      );
    }
    cb(null, true);
  },
};
