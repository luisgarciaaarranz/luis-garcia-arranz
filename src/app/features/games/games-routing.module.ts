import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './page/games.component';

const routes: Routes = [
{
  path: '',
 component: GamesComponent,
},
{
  path: 'multiplication-table',
  loadComponent: () => import('./submodules/multiplication-table/pages/multiplication-table.component').then(m => m.MultiplicationTableComponent)
 },
{
 path: 'calculator',
 loadComponent: () => import('./submodules/calculator/pages/calculator.component').then(m => m.CalculatorComponent)
},
{
  path: 'three-in-a-row',
  loadComponent: () => import('./submodules/three-in-a-row/pages/three-in-a-row.component').then(m => m.ThreeInARowComponent)
 }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }