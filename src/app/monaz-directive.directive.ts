import { AfterContentInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMonazDirective]'
})
export class MonazDirectiveDirective implements AfterContentInit {
  @Input('my-bgColor')
  hightLightColor!:string;

  @Input('text-color')
  fontColor!:string;

  flag!:boolean;

  private myElement:any;
 
  constructor(element:ElementRef) {
    this.myElement=element.nativeElement;
   }
  ngAfterContentInit(): void {
   this.myElement.style.backgroundColor=this.hightLightColor;
   this.myElement.style.color=this.fontColor;
  }

  @HostListener('click')
  goRed()
  {
    if(this.flag)
    {
      this.flag=false;
    this.myElement.style.backgroundColor="red";
    this.myElement.style.color="white";
   
    }
    else{
      this.flag=true;
      this.myElement.style.backgroundColor="blue";
    }
    
  }
 

  

  

}
