import { ModuleClient } from './module';
export class ModuleNro {
  result!: Array<ModuleClient>;
  id!: number; 
  exception!: any;
  status!: number;
  isCanceled!: boolean;
  isCompleted!: boolean;
  isCompletedSuccessfully!: boolean;
  creationOptions!: number;
  asyncState!: any;
  isFaulted!: boolean;
}