import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  logo = "assets/img/imagen_init.png";
  css = "assets/style/par.css";
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
    this.logo = "assets/img/imagen_init.png";
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
    this.css = "assets/style/par.css";
  }

  public loadStyle(styleName: string) {
    console.log(styleName);    
    const head = document.getElementsByTagName('head')[0];
    let themeLink = document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `${styleName}`; //<--add assets
    } else {
      const style = document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.type = 'text/css';
      style.href = `${styleName}`; //<--add assets

      head.appendChild(style);
    }
  }

}
