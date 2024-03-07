import { User } from './user';
import { Company } from './company';
import { Silver } from './silver';
export class Token {
  message: string | undefined;
  token: string | undefined;
  user: User = new User();
  company: Company = new Company();
  silver!: Silver | undefined;
}
