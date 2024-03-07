import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AfterViewInit, Component, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { EdutuberVideo } from 'src/app/class/edutuber/edutuber-video';

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
export class EdutuberVideosComponent implements AfterViewInit {

  @Input() edutuber!: EdutuberVideo;

  constructor(private toastCtrl: ToastController
    , public dataService: ApiService) { }

  ngAfterViewInit() {}

}
