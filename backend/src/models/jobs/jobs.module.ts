import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jobs } from './entities';
import { UsersModule } from '../users/users.module';
import { IndustryModule } from '../industry/industry.module';

@Module({
  imports: [TypeOrmModule.forFeature([Jobs]), IndustryModule, UsersModule],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
