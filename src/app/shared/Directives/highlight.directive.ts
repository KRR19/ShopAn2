import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color!: string;
  constructor(private el: ElementRef, private renderer: Renderer2)
  {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.highlight(this.color || 'lightgreen');
  }
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.highlight('');
  }
  private highlight(color: string): void {
    console.log(this.el.nativeElement);

    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
