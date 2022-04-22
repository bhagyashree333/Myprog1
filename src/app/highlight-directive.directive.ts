import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {

  @Input ()
  mycolor!:string;

  constructor(private elementRef:ElementRef) { }
  @HostListener('mouseenter')
highlightMe()
{
  console.log("Mouse moved in");
  this.elementRef.nativeElement.style.backgroundColor=this.mycolor;
}
@HostListener('mouseleave')
undoHighlight()
{
console.log("mouse moved out");
this.elementRef.nativeElement.style.backgroundColor='pink';
}

// @HostListener('onclick')
// changeBg()
// {
//   console.log("i clicked in input box");
//   this.elementRef.nativeElement.style.backgroundColor=this.mycolor;
// }

}
