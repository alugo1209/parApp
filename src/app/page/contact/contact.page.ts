import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Company } from 'src/app/class/user/company';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements AfterViewInit {

  lblInformacion =
    'Si olvidaste tu contraseña o tienes alguna duda, puedes contactarnos a nuetro correo: ';
  lblCorreo = 'contacto@contentgrp.com';
  lblresto = ' y atenderemos tus inquetudes';
  company!: Company;

  constructor(
    private router: Router
    , private toastCtrl: ToastController
    , public dataService: ApiService) { }

    ngAfterViewInit() {
      this.getDataU();
    }

    private getDataU() {  
      this.dataService.getStorage('company')
      .then((data: any) => {
        if (data) {
          this.company = data;
          this.lblCorreo = this.company.email;      
        }
      });
    }

    public regresar() {
      this.router.navigate(['/main']);
    }

}
