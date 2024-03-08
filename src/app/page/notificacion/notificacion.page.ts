import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Notification } from 'src/app/class/notification/notification';
import { ApiService } from 'src/app/services/api.service';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.page.html',
  styleUrls: ['./notificacion.page.scss'],
})
export class NotificacionPage implements AfterViewInit {

  userId!: string;
  token!: string;
  lists!: Array<Notification>;

  constructor(
    private router: Router
    , private toastCtrl: ToastController
    , public dataService: ApiService) { }

    ngAfterViewInit() {
      this.getDataT();
    }
  
    private getDataT() {
      this.dataService.getStorage('token')
      .then((data: any) => {
        if (data) {
          this.token = data;
          this.listNotificacions();
        }
      });
    }
  
    private listNotificacions(){
      this.dataService.getNotifications(this.token)
      .subscribe((result) => {
        this.getDataResult(result);
      });
    }
  
    private getDataResult(data: any) {
      if (data.error) {
        this.dataService.showToast(this.toastCtrl, data.statusText);
      } else {
        const dataTemp: Array<Notification> = data.result;
        this.lists = dataTemp;
      }
    }

    viewWebPage = async ( url: string ) => {
      await Browser.open({ url: 'http://' + url });
      Browser.addListener('browserFinished', () => {
        console.log("browser exited");
      });
    };

    public regresar() {
      this.router.navigate(['/main']);
    }
  
}
