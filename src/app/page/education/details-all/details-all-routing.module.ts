import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsAllPage } from './details-all.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsAllPageRoutingModule {}
