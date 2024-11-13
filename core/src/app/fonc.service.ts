import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class FoncService {

  constructor(private viewpostscroller:ViewportScroller) { }

  goTonextSection(sectionId:string){
      this.viewpostscroller.scrollToAnchor(sectionId)
  }
}
