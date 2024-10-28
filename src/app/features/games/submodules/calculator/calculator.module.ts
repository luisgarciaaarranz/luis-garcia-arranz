import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './pages/calculator.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalculatorComponent,
  ],
  exports: [
    CalculatorComponent
  ]
})
export class CalculatorModule { }
