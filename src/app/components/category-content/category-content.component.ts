import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TopicsCourse } from 'src/app/class/education/moduleDetails/topicsCourse';

@Component({
  standalone: true,
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
})
export class CategoryContentComponent  implements OnInit {

  @Input() topicsCourse!: TopicsCourse;
  @Input() modu_ImageName!: string;
  imgVideo: string = 'https://ionicframework.com/docs/img/demos/thumbnail.svg';

  constructor(private router: Router) { }

  ngOnInit() {
    this.imgVideo = this.modu_ImageName;
  }

  public goVideo(id: any){
    this.router.navigate(['/education/category-detail/'+id]);
  }

}
