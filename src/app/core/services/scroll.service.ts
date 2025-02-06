import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  activeSection: string = 'home';

  constructor() { }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    this.activeSection = section;
    
    if (element) {
      const yOffset = -90; // Ajusta este valor según la altura de tu navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
  
      window.scrollTo({ top: y, behavior: 'smooth' });
      
      history.pushState(null, '', `/${section}`);
    }
  }

}
