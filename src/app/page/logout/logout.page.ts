import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {

  btnEnter = 'SALIR';

  constructor(private router: Router
    , public menuCtrl: MenuController
    , private dataService: ApiService) { }

  public metodoSalir(){
    this.dataService.clearStorage();
    this.menuCtrl.enable(false);
    this.router.navigate(['/'], { replaceUrl: true });
  }

  ngOnInit() {
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

}
