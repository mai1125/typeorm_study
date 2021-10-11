import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Profiles {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  gender: string;

  @Column()
  photo: string;
}
