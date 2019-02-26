import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private dropdownParentEl = this.elementRef.nativeElement.closest('.dropdown');
  @HostBinding('class.show') isOpen = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('click') toggleOpen() {
    if (this.isOpen) {
      this.dropdownParentEl.classList.remove('.show');
      this.dropdownParentEl.querySelector('.dropdown-menu').classList.add('show');
    } else {
      this.dropdownParentEl.classList.remove('.show');
      this.dropdownParentEl.querySelector('.dropdown-menu').classList.remove('show');
    }
    this.isOpen = !this.isOpen;
  }
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.elementRef.nativeElement.contains(event.target) && this.isOpen) {
      this.dropdownParentEl.classList.add('show');
      this.dropdownParentEl.querySelector('.dropdown-menu').classList.add('show');
    } else {
      this.dropdownParentEl.classList.remove('show');
      this.dropdownParentEl.querySelector('.dropdown-menu').classList.remove('show');
      this.isOpen = false;
    }
  }
}
