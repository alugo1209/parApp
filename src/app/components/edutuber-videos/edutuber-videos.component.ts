import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { EdutuberVideo } from 'src/app/class/edutuber/edutuber-video';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-edutuber-videos',
  templateUrl: './edutuber-videos.component.html',
  styleUrls: ['./edutuber-videos.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
})
export class EdutuberVideosComponent implements OnInit {

  @Input() edutuber!: EdutuberVideo;
  @Input() prefix: string = 'all';
  imgVideo: string = 'https://ionicframework.com/docs/img/demos/thumbnail.svg';

  constructor(private router: Router) { }

  ngOnInit() {
    this.imgVideo = this.edutuber.image;
  }

  public goVideo(id: any){
    this.router.navigate(['/experience/edutuber/'+id]);
  }
}
