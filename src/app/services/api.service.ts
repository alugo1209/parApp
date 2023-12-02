import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public ingreso = false;
  //private proxyurl = ""; // borrar
  //private proxyurl = "https://cors-anywhere.herokuapp.com/"; // borrar
  private urlApiLogin = 'https://score-test.contentgrp.com/api/login';
  private urlApi = 'https://aprendeyavanza2.com.co/ApiSilver/api/';
  public apiClients = 'Clients';
  public apiClientsByUser = 'Clients/List';

  constructor(public http: HttpClient
    , private storage: Storage
    ) { }

  async showToast(toastController: ToastController, msg: string | undefined, duration?: number): Promise<void> {
    const toast = await toastController.create({
        cssClass: 'custom-toast',
        message: msg,
        animated: true,
        duration: duration ? duration : 2000,
        mode: 'ios'
    });
    toast.present();
  }

  private getOptionsLogin(): { headers: HttpHeaders } {
    const header = new HttpHeaders()
      .set('Content-Type','application/x-www-form-urlencoded')
    ;
    const opciones = {
      headers : header
    };
    return opciones;
  }

  private getOptions2(token: string | string[]): { headers: HttpHeaders } {
    const header = new HttpHeaders()
    .set('Accept','*/*')
    .set('Content-Type','application/json; charset=utf-8')
    .set('mode','no-cors')
    .set('Authorization', 'bearer ' + token)
    ;
    const opciones = {
      headers : header
    };
    return opciones;
  }

  public getStorage(name: string): any {
    return this.storage.get(name);
  }

  public setStorage(name: string, value: any): void {
    this.storage.set(name, value);
  }

  public clearStorage(): void {
    this.storage.clear();
  }

  public getLogin(user: string, pass: string) { 
    const params = new HttpParams({
      fromObject: {
          email: user,
          password: pass,
      }
  });  
    return this.http.post(this.urlApiLogin,params,this.getOptionsLogin());
  }

  public getClientes(token: string) {
    return this.http.post(this.urlApi+this.apiClients,'',this.getOptions2(token));
  }
}
