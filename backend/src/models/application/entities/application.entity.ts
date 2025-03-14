import { BaseEntity } from 'src/database';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { jobStatus } from '../enum';
import { Student } from 'src/models/student/entities';
import { Jobs } from 'src/models/jobs/entities';

@Entity({ name: 'application' })
export class Application extends BaseEntity {
  @Column({ enum: jobStatus, default: jobStatus.PENDING })
  status: jobStatus;

  @Column({ nullable: true, default: false })
  hasApplied: boolean;

  @ManyToOne(() => Student, (student) => student.applications, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ referencedColumnName: 'id', name: 'students' })
  student: Student;

  @ManyToOne(() => Jobs, (job) => job.applications, { onDelete: 'CASCADE' })
  @JoinColumn({ referencedColumnName: 'id', name: 'jobs' })
  job: Jobs;
}
