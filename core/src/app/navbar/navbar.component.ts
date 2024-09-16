import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    constructor(private viewportscroller: ViewportScroller){}

    goTonextsection(sectionId: string){
      this.viewportscroller.scrollToAnchor(sectionId)
    }
}
