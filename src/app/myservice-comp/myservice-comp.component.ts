import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/myservice';

@Component({
  selector: 'app-myservice-comp',
  templateUrl : './myservice-comp.component.html'
})
export class MyserviceCompComponent implements OnInit {
  users:string[];
  constructor(private userService:MyDataService) {
    this.users=userService.getUsers();
    console.log(this.users);
   }

  ngOnInit(): void {
  }

}
