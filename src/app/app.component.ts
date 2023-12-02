import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/main', icon: 'home' },
    { title: 'Rutero Relacional', url: '/clients', icon:'pie-chart' },
    { title: 'Educación', url: '/education', icon: 'book' },
    { title: 'Notificaciones', url: '/notificacion', icon: 'notifications' },
    { title: 'Contacto', url: '/contact', icon: 'call' },
    { title: 'Perfil', url: '/perfil', icon: 'person-circle' },
    { title: 'Salir', url: '/logout', icon: 'log-out' },
  ];
  constructor(private storage: Storage) {
    this.initializeApp();
  }

  private initializeApp() {
    this.storage.create();
    // this.platform.ready().then(async () => {
    //   if (this.platform.is('android')) {
    //     this.splashScreen.hide();
    //   }
    //   await this.statusBar.styleLightContent();
    // });
  }
}
