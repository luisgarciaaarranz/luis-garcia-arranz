import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/pages/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about-me',
    loadComponent: () => import('./features/about-me/page/about-me.component').then(m => m.AboutMeComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/pages/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/page/contact.component').then(m => m.ContactComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
