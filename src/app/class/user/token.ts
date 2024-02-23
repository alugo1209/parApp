import { User } from './user';
import { Company } from './company';
import { Silver } from './silver';
export class Token {
  message: string | undefined;
  token: string | undefined;
  user: User | undefined;
  company: Company | undefined;
  silver: Silver | undefined;
}
