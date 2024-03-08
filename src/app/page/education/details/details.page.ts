import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Module } from 'src/app/class/education/moduleDetails/module';
import { ModuleDetail } from 'src/app/class/education/moduleDetails/moduleDetail';
import { TopicsCourse } from 'src/app/class/education/moduleDetails/topicsCourse';

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
  modulo!: Module;
  result: Array<TopicsCourse> = [];
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
      this.dataService.getModule(this.token, this.modId, this.userId)
      .subscribe((result) => {
        this.getDataResult(result);
      });
    }
  
    private getDataResult(data: any) {
      if (data.error) {
        this.dataService.showToast(this.toastCtrl, data.statusText);
      } else {
        const dataTemp: ModuleDetail = data.result;
        this.modulo = dataTemp.module;
        this.modu_Name = this.modulo.modu_Name;
        this.result = dataTemp.topicsCourse;
        for (let index = 0; index < this.result.length; index++) {
          const element = this.result[index];
          this.dataService.setStorage('toCo'+element.toCo_Id, element);          
        }
      }
    }
  
    public regresar() {
      this.router.navigate(['/education']);
    }  

    public gotoCategory(modId: any){
      this.router.navigate(['/education/details-all/' + modId]);
    }
}
