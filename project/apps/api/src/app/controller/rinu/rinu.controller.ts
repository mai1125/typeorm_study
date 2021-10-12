import { Post, Body, Controller } from '@nestjs/common';
import { RinuService } from './rinu.service';
import { User } from '../../interface/user.interface';

@Controller('rinu')
export class RinuController {
  constructor(private readonly rinuService: RinuService) {}

  @Post('create')
  create(@Body() request: User): Promise<User> {
    return this.rinuService.tukuruyo(request);
  }
}
