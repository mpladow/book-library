import { Directive, ElementRef, OnInit, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHamburgerMenu]'
})
export class HamburgerMenuDirective implements OnInit{

  private siblingMenu = this.elementRef.nativeElement.nextElementSibling;
  @HostBinding('class.show') isOpen = false;
  @Input() highlightColor: string = 'blue';

  constructor(private elementRef: ElementRef)  { }

  ngOnInit() {
  }
  @HostListener('click') toggleOpen(){
    console.log(this.elementRef.nativeElement.nextElementSibling.querySelector('.test'));

    // if(this.isOpen){
    //   this.elementRef.nativeElement.nextElementSibling.classList.remove('show');
    //   this.siblingMenu.classList.add('show');
    // } else{
    //   this.siblingMenu.classList.remove('show');
    // }
    //  this.isOpen = !this.isOpen;

  }
}
