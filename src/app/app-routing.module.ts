import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/home/pages/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about-me',
    loadComponent: () => import('./modules/about-me/page/about-me.component').then(m => m.AboutMeComponent)
  },
  {
    path: 'games',
    loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule)
  },
  {
    path: 'contact',
    loadComponent: () => import('./modules/contact/page/contact.component').then(m => m.ContactComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
