import { BaseEntity } from 'src/database';
import { Application } from 'src/models/application/entities';
import { User } from 'src/models/users/entities';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Education } from './education.entity';
import { Experience } from './experience.entity';

@Entity({ name: 'students' })
export class Student extends BaseEntity {
  @Column('simple-array')
  skills: string[];

  @Column('simple-array')
  languages: string[];

  @OneToOne(() => User, (user) => user.student, { onDelete: 'CASCADE' })
  @JoinColumn({ referencedColumnName: 'id', name: 'user' })
  user: User;

  @OneToMany(() => Application, (application) => application.student)
  applications: Application[];

  @OneToMany(() => Education, (education) => education.student)
  education: Education;

  @OneToMany(() => Experience, (experience) => experience.student)
  experiences: Experience[];
}
