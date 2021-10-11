import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profiles } from '../../entities/profile.entity';
import { Users } from '../../entities/user.entity';
import { User } from '../../interface/user.interface';
import { ProfileService } from '../profile/profile.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<User>,
    private profileService: ProfileService
  ) {}
  async create(frontData: User): Promise<User> {
    // プロフィールの登録
    const profile = new Profiles();
    profile.gender = frontData.profile.gender;
    profile.photo = frontData.profile.photo;
    await this.profileService.create(profile);
    // Userの登録
    const user = new Users();
    user.name = frontData.name;
    user.profile = profile;
    return this.userRepository.save(user);
  }

  read(): Promise<User[]> {
    return this.userRepository.find({ relations: ['profile'] });
  }
}
