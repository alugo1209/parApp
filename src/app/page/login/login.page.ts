import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Token } from 'src/app/class/user/token';

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

  constructor(
    private router: Router
    , private toastCtrl: ToastController
    , public dataService: ApiService
    , public menuCtrl: MenuController
  ) {}

  private getData() {
    this.dataService.setStorage('ingreso', false);
    this.dataService.ingreso = false;
    this.dataService.getLogin(this.email, this.password).subscribe((result) => {
      this.getDataResult(result);
    });
  }

  private getDataResult(data: any) {
    if (data.error) {
      this.dataService.showToast(this.toastCtrl, data.statusText);
    } else {
      const dataToken = data;
      const token: Token = dataToken;
      if (token.message === 'Success') {
        this.dataService.ingreso = true;
        this.dataService.setStorage('ingreso', true);
        this.dataService.setStorage('token', token.token);
        this.dataService.setStorage('user', token.user);
        this.dataService.setStorage('tokenFull', token);
        if(token.user?.email === 'user@proyectopar.com') {
          this.dataService.setStorage('userId', '8c090cc0-91ea-4e99-8286-ca27bba421b0');
        } else {
          this.dataService.setStorage('userId', token.silver?.id);
        }        
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
      console.log(this.politicas);
      console.log(this.email);
      console.log(this.password);
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
  }
}
