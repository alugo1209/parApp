import { ApiService } from 'src/app/services/api.service';
import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { User } from 'src/app/class/user/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {

  public appPages = [
    { title: 'Rutero Relacional', url: '/clients', icon:'pie-chart', imagen: 'rutero' },
    { title: 'Educación', url: '/education', icon: 'book', imagen: 'educacion' },
    { title: 'Experiencias', url: '/experience', icon: 'film' , imagen: 'experiencias'},
    { title: 'Notificación', url: '/notificacion', icon: 'notifications' , imagen: 'notification'},
    // { title: 'Juegos', url: '/juegos', icon: 'games' , imagen: 'juegos-serios'},
    // { title: 'Contacto', url: '/contact', icon: 'call' }
  ];

  name: string | undefined;

  constructor(private dataService: ApiService
    , public menuCtrl: MenuController) { }

  ngOnInit() {
    this.getData();
    this.metodoSalir();
  }
  ngAfterContentInit()  {
    this.metodoSalir();
  }
  ngAfterViewInit() {
    this.metodoSalir();
  }
  ngOnDestroy() {
    this.metodoSalir();
  }
  public metodoSalir(){
    this.menuCtrl.enable(true);
  }

  private getData() {
    this.dataService.getStorage('user')
    .then((data: any) => {
      if (data) {
        const user: User = data;
        this.name = user.name;
      }
    });
  }

}
