import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesModule } from './modules/games/games.module';

const routes: Routes = [
  /* {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }, */
  {
    path: '',
    loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
