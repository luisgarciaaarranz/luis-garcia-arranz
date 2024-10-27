import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

const components = [
  NavbarComponent
]


@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule { }
