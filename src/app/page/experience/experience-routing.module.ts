import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperiencePage } from './experience.page';

const routes: Routes = [
  {
    path: '',
    component: ExperiencePage
  },
  {
    path: 'new-experience',
    loadChildren: () => import('./new-experience/new-experience.module').then( m => m.NewExperiencePageModule)
  },
  {
    path: 'edutuber/:id',
    loadChildren: () => import('./edutuber/edutuber.module').then( m => m.EdutuberPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperiencePageRoutingModule {}
