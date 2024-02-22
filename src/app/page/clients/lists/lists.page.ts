import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Client } from 'src/app/class/client/client';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  userId!: string;
  token!: string;
  lists!: Array<Client>;
  listsOriginal!: Array<Client>;

  constructor(
    private router: Router
    , private toastCtrl: ToastController
    , public dataService: ApiService) { }

  ngOnInit() {
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
        this.listClientsByUser();
      }
    });
  }

  private listClientsByUser(){
    this.dataService.getClientsByUser(this.token, this.userId)
    .subscribe((result) => {
      this.getDataResult(result);
    });
  }

  private getDataResult(data: any) {
    if (data.error) {
      this.dataService.showToast(this.toastCtrl, data.statusText);
    } else {
      const dataTemp: Array<Client> = data.result;
      this.lists = dataTemp;
      this.listsOriginal = dataTemp;
    }
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.lists = this.listsOriginal.filter((d) => 
    {
      if(d.enterprise_Name?.toLowerCase().includes(query) || d.first_Name?.toLowerCase().includes(query)) {
        return true;
      } else {
        return false;
      }
    }
    );
  }

  public goTo(id: any) {
    this.router.navigate(['/clients/details/' + id]);
  }
  public regresar() {
    this.router.navigate(['/clients']);
  }

}
