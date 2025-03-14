import { FileFilterCallback } from 'multer';
export declare const multerOptions: {
    storage: any;
    fileFilter: (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => any;
};
