import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../../interface/profile.interface';
import { Profiles } from '../../entities/profile.entity';
import { Users } from '../../entities/user.entity';
import { User } from '../../interface/user.interface';

@Injectable()
export class RinuService {
  constructor(
    @InjectRepository(Profiles)
    private readonly profileRepository: Repository<Profile>,
    @InjectRepository(Users)
    private readonly userRepository: Repository<User>
  ) {}

  /**
   * User作った後にProfile作るよ
   */
  async tukuruyo(request: User): Promise<User> {
    // User作成
    const user = new Users();
    user.name = request.name;
    const resUser = await this.createUser(user);

    // Profile作成
    const profile = new Profiles();
    profile.gender = request.profile.gender;
    profile.photo = request.profile.photo;
    const resProfile = await this.createProfile(profile);

    // Userに作ったProfileを紐づけて結果を返す
    resUser.profile = resProfile;
    return this.createUser(resUser);
  }

  /**
   * User作成もしくは更新
   */
  async createUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  /**
   * Profile作成もしくは更新
   */
  async createProfile(profile: Profile): Promise<Profile> {
    return this.profileRepository.save(profile);
  }

  read(): Promise<Profile[]> {
    return this.profileRepository.find({ relations: ['user'] });
  }
}
