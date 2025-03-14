import { BaseEntity } from 'src/database';
import { Jobs } from 'src/models/jobs/entities';
import { User } from 'src/models/users/entities';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity({ name: 'industry' })
export class Industry extends BaseEntity {
  @Column()
  companyName: string;

  @Column({ nullable: true })
  address: string;

  @Column()
  city: string;

  @Column()
  companySize: string;

  @Column()
  country: string;

  @Column()
  description: string;

  @Column()
  website: string;

  @OneToOne(() => User, (user) => user.industry, { onDelete: 'CASCADE' })
  @JoinColumn({ referencedColumnName: 'id', name: 'user' })
  user: User;

  @OneToMany(() => Jobs, (job) => job.industry)
  jobs: Jobs[];
}
