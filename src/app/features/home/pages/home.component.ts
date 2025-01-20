import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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


  @ViewChild('container', { static: true }) container!: ElementRef;
  currentSection = 0;

  sections = [
    { title: 'Section 1', color: '#1abc9c' },
    { title: 'Section 2', color: '#3498db' },
    { title: 'Section 3', color: '#9b59b6' }
  ];


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

  // Actualiza la sección activa al hacer scroll
  @HostListener('scroll', ['$event'])
  onScroll() {
    const scrollTop = this.container.nativeElement.scrollTop;
    const sectionHeight = this.container.nativeElement.offsetHeight;
    this.currentSection = Math.round(scrollTop / sectionHeight);
  }

  // Permite desplazarse a una sección específica
  scrollToSection(index: number) {
    const sectionHeight = this.container.nativeElement.offsetHeight;
    this.container.nativeElement.scrollTo({
      top: sectionHeight * index,
      behavior: 'smooth'
    });
    this.currentSection = index;
  }

}
