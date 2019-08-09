import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective1]'
})
export class Directive1Directive {

  constructor(ele: ElementRef) {
    ele.nativeElement.style.color = "red";
   }

}
