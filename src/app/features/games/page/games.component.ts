import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-games',
  standalone: false,
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {

  gamesList: {game: string, title: string
  }[] = [
    {
      game: "multiplication-table",
      title: "Tabla de multiplicar",
    }, {
    game: "three-in-a-row",
    title: "Tres en raya",
  }, 
  {
    game: "calculator",
    title: "Calculadora",
  }]

  
  constructor(private router: Router, private route: ActivatedRoute) {}

  goToRoute(route: string) {
    this.router.navigate([route], {relativeTo: this.route});
  }

}
