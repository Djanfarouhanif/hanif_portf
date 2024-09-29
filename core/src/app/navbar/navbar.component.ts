import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isMenuOpen = false;
    constructor(private viewportscroller: ViewportScroller){}


    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
    goTonextsection(sectionId: string){
      this.viewportscroller.scrollToAnchor(sectionId)
    }
}
