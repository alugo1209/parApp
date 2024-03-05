import { Notification } from './notification';
export class Modules {
  statusCode: number | undefined;
  isSuccess: boolean | undefined;
  errorMessages: Array<any> | undefined;
  result!: Notification;
  totalPages: number | undefined;
}
