import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Education, Experience, Student } from './entities';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student, Education, Experience]),
    UsersModule,
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
