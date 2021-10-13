import { Profile } from './profile.interface';

/**
 * Userモデル
 */
export interface User {
  /**id */
  id?: number;
  /**名前 */
  name: string;
  /**プロフィール */
  profile: Profile[];
}
