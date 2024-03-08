import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Module } from 'src/app/class/education/moduleByClient/module';
import { Modules } from 'src/app/class/education/moduleByClient/modules';
import { ModuleNro } from 'src/app/class/education/moduleByClient/moduleNro';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss'],
})
export class EducationPage implements AfterViewInit {

  userId!: string;
  token!: string;
  modulo!: ModuleNro;
  result: Array<Module> = [];
  modu_Name: string = "Categorias";

  constructor(
    private router: Router
    , private toastCtrl: ToastController
    , public dataService: ApiService) { }

    ngAfterViewInit() {
      this.getDataU();
    }

    private getDataU() {
      this.dataService.getStorage('userId')
      .then((data: any) => {
        if (data) {
          this.userId = data;
          this.getDataT();
        }
      });
    }
  
    private getDataT() {
      this.dataService.getStorage('token')
      .then((data: any) => {
        if (data) {
          this.token = data;
          this.getClientsById();
        }
      });
    }
  
    private getClientsById(){
      this.dataService.getModuleByClasification(this.token, this.userId)
      .subscribe((result) => {
        this.getDataResult(result);
      });
    }
  
    private getDataResult(data: any) {
      if (data.error) {
        this.dataService.showToast(this.toastCtrl, data.statusText);
      } else {     
        const dataTemp: Modules = data;
        this.modulo = dataTemp.result;   
        let tempResult: Array<Module> = this.modulo.result;  
        this.result = tempResult;
      }
    }

    public regresar() {
      this.router.navigate(['/main']);
    }

    public gotoCategory(modId: any){
      this.router.navigate(['/education/details/' + modId]);
    }
}
