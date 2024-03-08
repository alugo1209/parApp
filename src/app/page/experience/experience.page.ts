import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { EdutuberVideo } from 'src/app/class/edutuber/edutuber-video';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage implements AfterViewInit {

  userId!: string;
  token!: string;
  lists: Array<EdutuberVideo> = [];

  constructor(
    private router: Router
    , private toastCtrl: ToastController
    , public dataService: ApiService) { }

  ngAfterViewInit() {
    this.getDataU();
  }

  private getDataU() {
    this.dataService.getStorage('companyId')
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
        this.listModuleVirtual();
      }
    });
  }

  private listModuleVirtual(){
    this.dataService.edutuberVideos(this.token, this.userId)
    .subscribe((result) => {
      this.getDataResult(result);
    });
  }
  
    private getDataResult(data: any) {
      if (data.message !== 'Success') {
        this.dataService.showToast(this.toastCtrl, data.message);
      } else {
        const dataTemp: Array<EdutuberVideo> = data.result;
        this.lists = dataTemp;
      }
    }

  public regresar() {
    this.router.navigate(['/main']);
  }

}
