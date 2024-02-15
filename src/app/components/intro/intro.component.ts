import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  get name() {
    return "Mohammed Shaikh"
  }
  get desc() {
    return "Full Stack Web Web developer";
  }

  get intro() {
    // return `Embark! on a transformative journey into the dynamic realm of full stack web development`
    return `A Passionate  Full-Stack Spring Boot Angular/React Web Developer `;
  }
 
}
