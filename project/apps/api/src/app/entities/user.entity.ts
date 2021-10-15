import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Profile } from '../interface/profile.interface';
import { User } from '../interface/user.interface';
import { Profiles } from './profile.entity';

@Entity()
export class Users implements User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @OneToMany(() => Profiles, (profile) => profile.user)
  profile?: Profile[];
}
