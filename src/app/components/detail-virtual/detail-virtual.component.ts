import { NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModuleDetail } from 'src/app/class/education/moduleDetails/moduleDetail';
import { ApiService } from 'src/app/services/api.service';

@Component({
  standalone: true,
  selector: 'app-detail-virtual',
  templateUrl: './detail-virtual.component.html',
  styleUrls: ['./detail-virtual.component.scss'],
  imports: [
      NgForOf
  ],
})
export class DetailVirtualComponent implements OnInit {

  @Input() modId!: number;
  @Input() userId!: string;
  @Input() token!: string;

  lists!: Array<ModuleDetail>;

  constructor(private toastCtrl: ToastController
    , public dataService: ApiService) {
    }
 
  async ngOnInit() {
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
      const dataTemp: Array<ModuleDetail> = data.result;
      this.lists = dataTemp;
      console.log(this.lists);

    }
  }

}
