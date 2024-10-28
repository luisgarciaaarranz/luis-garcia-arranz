import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {

  @Input() route: string = '';
  @Input() title: string = '';
  @Input() srcImage: string = '';

  @Output() goRoute = new EventEmitter<string>();

  protected handlerEventRoute(route: string) {
    this.goRoute.emit(route);
  }

}
