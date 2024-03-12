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
  listsOriginal: Array<EdutuberVideo> = [];
  tops: Array<EdutuberVideo> = [];
  topOrigins: Array<EdutuberVideo> = [];

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

  private listModuleVirtual() {
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
      this.listsOriginal = dataTemp;
      this.topOrigins = dataTemp;
      for (let index = 0; index < this.listsOriginal.length; index++) {
        const element = this.listsOriginal[index];
        this.dataService.setStorage("video_" + element.id , element);
      }
      this.lists.sort(this.compareNumbers);
      this.lists.reverse();
      this.generateTop();
    }
  }

  private generateTop(){
    this.topOrigins.sort(this.compareNumbers);
    this.topOrigins.reverse();
    let size = this.topOrigins.length;
    if(size >= 1) {
      for (let index = 0; index < size; index++) {
        const element = this.topOrigins[index];
        this.tops.push(element);
        if(index === 1){
          break;
        }
      }
    }
  }

  private compareNumbers(a: EdutuberVideo, b: EdutuberVideo) {
    return a.count_likes - b.count_likes;
  }
  
  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.lists = this.listsOriginal.filter((d) => 
    {
      if(d.name?.toLowerCase().includes(query) || d.description?.toLowerCase().includes(query)) {
        return true;
      } else {
        return false;
      }
    }
    );
    this.lists.sort(this.compareNumbers);
    this.lists.reverse();

  }

  public goNew() {
    this.router.navigate(['/experience/new-experience']);
  }

  public regresar() {
    this.router.navigate(['/main']);
  }

}
