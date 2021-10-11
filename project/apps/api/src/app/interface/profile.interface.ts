import { User } from './user.interface';

/**
 * Profileモデル
 */
export interface Profile {
  /**id */
  id?: number;
  /**性別 */
  gender: string;
  /**photo */
  photo: string;
  //**User */
  user: User;
}
