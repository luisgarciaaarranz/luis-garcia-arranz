import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './pages/games.component';

const routes: Routes = [{
 path: 'three-in-a-row',
 loadComponent: () => import('./submodules/three-in-a-row/pages/three-in-a-row.component').then(m => m.ThreeInARowComponent)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }