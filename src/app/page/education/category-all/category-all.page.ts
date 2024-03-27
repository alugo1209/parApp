import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ModuleClient } from 'src/app/class/education/moduleByClient/module';
import { Module } from 'src/app/class/education/moduleDetails/module';
import { ModuleDetail } from 'src/app/class/education/moduleDetails/moduleDetail';
import { TopicsCourse } from 'src/app/class/education/moduleDetails/topicsCourse';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-category-all',
  templateUrl: './category-all.page.html',
  styleUrls: ['./category-all.page.scss'],
})
export class CategoryAllPage implements OnInit { 

  catId!: number;
  modId!: number;
  userId!: string;
  token!: string;
  modulo!: Module;
  result: Array<TopicsCourse> = [];
  cat_Name: string = "";
  modu_Name: string = "";
  modu_ImageName: string = "";

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
        this.catId = parseInt(params['catId']);
        this.modId = parseInt(params['modId']);
        this.getDataU();
        this.getDataCategory();
      });
    }

    private getDataCategory() {
      this.dataService.getStorage('category')
      .then((data: any) => {
        if (data) {
          let resultModule: Array<ModuleClient> = data;
          for (let index = 0; index < resultModule.length; index++) {
            const element = resultModule[index];
            if(element.clasi_Id === this.catId){
              this.cat_Name = element.clasi_Name;
              break;
            }  
          }
        }
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
      this.result = [];
      if (data.error) {
        this.dataService.showToast(this.toastCtrl, data.statusText);
      } else {
        const dataTemp: ModuleDetail = data.result;
        this.modulo = dataTemp.module;
        this.modu_Name = this.modulo.modu_Name;
        this.modu_ImageName = this.modulo.modu_ImageName;
        const resultTemp: Array<TopicsCourse> = dataTemp.topicsCourse;
        let size = resultTemp.length;
        for (let index = 0; index < size; index++) {
          let element = resultTemp[index];
          element.modu_Name = this.modu_Name;
          this.dataService.setStorage('toCo'+element.toCo_Id, element); 
          this.result.push(element);         
        }
      }
    }
  
    public regresar() {
      this.router.navigate(['/education']);
    }  
}
