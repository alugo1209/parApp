import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AfterViewInit, Component, Input } from '@angular/core';
import { TopicsCourse } from 'src/app/class/education/moduleDetails/topicsCourse';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';

@Component({
  standalone: true,
  selector: 'app-detail-virtual',
  templateUrl: './detail-virtual.component.html',
  styleUrls: ['./detail-virtual.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
})
export class DetailVirtualComponent implements AfterViewInit {

  @Input() toCoId!: number;
  topicsCourse!: TopicsCourse;

  constructor(private sanitizer: DomSanitizer
    , public dataService: ApiService) {
      this.topicsCourse = new TopicsCourse();
      this.topicsCourse.toCo_ContentVirtual = "";
      this.topicsCourse.toCo_Html = "";
      this.topicsCourse.toCo_Name = "";
    }
 
  public ngAfterViewInit() {
    this.listModuleVirtual();
  }
  
  private async listModuleVirtual(){    
    await this.dataService.getStorage('toCo'+this.toCoId)
    .then((data: any) => {
      if (data) {
        this.topicsCourse = data;
        this.getTopicsCourse();
      }
    });
  }

  private getTopicsCourse(){
    this.topicsCourse.toCo_Html = this.topicsCourse.toCo_ContentVirtual;
    this.topicsCourse.toCo_Html = this.topicsCourse.toCo_Html.replaceAll("height=\"800\"", "style=\"border: none\"");
    // this.topicsCourse.toCo_Html = this.topicsCourse.toCo_Html.replaceAll("</html>", "");
    // this.topicsCourse.toCo_Html = this.topicsCourse.toCo_Html.replaceAll("<head>", "");
    // this.topicsCourse.toCo_Html = this.topicsCourse.toCo_Html.replaceAll("</head>", "");
    // this.topicsCourse.toCo_Html = this.topicsCourse.toCo_Html.replaceAll("<body>", "");
    // this.topicsCourse.toCo_Html = this.topicsCourse.toCo_Html.replaceAll("</body>", "");
    this.topicsCourse.toCo_Html = this.sanitizer.bypassSecurityTrustHtml(this.topicsCourse.toCo_Html);
  }

}
