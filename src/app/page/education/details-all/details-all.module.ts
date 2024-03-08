import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsAllPageRoutingModule } from './details-all-routing.module';

import { DetailsAllPage } from './details-all.page';
import { DetailVirtualComponent } from 'src/app/components/detail-virtual/detail-virtual.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailVirtualComponent,
    DetailsAllPageRoutingModule
  ],
  declarations: [DetailsAllPage]
})
export class DetailsAllPageModule {}
