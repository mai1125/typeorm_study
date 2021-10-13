import { User } from './user.interface';

/**
 * Profileモデル
 */
export interface Profile {
  /**id */
  id?: number;
  /**photo */
  url: string;
  //**User */
  user: User;
}
