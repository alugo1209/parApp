import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Client } from 'src/app/class/client/client';
import { ClientDetail } from 'src/app/class/client/clientDetail';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  clienteId!: any;
  token!: string;
  client: Client = new Client();

  constructor(
    private router: Router
    , private activatedRoute: ActivatedRoute
    , private toastCtrl: ToastController
    , public dataService: ApiService) { }

  ngOnInit() {
    this.getDataU();
  }

  private getDataU() {
    this.activatedRoute.params.subscribe(params => {
      this.clienteId = params['id'];
      this.getDataT();
    });
  }

  private getDataT() {
    this.dataService.getStorage('token')
    .then((data: any) => {
      if (data) {
        this.token = data;
        this.getClientsById();
      }
    });
  }

  private getClientsById(){
    this.dataService.getClientsById(this.token, this.clienteId)
    .subscribe((result) => {
      this.getDataResult(result);
    });
  }

  private getDataResult(data: any) {
    if (data.error) {
      this.dataService.showToast(this.toastCtrl, data.statusText);
    } else {
      const dataTemp: ClientDetail = data;
      this.client = dataTemp.result;      
    }
  }

  public regresar() {
    this.router.navigate(['/clients/lists']);
  }

}
