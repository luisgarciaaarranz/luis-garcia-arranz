import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
// Registrar el ícono personalizado
this.matIconRegistry.addSvgIcon(
  'mi-icono', // nombre que usarás en el componente mat-icon
  this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/linkedin.svg')
);
  }

  goToAboutMe() {
    this.router.navigate(['about-me'], );
  }

}
