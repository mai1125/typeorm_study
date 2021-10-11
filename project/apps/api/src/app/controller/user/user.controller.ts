import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '../../interface/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() frontData: User) {
    return this.userService.create(frontData);
  }

  @Get('read')
  read() {
    return this.userService.read();
  }
}
