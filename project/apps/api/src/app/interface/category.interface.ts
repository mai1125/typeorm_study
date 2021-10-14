import { Question } from './question.interface';

/**
 *  Categoryモデル
 */
export interface Category {
  /** ID */
  id?: number;
  /** 名前 */
  name: string;
  /** Question*/
  questions: Question[];
}
