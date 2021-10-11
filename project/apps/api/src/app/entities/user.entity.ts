import { profile } from 'console';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Profile } from '../interface/profile.interface';
import { User } from '../interface/user.interface';
import { Profiles } from './profile.entity';

@Entity()
export class Users implements User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @OneToOne(() => Profiles, (profile) => profile.user)
  @JoinColumn()
  profile: Profile;
}
