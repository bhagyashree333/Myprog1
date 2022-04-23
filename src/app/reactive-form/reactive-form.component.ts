import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  template:`<div class="container">
  <form class="form-group"[formGroup]="myForm" (ngSubmit)="onSubmit()">
    <label>First Name</label><input type="text" class="form-control" formControlName="fname">
    <label>Last Name</label><input type="text" class="form-control" formControlName="lname" required><br>
    <input type="submit" value="submit">
  </form>
  </div>
    `
})
export class ReactiveFormComponent implements OnInit {
  myForm:FormGroup;

  constructor() {
    this.myForm=new FormGroup({
      fname:new FormControl('vivek'),
      lname:new FormControl('kulkarni')


    })
    
this.myForm.valueChanges.subscribe((form:any)=>{console.log("received changed form");console.log(form);});

this.myForm.controls['fname'].valueChanges.subscribe((fieldValue:any)=>{console.log("Fname change"+fieldValue);});
   }
 
onSubmit(){
  console.log(this.myForm.value);
  console.log(this.myForm.controls["fname"].value);
  console.log(this.myForm.controls["fname"].valid);
  console.log(this.myForm.controls["lname"].value);
  console.log(this.myForm.controls["lname"].valid);

}

 

ngOnInit(): void {
  }

}
