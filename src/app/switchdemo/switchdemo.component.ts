import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css']
})
export class SwitchdemoComponent implements OnInit {
  people: Array<any>;
  peopleByCity: Array<any>;

  constructor() {
    this.people = [{ name: 'vivek', age: 49 }, { name: 'vasant', age: 50 }, { name: 'bhagyashree', age: 25 }, { name: 'pratibha', age: 42 }];
    this.peopleByCity = [
      {
        city: "Pune", people: [{ name: 'vivek', age: 49 }]
      },
      {
        city: "Belgaun", people: [{ name: 'vasant', age: 50 }, { name: 'bhagyashree', age: 25 }]
      }
    ];
  }

  ngOnInit(): void {
  }

}
