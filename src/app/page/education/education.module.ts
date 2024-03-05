import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationPageRoutingModule } from './education-routing.module';

import { EducationPage } from './education.page';
import { DetailVirtualComponent } from 'src/app/components/detail-virtual/detail-virtual.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailVirtualComponent,
    EducationPageRoutingModule
  ],
  declarations: [EducationPage]
})
export class EducationPageModule {}
