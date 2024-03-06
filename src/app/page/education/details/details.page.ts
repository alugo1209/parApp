import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Module } from 'src/app/class/education/moduleByClient/module';
import { ModuleNro } from 'src/app/class/education/moduleByClient/moduleNro';
import { Modules } from 'src/app/class/education/moduleByClient/modules';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  modId!: number;
  userId!: string;
  token!: string;
  modulo!: ModuleNro;
  result: Array<Module> = [];
  modu_Name: string = "";

  constructor(
    private router: Router
    , private activatedRoute: ActivatedRoute
    , private toastCtrl: ToastController
    , public dataService: ApiService) { }

    ngOnInit() {
      this.getDataI();
    }
  
    private getDataI() {
      this.activatedRoute.params.subscribe(params => {
        this.modId = parseInt(params['id']);
        this.getDataU();
      });
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
        this.result = tempResult.filter(element => {
          return element.modu_Id === this.modId;
        });
        for (let index = 0; index < this.result.length; index++) {
          const element = this.result[index];
          this.modu_Name = element.modu_Name;
        }
      }
    }
  
    public regresar() {
      this.router.navigate(['/education']);
    }
}
