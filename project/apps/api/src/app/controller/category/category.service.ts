import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from '../../entities/category.entity';
import { Category } from '../../interface/category.interface';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Categories)
    private readonly categoryRepository: Repository<Category>
  ) {}

  create(data: Category): Promise<Category> {
    return this.categoryRepository.save(data);
  }

  read() {
    return this.categoryRepository.find();
  }
}
