import { Module } from '@nestjs/common';
import { TypeOrmModule as TypeORM } from '@nestjs/typeorm';
import TypeOrmOptions from './ormconfig';

// Entities
import { Profiles } from './entities/profile.entity';
import { Users } from './entities/user.entity';
import { Categories } from './entities/category.entity';
import { Questions } from './entities/question.entity';
const entities = [Profiles, Users, Categories, Questions];

@Module({
  imports: [TypeORM.forRoot(TypeOrmOptions), TypeORM.forFeature([...entities])],
  exports: [TypeORM.forFeature([...entities])],
})
export class TypeOrmModule {}
