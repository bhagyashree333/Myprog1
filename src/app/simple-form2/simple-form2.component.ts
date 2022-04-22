import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
@Component({
  selector: 'app-simple-form2',
  template:`<form #f="ngForm" (ngSubmit)="onsubmit(f.form)" novalidate>
  <input name="first" ngModel required #first>
  <input name="last" ngModel>
  <button>Submit</button>
  </form>
  
  <p>form value:{{f.value |json}}</p>
  <p>form valid:{{f.valid}}</p>
     `,})
export class SimpleForm2Component implements OnInit {
  onsubmit(f:FormGroup){
    console.log(f.value);
    console.log(f.valid)
  }
  constructor() { }

  ngOnInit(): void {
  }

}


