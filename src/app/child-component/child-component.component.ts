import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../parent-component/parent-component.component';
import { Pizza } from '../parent-component/parent-component.component';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input()
  objects!:Array<any>;
  //objects2!:Array<Pizza>;

  
  constructor() { 
    console.log("display object comp creted");
  }
 getKeys(obj:any){
   return Object.keys(obj);
 }


  ngOnInit(): void {
  }

}
//console.log(Employee);
