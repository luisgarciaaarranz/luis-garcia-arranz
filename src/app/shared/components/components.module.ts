import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ScrollService } from 'src/app/core/services/scroll.service';

const components = [
  NavbarComponent
]


@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
    ScrollService,
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule { }
