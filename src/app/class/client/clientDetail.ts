import { Client } from './client';
export class ClientDetail {
  statusCode: number | undefined;
  isSuccess: boolean | undefined;
  errorMessages: Array<any> | undefined;
  result!: Client;
  totalPages: number | undefined;
}
