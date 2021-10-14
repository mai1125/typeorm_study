import { Body, Controller, Get, Post } from '@nestjs/common';
import { Question } from '../../interface/question.interface';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post('create')
  create(@Body() frontData: Question): Promise<Question> {
    return this.questionService.create(frontData);
  }

  @Get('read')
  read() {
    return this.questionService.read();
  }
}
