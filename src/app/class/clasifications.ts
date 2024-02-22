import { Clasification } from './clasification';
export class Clasifications {
  statusCode: number | undefined;
  isSuccess: boolean | undefined;
  errorMessages: Array<any> | undefined;
  result: Array<Clasification> = [];
  totalPages: number | undefined;
}
