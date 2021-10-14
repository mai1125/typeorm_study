import { Category } from './category.interface';
/**
 *  Questionモデル
 */
export interface Question {
  /** ID*/
  id?: number;
  /** タイトル*/
  title: string;
  /** 本文*/
  text: string;
  /** カテゴリー*/
  categories: Category[];
}
