import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


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



  constructor(private router: Router) {

  }

  goTo(route: string) {
    this.router.navigate([route], );
  }


}
