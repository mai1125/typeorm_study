import { Module } from '@nestjs/common';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
// TypeORMのEntities
import { Profiles } from './entities/profile.entity';
import { Users } from './entities/user.entity';
import { Categories } from './entities/category.entity';
import { Questions } from './entities/question.entity';
const entities = [Profiles, Users, Categories, Questions];

// Controllers
import { ProfileController } from './controller/profile/profile.controller';
import { UserController } from './controller/user/user.controller';
import { CategoryController } from './controller/category/category.controller';
import { QuestionController } from './controller/question/question.controller';

const controllers = [
  ProfileController,
  UserController,
  CategoryController,
  QuestionController,
];

// Services
import { ProfileService } from './controller/profile/profile.service';
import { UserService } from './controller/user/user.service';
import { CategoryService } from './controller/category/category.service';
import { QuestionService } from './controller/question/question.service';

const services = [
  ProfileService,
  UserService,
  CategoryService,
  QuestionService,
];
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'host.docker.internal',
      port: 3306,
      username: 'user',
      password: 'user',
      database: 'demo',
      entities: [...entities],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([...entities]),
  ],
  controllers: [...controllers],
  providers: [...services],
})
export class AppModule {}
