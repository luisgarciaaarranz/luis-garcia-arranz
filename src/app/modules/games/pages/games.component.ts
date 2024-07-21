import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {

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
    }
  ]

}
