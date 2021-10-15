import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../../interface/profile.interface';
import { Profiles } from '../../typeorm/entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profiles)
    private readonly profileRepository: Repository<Profile>
  ) {}

  create(data: Profile): Promise<Profile> {
    return this.profileRepository.save(data);
  }

  read(): Promise<Profile[]> {
    return this.profileRepository.find({ relations: ['user'] });
  }
}
