import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'init',
    pathMatch: 'full'
  },
  {
    path: 'clients',
    loadChildren: () => import('./page/clients/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path: 'notificacion',
    loadChildren: () => import('./page/notificacion/notificacion.module').then( m => m.NotificacionPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./page/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./page/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./page/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'init',
    loadChildren: () => import('./page/init/init.module').then( m => m.InitPageModule)
  },  {
    path: 'education',
    loadChildren: () => import('./page/education/education.module').then( m => m.EducationPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./page/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./page/perfil/perfil.module').then( m => m.PerfilPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
