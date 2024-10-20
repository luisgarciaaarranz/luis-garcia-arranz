import { Component } from '@angular/core';
import { CalculatorModule } from '../submodules/calculator/calculator.module';
import { MultiplicationTableModule } from '../submodules/multiplication-table/multiplication-table.module';
import { ThreeInARowComponent } from "../submodules/three-in-a-row/pages/three-in-a-row.component";

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CalculatorModule, MultiplicationTableModule, ThreeInARowComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {

}
