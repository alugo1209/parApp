import { Clasification } from './clasification';
import { Day } from './day';
export class Client {
  id: number = 0;
  first_Name: string = "";
  last_Name: string = "";
  identification: string = "";
  enterprise_Name: string = "";
  user_Id: string = "";
  day: Day | undefined;
  clasification: Clasification | undefined;
}
