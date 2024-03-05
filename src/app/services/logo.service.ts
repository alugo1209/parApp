import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  logo = "assets/img/logo-content.png";
  bgImage = 'assets/img/loading.png';
  rdn = 1;

  constructor () {
    this.rdn = this.random();
  }

  public getLogo(){
    return this.logo;
  }

  public setLogo(logo: string | undefined){
    if(logo){
      this.logo = logo;
    }
  }

  public resetLogo(){
    this.logo = "assets/img/logo-content.png";
  }

  public getBgImage(){
    this.bgImage = 'assets/img/portada_' + this.rdn + '.png';
    return this.bgImage;
  }

  public resetBgImage(){
    this.bgImage = 'assets/img/loading.png';
  }

  private random(): number {
    let rand = Math.floor(Math.random()*8)+1;
    return rand;       
  }


}
