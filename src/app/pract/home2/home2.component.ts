import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
@Input()
searchfor!:string;        //accepting

  constructor() { }

  ngOnInit(): void {
  }

  myarray:string[]=["toy","footware","dress"];
}
