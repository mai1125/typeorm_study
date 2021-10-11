import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Profile } from '../interface/profile.interface';
import { User } from '../interface/user.interface';
import { Users } from './user.entity';

@Entity()
export class Profiles implements Profile {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  gender: string;

  @Column()
  photo: string;

  @OneToOne(() => Users, (user) => user.profile)
  user: User;
}
