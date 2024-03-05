import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ModuleNroVirtual } from 'src/app/class/education/moduleVirtual/moduleNro';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss'],
})
export class EducationPage implements AfterViewInit {

  userId!: string;
  token!: string;
  lists!: Array<ModuleNroVirtual>;
  liststemp!: Array<ModuleNroVirtual>;

  constructor(
    private router: Router
    , private toastCtrl: ToastController
    , public dataService: ApiService) { }

    ngAfterViewInit() {
      this.getDataU();
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
          this.listModuleVirtual();
        }
      });
    }
  
    private listModuleVirtual(){
      this.dataService.getListModuleVirtual(this.token, this.userId)
      .subscribe((result) => {
        this.getDataResult(result);
      });
    }
  
    private getDataResult(data: any) {
      if (data.error) {
        this.dataService.showToast(this.toastCtrl, data.statusText);
      } else {
        const dataTemp: Array<ModuleNroVirtual> = data.result;
        this.lists = dataTemp;
        console.log(this.lists);

      }
    }

    public regresar() {
      this.router.navigate(['/main']);
    }
  
}
