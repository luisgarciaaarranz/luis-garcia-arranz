import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

const components = [
  NavbarComponent
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    components
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule { }
