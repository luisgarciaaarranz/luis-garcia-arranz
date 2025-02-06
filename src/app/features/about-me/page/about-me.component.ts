import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  skillsList: string[] = ['HTML', 'CSS', 'ANGULAR', 'JASMIN', 'KARMA', 'GOLAND', '.NET', 'JAVA', 'POSTGESQL', 'MONGO', 'GITHUB', 'JIRA', 'GOOGLE CLOUD']

  constructor(private router: Router) {}

  goTo() {
    this.router.navigate(['contact'], );
  }
}
