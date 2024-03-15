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
  private urlApiEdutuberVideos = 'https://score-test.contentgrp.com/api/edutuberVideos/';
  private urlApiEdutuberVideosLoad = 'https://score-test.contentgrp.com/api/edutuberVideos/Store';
  private urlApi = 'https://aprendeyavanza2.com.co/ApiSilver/api/';
  public apiClients = 'Clients';
  public apiClientsByUser = 'Clients/List/';
  public apiClientsById = 'Clients/';
  public apiClientsClasification = 'Clasification/';
  public apiClientsGetModuleByClasification = 'Clasification/GetModuleByClasification/';
  public apiUsersGetListModuleVirtual = 'Users/GetListModuleVirtual/';
  public apiUsersGetModule = 'Users/GetModule/';
  public apiUsersGetNotifications = 'Users/GetNotifications/';

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

  public random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    //return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',0.7)';
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

  public edutuberVideos(token: string, id: string) {
    return this.http.get(this.urlApiEdutuberVideos + id,this.getOptions2(token));
  }

  public getClientes(token: string) {
    return this.http.get(this.urlApi+this.apiClients,this.getOptions2(token));
  }

  public getClientsClasification(token: string, userId: string) {
    return this.http.get(this.urlApi+this.apiClientsClasification+userId,this.getOptions2(token));
  }

  public getClientsByUser(token: string, userId: string) {
    return this.http.get(this.urlApi+this.apiClientsByUser+userId,this.getOptions2(token));
  }

  public getClientsById(token: string, clienteId: string) {
    return this.http.get(this.urlApi+this.apiClientsById+clienteId,this.getOptions2(token));
  }

  public getModuleByClasification(token: string, clienteId: string) {
    return this.http.get(this.urlApi+this.apiClientsGetModuleByClasification+clienteId,this.getOptions2(token));
  }

  public getListModuleVirtual(token: string, clienteId: string) {
    return this.http.get(this.urlApi+this.apiUsersGetListModuleVirtual+clienteId,this.getOptions2(token));
  }

  public getModule(token: string, modId: number, clienteId: string) {  
    return this.http.get(this.urlApi+this.apiUsersGetModule+modId+'/'+clienteId,this.getOptions2(token));
  }

  public getNotifications(token: string) {
    return this.http.get(this.urlApi+this.apiUsersGetNotifications,this.getOptions2(token));
  }

  public uploadFile(company_id: string, user_id: string, name: string, description: string, file: Blob, fileName: string) {

    const formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('company_id', company_id);
    console.log(formData.getAll('name'));
    formData.append('file', file, fileName); 

    return this.http.post(this.urlApiEdutuberVideosLoad, formData);

  }


}
