import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCircular]',
})
export class CircularDirective implements OnInit {
  constructor(private element: ElementRef) {}

  @Input() backgroundColor: string;

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    this.element.nativeElement.style.color = '#fff';
    this.element.nativeElement.style.borderRadius = '50%';
  }
}
