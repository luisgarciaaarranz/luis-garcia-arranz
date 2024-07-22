import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import { MatListModule } from '@angular/material/list'

@Component({
  selector: 'app-multiplication-table',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './multiplication-table.component.html',
  styleUrl: './multiplication-table.component.scss'
})
export class MultiplicationTableComponent {

  showTable: boolean = false;

  items: number[] = [0,1,2,3,4,5,6,7,8,9]

  public generateTable() {
    this.showTable = !this.showTable
  }

  public getValue(item: number): number {
    return 1*item
  }

}
