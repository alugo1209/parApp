import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  logo = "assets/img/imagen_init.png";
  css = "src/assets/style/par.css";
  classMenu = "contenidoHeaderInit";
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
    //this.bgImage = 'assets/img/portada_' + this.rdn + '.png';
    return this.bgImage;
  }

  public resetBgImage(){
    this.bgImage = 'assets/img/loading.png';
  }

  private random(): number {
    let rand = Math.floor(Math.random()*8)+1;
    return rand;       
  }

  public setClassMenu(classMenu: string | undefined){
    if(classMenu){
      this.classMenu = classMenu;
    }
  }
  
  public getClassMenu(){
    return this.classMenu;
  }

  public resetClassMenu(){
    this.classMenu = "contenidoHeaderInit";
  }

  public setCss(css: string | undefined){
    if(css){
      this.css = css;
    }
  }
  
  public getCss(){
    return this.css;
  }

  public resetCss(){
    this.css = "src/assets/style/par.css";
  }


}
