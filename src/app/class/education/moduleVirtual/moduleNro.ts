import { ModuleNro } from '../moduleByClient/moduleNro';
import { ModuleVirtual } from './module';
export class ModuleNroVirtual {
  enro_Id!: number; 
  enro_InitDateModule!: string;
  enro_FinishDateModule!: string;
  module!: ModuleVirtual;
  dataTemp!: Array<ModuleNro>;
}