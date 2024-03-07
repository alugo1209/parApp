import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Company } from 'src/app/class/user/company';
import { Token } from 'src/app/class/user/token';
import { User } from 'src/app/class/user/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements AfterViewInit {

  user: User = new User();
  company: Company = new Company();

  constructor(private router: Router
    , private dataService: ApiService
    , public menuCtrl: MenuController) { }

  ngAfterViewInit() {
    this.getData();
  }

  private getData() {
    this.dataService.getStorage('tokenFull')
    .then((data: any) => {
      if (data) {
        const tokenfull: Token = data;
        this.user = tokenfull.user;
        this.company = tokenfull.company;
        
      }
    });
  }

  public regresar() {
    this.router.navigate(['/main']);
  }

}
