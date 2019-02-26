import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appFlashingElement]'
})
export class FlashingElementDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(0.5)');
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
this.backgroundColor = this.defaultColor;
  }
}

