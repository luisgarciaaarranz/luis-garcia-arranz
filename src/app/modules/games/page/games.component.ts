import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-games',
  standalone: false,
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {

  gamesList: {game: string, title: string, imageRoute: string
  }[] = [
    {
      game: "multiplication-table",
      title: "Tabla de multiplicar",
      imageRoute: "../../../../../assets/images/multiplication-table.png"
    }, {
    game: "three-in-a-row",
    title: "Tres en raya",
    imageRoute: "../../../../../assets/images/three-in-a-row.png"
  }, 
  {
    game: "calculator",
    title: "Calculadora",
    imageRoute: "../../../../../assets/images/calculator.png"
  }]

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToRoute(route: string) {
    this.router.navigate([route], {relativeTo: this.route});
  }

}
