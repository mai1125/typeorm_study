import { ProfileService } from './profile.service';
import { Profile } from '../../interface/profile.interface';
import { Post, Body, Controller, Get } from '@nestjs/common';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('create')
  create(@Body() frontData: Profile) {
    return this.profileService.create(frontData);
  }

  @Get('read')
  read() {
    return this.profileService.read();
  }
}
