import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.page.html',
  styleUrls: ['./init.page.scss'],
})
export class InitPage implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {

  btnEnter ='INGRESAR';
  bgImage = 'assets/img/loading.png';

  constructor(
    private router: Router
    , public menuCtrl: MenuController
    , private dataService: ApiService
    ) { }

  public login(){
    this.menuCtrl.enable(true);
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.menuCtrl.enable(false);
    this.dataService.getStorage('token')
    .then((result: string | null) => {
      if(result !== null && result !== '') {
        this.menuCtrl.enable(true);
        this.router.navigate(['/main']);
      }
    });
  }
  ngAfterContentInit()  {
    this.menuCtrl.enable(false);
  }
  ngAfterViewInit() {
    this.menuCtrl.enable(false);
  }
  ngOnDestroy() {
    this.menuCtrl.enable(true);
  }
}
