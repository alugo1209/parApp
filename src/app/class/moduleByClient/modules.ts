import { ModuleNro } from './moduleNro';
export class Modules {
  statusCode: number | undefined;
  isSuccess: boolean | undefined;
  errorMessages: Array<any> | undefined;
  result!: ModuleNro;
  totalPages: number | undefined;
}
