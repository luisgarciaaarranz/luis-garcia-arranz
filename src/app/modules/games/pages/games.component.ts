import { Component } from '@angular/core';
import { CalculatorModule } from '../submodules/calculator/calculator.module';
import { MultiplicationTableModule } from '../submodules/multiplication-table/multiplication-table.module';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CalculatorModule, MultiplicationTableModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {

}
