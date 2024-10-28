import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

 calculators = [
    {
      key: 'AC',
      value: 'AC',
      type: 'operator'
    },
    {
      key: 'negative-positive',
      value: '+/-',
      type: 'operator',
    }, 
    {
      key: 'percentage',
      value: '%',
      type: 'operator',
    },
    {
      key: 'divide',
      value: '%',
      type: 'operator',
    },
 {
    key: 'one',
    value: '1',
    type: 'number',
  },
  {
    key: 'one',
    value: '2',
    type: 'number',
  },
  {
    key: 'one',
    value: '3',
    type: 'number',
  },
  {
    key: 'plus',
    value: '+',
    type: 'operator',
  },
{
  key: 'one',
  value: '4',
  type: 'number',
},
{
  key: 'one',
  value: '5',
  type: 'number',
},
{
  key: 'one',
  value: '6',
  type: 'number',
},
{
  key: 'plus',
  value: '-',
  type: 'operator',
},
{

  key: 'one',
  value: '7',
  type: 'number',
},
{
  key: 'one',
  value: '8',
  type: 'number',
},
{
  key: 'one',
  value: '9',
  type: 'number',
},
{
  key: 'plus',
  value: '*',
  type: 'operator',
},
  {
    key: 'equal',
    value: '=',
    type: 'operator',
  },
  {
    key: 'delete',
    value: 'C',
    type: 'operator',
  },
  ]

  numberAccumulator: number = 0;

  operators: string[] = ['+'];
  buttonClick: number[] =[];


  public getOnClickButton(event: any){
    if (event.type === 'operator') {
      if(event.key === 'equal') {
        let aux = 0;
        this.numberAccumulator = 0;
        for(let num of this.buttonClick) {
          
          aux = aux + num
        }
        this.numberAccumulator = aux
      }
      if(event.key === 'delete') {
        this.numberAccumulator = 0;
        this.buttonClick = [];
      }
    } else if (event.type === 'number') {
      this.numberAccumulator = event.value;
      this.buttonClick.push(Number(event.value));
      
    }
  }
}
