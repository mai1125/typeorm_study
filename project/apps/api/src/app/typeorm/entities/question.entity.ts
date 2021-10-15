import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../../interface/category.interface';
import { Categories } from './category.entity';

@Entity()
export class Questions {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column()
  texe: string;

  @ManyToMany(() => Categories, (categories) => categories.questions, {
    cascade: true,
  })
  @JoinTable()
  categories: Category[];
}
