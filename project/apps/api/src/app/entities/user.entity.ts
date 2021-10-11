import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Profiles } from './profile.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @OneToOne(() => Profiles)
  @JoinColumn()
  profile: Profiles;
}
