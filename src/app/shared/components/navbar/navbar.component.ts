import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  activeSection: string = 'about';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.observeSections();
    this.scrollToInitialSection();
  }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', `/${section}`);
    }
  }

  private scrollToInitialSection(): void {
    const currentPath = this.router.url.replace('/', ''); // Obtiene la URL sin "/"
    if (currentPath) {
      setTimeout(() => this.scrollTo(currentPath), 100); // Espera un poco para que Angular termine de renderizar
    }
  }

  private observeSections(): void {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id') || 'about';
            this.activeSection = sectionId;
            history.replaceState(null, '', `/${sectionId}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
  }
}
