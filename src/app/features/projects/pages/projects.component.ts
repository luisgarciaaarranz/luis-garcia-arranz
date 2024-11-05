import { Component } from '@angular/core';
import { CardsComponent } from '../components/cards/cards.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
      name: 'luis-garcia-arranz',
      href: 'https://github.com/luisgarciaaarranz/luis-garcia-arranz',
      description: 'Mi portfolio'
    },
    {
      name: 'games',
      href: 'https://github.com/luisgarciaaarranz/games',
      description: 'Juegos'
    }
  ]

}
