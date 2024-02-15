import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {



  constructor(@Inject(DOCUMENT) private document: Document) {
    // Now you can use this.document to access the document object
  }

  ngAfterViewInit(): void {
    // let svgElement: any = ((window as Window).document.getElementById('myFish') as unknown) as SVGSVGElement;


    // // svgElement.addEventListener('mousedown', startDrag);
    // (window as Window).document.body.addEventListener('mousemove', drag);
    // // svgElement.addEventListener('mouseup', endDrag);
    // // svgElement.addEventListener('mouseleave', endDrag);

    // let selectedElement: SVGGElement | null, offset: { x: number; y: number; } = { x: -100, y: 500 }, transform: SVGTransform;

    // // function startDrag(evt: MouseEvent) {
    // //   if (evt.target === gElement) {
    // //     selectedElement = evt.target as SVGGElement;
    // //     offset = getMousePosition(evt);
    // //     // Get all the transforms currently on this element
    // //     let transforms = selectedElement.transform.baseVal;
    // //     // Ensure the first transform is a translate transform
    // //     if (transforms.length === 0 || transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
    // //       // Create an transform that translates by (0, 0)
    // //       let translate = svgElement.createSVGTransform();
    // //       translate.setTranslate(0, 0);
    // //       // Add the translation to the front of the transforms list
    // //       selectedElement.transform.baseVal.insertItemBefore(translate, 0);
    // //     }
    // //     // Get initial translation amount
    // //     transform = transforms.getItem(0);
    // //     offset.x -= transform.matrix.e;
    // //     offset.y -= transform.matrix.f;
    // //   }
    // // }

    // function drag(evt: MouseEvent) {
    //   if (svgElement) {
    //     evt.preventDefault();
    //     let coord = {
    //       x: evt.clientX,
    //       y: evt.clientY,
    //     }

    //     svgElement.setAttribute("transform", 'translate(' + ((coord.x) + ',' + (coord.y)) + ")");
    //   }
    // }

    // function endDrag(evt: MouseEvent) {
    //   selectedElement = null;
    // }




  }
  toggleMenu(div: HTMLDivElement) {
    let haveClass: boolean = div.classList.contains("show");
    if (haveClass) {
      div.classList.remove("show")
    } else {
      div.classList.add("show")
    }

  }
  changeTheme() {

    let themeColor = this.document.body.getAttribute('data-bs-theme');
    themeColor = (themeColor === 'light') ? "dark" : "light";
    this.document.body.setAttribute('data-bs-theme', themeColor);
  }
}
