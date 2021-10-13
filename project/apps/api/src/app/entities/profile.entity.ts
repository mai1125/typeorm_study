import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Profile } from '../interface/profile.interface';
import { User } from '../interface/user.interface';
import { Users } from './user.entity';

@Entity()
export class Profiles implements Profile {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  url: string;

  @ManyToOne(() => Users, (user) => user.profile)
  @JoinColumn({ name: 'userId' })
  user: User;
}
