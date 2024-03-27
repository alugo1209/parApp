import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryAllPageRoutingModule } from './category-all-routing.module';

import { CategoryAllPage } from './category-all.page';
import { CategoryContentComponent } from 'src/app/components/category-content/category-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryContentComponent,
    CategoryAllPageRoutingModule
  ],
  declarations: [CategoryAllPage]
})
export class CategoryAllPageModule {}
