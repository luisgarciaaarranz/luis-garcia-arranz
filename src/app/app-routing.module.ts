import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'about', loadComponent: () => import('./features/about-me/page/about-me.component').then(m => m.AboutMeComponent) },
      { path: 'experience', loadComponent: () => import('./features/experience/experience.component').then(m => m.ExperienceComponent) },
      { path: 'projects', loadComponent: () => import('./features/projects/pages/projects.component').then(m => m.ProjectsComponent) },
      { path: 'contact', loadComponent: () => import('./features/contact/page/contact.component').then(m => m.ContactComponent) },
    ]
  },
  {
    path: 'home',
    component: HomeComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
