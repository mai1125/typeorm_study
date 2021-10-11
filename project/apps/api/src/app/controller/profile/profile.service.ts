import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../../interface/profile.interface';
import { Profiles } from '../../entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profiles)
    private readonly profileRepository: Repository<Profile>
  ) {}

  create(frontdate: Profile) {
    return this.profileRepository.save(frontdate);
  }

  read() {
    return this.profileRepository.findOne();
  }
}
