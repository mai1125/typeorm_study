import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from '../interface/question.interface';
import { Questions } from './question.entity';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @ManyToMany(() => Questions, (question) => question.categories)
  questions: Question[];
}
