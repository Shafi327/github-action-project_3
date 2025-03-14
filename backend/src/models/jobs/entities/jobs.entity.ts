import { BaseEntity } from 'src/database';
import { Application } from 'src/models/application/entities';
import { Industry } from 'src/models/industry/entities';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { jobStatus } from '../enum';
@Entity({ name: 'jobs' })
export class Jobs extends BaseEntity {
  @Column({ nullable: false }) //TODO :entry level mid level senior lead key=Experience leve add these in job entity
  title: string;

  @Column('simple-array')
  skills: string[];

  @Column()
  salary: string;

  @Column({ enum: jobStatus, default: jobStatus.ACTIVE })
  jobStatus: jobStatus;

  @Column()
  department: string;

  @Column()
  jobType: string;

  @Column()
  jobDescription: string;

  @Column()
  keyResponsibilities: string;

  @Column()
  requirements: string;

  @ManyToOne(() => Industry, (industry) => industry.jobs)
  @JoinColumn({ referencedColumnName: 'id', name: 'industry' })
  industry: Industry;

  @OneToMany(() => Application, (application) => application.job)
  applications: Application[];
}
