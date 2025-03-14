import { ConfigService } from '@nestjs/config';
declare const jwtStrategy_base: any;
export declare class jwtStrategy extends jwtStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(payload: any): Promise<{
        id: any;
        name: any;
        email: any;
        role: any;
    }>;
}
export {};
