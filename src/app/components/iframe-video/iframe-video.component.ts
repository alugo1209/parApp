import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-iframe-video',
  templateUrl: './iframe-video.component.html',
  styleUrls: ['./iframe-video.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
})
export class IframeVideoComponent  implements OnChanges {

  @Input() videoUrl: string = "";
  video: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges() {
    this.video = this.cleanURL(this.videoUrl);
  }

  cleanURL(oldURL: any): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL); 
  }

}
