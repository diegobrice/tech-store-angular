import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'darkblue';
    element.nativeElement.style.color = '#fff';
    element.nativeElement.style.borderRadius = '6px';
  }
}
