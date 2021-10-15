import { Module } from '@nestjs/common';
import { TypeOrmModule } from './typeorm/typeorm.module';

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
  imports: [TypeOrmModule],
  controllers: [...controllers],
  providers: [...services],
})
export class AppModule {}
