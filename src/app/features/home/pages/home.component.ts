import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon'
import { ActivatedRoute, Router } from '@angular/router';
import { ContactComponent } from '../../contact/page/contact.component';
import { ExperienceComponent } from '../../experience/experience.component';
import { AboutMeComponent } from '../../about-me/page/about-me.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, AboutMeComponent, ContactComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  @ViewChild('container', { static: true }) container!: ElementRef;
  currentSection = 0;



  constructor(private router: Router) {

  }

  goTo(route: string) {
    this.router.navigate([route], );
  }


}
