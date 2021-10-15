import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from '../../typeorm/entities/category.entity';
import { Questions } from '../../typeorm/entities/question.entity';
import { Question } from '../../interface/question.interface';
import { CategoryService } from '../category/category.service';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Questions)
    private readonly questionRepository: Repository<Question>,
    @Inject(forwardRef(() => CategoryService))
    private readonly categoryService: CategoryService
  ) {}

  async create(req: Question): Promise<Question> {
    // 1件目のカテゴリーを登録
    const category1 = new Categories();
    category1.name = req.categories[0].name;
    await this.categoryService.create(category1);

    // 2件目のカテゴリーを登録
    const category2 = new Categories();
    category2.name = req.categories[1].name;
    await this.categoryService.create(category2);

    // Questionを登録
    const question = new Questions();
    question.title = req.title;
    question.texe = req.text;
    question.categories = [category1, category2];
    return this.questionRepository.save(question);
  }

  read() {
    return this.questionRepository.find({ relations: ['categories'] });
  }
}
