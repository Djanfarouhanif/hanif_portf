import { Component } from '@angular/core';
import { FoncService } from '../fonc.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private func:FoncService){}

  goTonextSection(sectionId:string){
    
    this.func.goTonextSection(sectionId)
  }
}
