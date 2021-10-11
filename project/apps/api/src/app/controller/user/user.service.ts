import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../../entities/user.entity';
import { User } from '../../interface/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<User>
  ) {}

  create(frontData: User) {
    return this.userRepository.save(frontData);
  }

  read() {
    return this.userRepository.find();
  }
}
