import { forwardRef, Inject, Injectable } from '@nestjs/common';
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
    @Inject(forwardRef(() => ProfileService))
    private profileService: ProfileService
  ) {}

  async create(frontData: User): Promise<User> {
    // 1件目
    const param1 = new Profiles();
    param1.url = frontData.profile[0].url;
    await this.profileService.create(param1);
    // 2件目
    const param2 = new Profiles();
    param2.url = frontData.profile[1].url;
    await this.profileService.create(param2);
    //Userの登録
    const user = new Users();
    user.name = frontData.name;
    user.profile = [param1, param2];
    return this.userRepository.save(user);
  }

  read(): Promise<User[]> {
    return this.userRepository.find({ relations: ['profile'] });
  }
}
