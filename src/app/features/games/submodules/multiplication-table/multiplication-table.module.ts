import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplicationTableComponent } from './pages/multiplication-table.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MultiplicationTableComponent
  ],
  exports: [
    MultiplicationTableComponent
  ]
})
export class MultiplicationTableModule { }
