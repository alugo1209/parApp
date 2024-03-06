import { ModuleDetail } from './moduleDetail';
export class Modules {
  statusCode: number | undefined;
  isSuccess: boolean | undefined;
  errorMessages: Array<any> | undefined;
  result!: ModuleDetail;
  totalPages: number | undefined;
}
