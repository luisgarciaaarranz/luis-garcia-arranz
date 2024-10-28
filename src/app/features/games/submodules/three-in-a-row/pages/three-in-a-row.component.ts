import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PositionsStruct } from '../models/three-in-a-row.model';

@Component({
  selector: 'app-three-in-a-row',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './three-in-a-row.component.html',
  styleUrl: './three-in-a-row.component.scss'
})
export class ThreeInARowComponent {
  click: boolean = false;
  clickTwo: boolean = false;

  playersTurn = "1";

  positions: PositionsStruct[][]= []
trackByPosition: any;
index: any;


    ngOnInit() {
      let counter = 0;
      for(let i=0; i<3; i++) {
        let row: PositionsStruct[] = [];
        for(let j=0; j<3; j++) {
          row.push({position: counter.toString(), player: "", color:{ 'background-color':''}});
          counter++;
        }
        this.positions.push(row);
      }
      
    }

  getOnClickButton(event: any){
    this.positions.forEach(row => {
      row.filter(f => f.position === event.position).map(m => {
        if(m.player === "") {
          if(this.playersTurn === "1") {
            m.color = {'background-color': 'green'}
          }
          if(this.playersTurn === "2") {
            m.color = {'background-color': 'red'}
          }
        }
        m.player = this.playersTurn
      })
    })
    
    if(this.playersTurn === "1") {
      this.playersTurn = "2"
    } else {
      this.playersTurn = "1"
    }
    this.click = true;
    this.isAPlayerWinner();
  }

  isAPlayerWinner() {
    let counterOne: number = 0;
    let counterTwo: number = 0;
    for(let i=0; i<this.positions.length; i++) {
      for(let j=0; j<this.positions.length; j++) {
        if(this.positions[i][j].player === "1") {
          counterOne++;
          if(counterOne === 3) console.log('Ha ganado el jugador 1');
        } else if(this.positions[i][j].player === "2") {
          counterTwo++;
          if(counterTwo === 3) console.log('Ha ganado el jugador 2');
        }
      }
      counterOne = 0;
      counterTwo = 0;
    }
    
    
  }

}
