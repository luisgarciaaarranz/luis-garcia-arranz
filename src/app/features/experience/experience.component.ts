import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MatStepperModule,MatButtonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

}
