import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Student } from './student.entity';
import { BaseEntity } from 'src/database';

@Entity({ name: 'education' })
export class Education extends BaseEntity {
  @Column()
  degreeType: string;

  @Column()
  university: string;

  @Column()
  year: string;

  @Column()
  gpa: string;

  @ManyToOne(() => Student, (student) => student.education, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ referencedColumnName: 'id', name: 'student' })
  student: Student;
}
