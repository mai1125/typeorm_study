import { Module } from '@nestjs/common';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
// TypeORMのEntities
import { Profiles } from './entities/profile.entity';
import { Users } from './entities/user.entity';
const entities = [Profiles, Users];

// Controllers
import { ProfileController } from './controller/profile/profile.controller';
import { UserController } from './controller/user/user.controller';
import { RinuController } from './controller/rinu/rinu.controller';
const controllers = [ProfileController, UserController, RinuController];

// Services
import { ProfileService } from './controller/profile/profile.service';
import { UserService } from './controller/user/user.service';
import { RinuService } from './controller/rinu/rinu.service';
const services = [ProfileService, UserService, RinuService];
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
