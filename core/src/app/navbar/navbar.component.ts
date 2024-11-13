import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FoncService } from '../fonc.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isMenuOpen = false;
    constructor(private viewportscroller: ViewportScroller, private fonc:FoncService){}


    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }

    
    // changer de section en fonction du nom 
     goTonextsection(sectionId: string){
      //  this.viewportscroller.scrollToAnchor(sectionId)
      this.fonc.goTonextSection(sectionId)
     }
}
