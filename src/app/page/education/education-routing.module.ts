import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationPage } from './education.page';

const routes: Routes = [
  {
    path: '',
    component: EducationPage
  },
  {
    path: 'category/:catId/:modId',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'category-all/:catId/:modId',
    loadChildren: () => import('./category-all/category-all.module').then( m => m.CategoryAllPageModule)
  },
  {
    path: 'category-detail/:topicId',
    loadChildren: () => import('./category-detail/category-detail.module').then( m => m.CategoryDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationPageRoutingModule {}
