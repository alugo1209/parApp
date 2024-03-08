import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationPage } from './education.page';

const routes: Routes = [
  {
    path: '',
    component: EducationPage
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'details-all/:id',
    loadChildren: () => import('./details-all/details-all.module').then( m => m.DetailsAllPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationPageRoutingModule {}
