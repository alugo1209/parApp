import { Client } from './client';
export class Clients {
  statusCode: number | undefined;
  isSuccess: boolean | undefined;
  errorMessages: Array<any> | undefined;
  result: Array<Client> | undefined;
  totalPages: number | undefined;
}
