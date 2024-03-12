import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EdutuberVideo } from 'src/app/class/edutuber/edutuber-video';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edutuber',
  templateUrl: './edutuber.page.html',
  styleUrls: ['./edutuber.page.scss'],
})
export class EdutuberPage implements AfterViewInit {

    videot: any;
    edutuber: EdutuberVideo = new EdutuberVideo();
  
    constructor(
      private router: Router
      , private activatedRoute: ActivatedRoute
      , public dataService: ApiService) { }
  
    ngAfterViewInit() {
      this.getDataI();
    }
  
    private getDataI() {
      this.activatedRoute.params.subscribe(params => {
        let id = parseInt(params['id']);
        this.getDataV(id);
      });
    }
  
    private getDataV(id: any) {
      this.dataService.getStorage('video_' + id)
        .then((data: any) => {
          if (data) {
            this.edutuber = data;  
            this.videot = this.edutuber.url;
            console.log(this.videot);            
          }
        });
    }
  
    public regresar() {
      this.router.navigate(['/experience']);
    }
  
  }
  