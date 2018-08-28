import { Directive, Input, TemplateRef, ViewContainerRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.show') showDropdown = false;

  @HostListener('click') toggleOpen() {
    this.showDropdown = !this.showDropdown;
    console.log('showDropdown= ', this.showDropdown);
  }

  constructor() { }

}
