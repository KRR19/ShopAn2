import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2)
  {}

  @HostBinding('class')
  attrClass = 'mouseOver';

  @HostListener('mouseenter', ['$event'])
  enter(event: Event): void {
    this.renderer.removeClass(this.el.nativeElement, 'mouseOver');
    this.renderer.addClass(this.el.nativeElement, 'mouseOn');
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event): void {
    this.renderer.removeClass(this.el.nativeElement, 'mouseOn');
    this.renderer.addClass(this.el.nativeElement, 'mouseOver');
  }
}
