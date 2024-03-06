import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AfterViewInit, Component, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModuleDetail } from 'src/app/class/education/moduleDetails/moduleDetail';
import { ApiService } from 'src/app/services/api.service';
import { TopicsCourse } from 'src/app/class/education/moduleDetails/topicsCourse';

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

  @Input() modId!: number;
  @Input() userId!: string;
  @Input() token!: string;

  details!: ModuleDetail;
  topicsCourse: Array<TopicsCourse> = [];

  constructor(private toastCtrl: ToastController
    , public dataService: ApiService) {
    }
 
  public ngAfterViewInit() {
    this.listModuleVirtual();
  }
  
  private listModuleVirtual(){
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
      this.details = dataTemp;
      let course: Array<TopicsCourse> = (this.details.topicsCourse);
      let size = 2;
      if(course.length < size){
        size = course.length;
      }
      for (let index = 0; index < size; index++) {
        let element: any = course.shift();
        this.topicsCourse.push(element);
      }
    }
  }

}
