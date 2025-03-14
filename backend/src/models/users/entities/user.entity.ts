import { BaseEntity } from 'src/database';
import { BeforeInsert, Column, Entity, OneToOne } from 'typeorm';
import { userRole } from '../enum';
import { Student } from 'src/models/student/entities';
import { Industry } from 'src/models/industry/entities';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false, select: false })
  password: string;

  @Column({ enum: userRole, default: userRole.Student })
  role: userRole;

  @Column({ nullable: false })
  location: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  avatar: string;

  @OneToOne(() => Student, (student) => student.user)
  student: Student;
  @OneToOne(() => Industry, (industry) => industry.user)
  industry: Industry;
}
