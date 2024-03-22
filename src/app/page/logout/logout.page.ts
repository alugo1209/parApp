import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { LogoService } from 'src/app/services/logo.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {

  btnEnter = 'SALIR';

  constructor(private router: Router
    , public menuCtrl: MenuController
    , private dataService: ApiService
    , private logoService: LogoService
    ) { }

  public metodoSalir(){
    this.dataService.clearStorage();
    this.menuCtrl.enable(false);
    this.logoService.resetLogo();
    this.logoService.resetClassMenu();
    this.logoService.resetCss();
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
