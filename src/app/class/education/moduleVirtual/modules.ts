import { ModuleNroVirtual } from './moduleNro';
export class Modules {
  statusCode: number | undefined;
  isSuccess: boolean | undefined;
  errorMessages: Array<any> | undefined;
  result: Array<ModuleNroVirtual> = [];
  totalPages: number | undefined;
}
