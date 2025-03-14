import { BaseEntity } from 'src/database';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Student } from './student.entity';

@Entity()
export class Experience extends BaseEntity {
  @Column()
  position: string;

  @Column()
  company: string;

  @Column()
  period: string;

  @Column()
  location: string;

  @Column('simple-array')
  description: string[];

  @Column('simple-array')
  skills: string[];

  @ManyToOne(() => Student, (student) => student.experiences, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ referencedColumnName: 'id', name: 'student' })
  student: Student;
}
