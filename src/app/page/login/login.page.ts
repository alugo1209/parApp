import { Router } from '@angular/router';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Token } from 'src/app/class/user/token';
import { LogoService } from 'src/app/services/logo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  btnIngresar = 'INGRESAR';
  politicas = false;
  btnDisable = false;
  chPolitica = ' Acepto la';
  chDatos = 'política de tratamiento de datos';

  lblInformacion =
    'Si olvidaste tu contraseña o tienes alguna duda, puedes contactarnos a nuetro correo: ';
  lblCorreo = 'contacto@contentgrp.com';
  lblresto = ' y atenderemos tus inquetudes';

  @ViewChild('passwordEyeRegister')
  passwordEye!: {
    el: { setFocus: () => void; };
  };

  iconpassword = 'eye-off';
  passwordTypeInput = 'password';

  email: string = '';
  password: string = '';

  loading: any;

  constructor(
    private router: Router
    , private toastCtrl: ToastController
    , public dataService: ApiService
    , public menuCtrl: MenuController
    , public logoService: LogoService
    ,private loadingCtrl: LoadingController
  ) {    
    this.logoService.resetCss();
  }

  private getData() {
    this.showLoading();
    this.dataService.setStorage('ingreso', false);
    this.dataService.ingreso = false;
    this.dataService.getLogin(this.email, this.password)
    .subscribe((result) => {
      this.getDataResult(result);
    }, (err) => {
      this.loading.dismiss();
      this.dataService.showToastLogin(this.toastCtrl, err.statusText); 
    }
    );
  }

  private getDataResult(data: any) {
    this.loading.dismiss();
    if (data.error) {
      this.dataService.showToastLogin(this.toastCtrl, data.statusText);
    } else {
      const dataToken = data;
      const token: Token = dataToken;
      if (token.message === 'Success') {
        this.dataService.ingreso = true;
        this.dataService.setStorage('ingreso', true);
        this.dataService.setStorage('token', token.token);
        this.dataService.setStorage('user', token.user);
        this.dataService.setStorage('tokenFull', token);
        this.dataService.setStorage('company', token.company);
        this.dataService.setStorage('companyId', token.company?.id);
        this.dataService.setStorage('logo', token.company?.logo);
        this.dataService.setStorage('css', token.company?.css);
        this.dataService.setStorage('id', token.user?.id);
        this.logoService.setLogo(token.company?.logo);
        this.logoService.setClassMenu('contenidoHeader');
        // if(token.user?.email === 'user@proyectopar.com') {
        //   this.dataService.setStorage('userId', '8c090cc0-91ea-4e99-8286-ca27bba421b0');
        // } else {
        //   this.dataService.setStorage('userId', token.silver?.id);
        //   console.log(token.silver?.id);          
        // }        
        this.dataService.setStorage('userId', token.silver?.id);
        this.menuCtrl.enable(true);
        this.router.navigate(['/main']);
      }
      this.dataService.showToast(this.toastCtrl, token.message);
    }
  }

  public home() {
    this.getData();
  }

  public togglePasswordMode() {
    this.passwordTypeInput =
      this.passwordTypeInput === 'text' ? 'password' : 'text';
    this.iconpassword = this.iconpassword === 'eye-off' ? 'eye' : 'eye-off';
    this.passwordEye.el.setFocus();
  }

  public validarDatos(e: any) {
    this.btnDisable = false;
    if (this.email === undefined || this.email === '') {
      this.politicas = false;
      this.dataService.showToast(
        this.toastCtrl,
        'El correo se encuentra vacio'
      );
    } else if (this.password === undefined || this.password === '') {
      this.politicas = false;
      this.dataService.showToast(
        this.toastCtrl,
        'La contraseña se encuentra vacio'
      );
    } else {
      if (this.politicas) {
        this.btnDisable = true;
      } else {
        this.politicas = false;
        this.btnDisable = false;
      }
    }
    e.target.checked = this.politicas;
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.logoService.setClassMenu('contenidoHeaderlogin');
  }

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Espere...'
      , cssClass: 'custom-loading'
      , id: 'loginLoading'
      , spinner: 'circles'
      , translucent: true
    });

    this.loading.present();
  }
  
}
