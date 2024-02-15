import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { IntroComponent } from '../intro/intro.component'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent,IntroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
