import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollService } from 'src/app/core/services/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  activeSection: string = 'home';

  constructor(private scroll: ScrollService, private router: Router) {}

  ngOnInit(): void {
    this.scrollToInitialSection();
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  scrollTo(section: string): void {
    this.scroll.scrollTo(section);
  }

  private scrollToInitialSection(): void {
    const currentPath = this.router.url.replace('/', '').trim();
    if (currentPath) {
      setTimeout(() => this.scrollTo(currentPath), 200); // Asegurar que Angular renderiza antes del scroll
    }
  }

  onScroll(): void {
    const sections = ['home', 'about', 'experience', 'contact'];
  
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          this.activeSection = section;
          history.replaceState(null, '', `/${section}`);
        }
      }
    }
  }

}
