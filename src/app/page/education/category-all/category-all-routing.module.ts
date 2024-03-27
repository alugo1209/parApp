import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryAllPage } from './category-all.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryAllPageRoutingModule {}
