import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdutuberPage } from './edutuber.page';

const routes: Routes = [
  {
    path: '',
    component: EdutuberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdutuberPageRoutingModule {}
