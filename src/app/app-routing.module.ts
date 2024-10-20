import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesModule } from './modules/games/games.module';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/home/pages/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'games',
    loadComponent: () => import('./modules/games/pages/games.component').then(m => m.GamesComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
