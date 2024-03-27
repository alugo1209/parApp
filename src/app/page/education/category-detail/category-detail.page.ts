import { TopicsCourse } from 'src/app/class/education/moduleDetails/topicsCourse';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements AfterViewInit {

  topicId: any;
  content: any;
  html: any;
  contentflag: boolean = false;
  htmlflag: boolean = false;
  topicsCourse: TopicsCourse = new TopicsCourse();

  constructor(private sanitizer: DomSanitizer
    , private router: Router
    , private activatedRoute: ActivatedRoute
    , public dataService: ApiService) { }

  ngAfterViewInit() {
    this.getDataI();
  }

  private getDataI() {
    this.activatedRoute.params.subscribe(params => {
      let id = parseInt(params['topicId']);
      this.getDataV(id);
    });
  }

  private getDataV(id: any) {
    this.dataService.getStorage('toCo'+id)
      .then((data: any) => {
        if (data) {
          this.topicsCourse = data;  
          const temp = this.topicsCourse.toCo_ContentVirtual;
          if(temp.startsWith('<!DOCTYPE')){
            this.html = this.sanitizer.bypassSecurityTrustHtml(temp);
            this.htmlflag = true;
          } else {
            this.content = this.sanitizer.bypassSecurityTrustResourceUrl(temp);
            this.contentflag = true;
          }
        }
      });
  }

  public regresar() {
    this.router.navigate(['/education']);
  }

}
