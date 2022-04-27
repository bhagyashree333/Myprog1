import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
 
  parentvar!:string;

 display(myparentvar:string){
this.parentvar=myparentvar;
console.log(this.parentvar)
 }
 
  
  constructor() { }

  ngOnInit(): void {
  }

  
}
