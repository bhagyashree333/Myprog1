import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-interaction',
  templateUrl: './parent-interaction.component.html',
  styleUrls: ['./parent-interaction.component.css']
})
export class ParentInteractionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories: string[] = ['Toys','FootWear','Mens','Sports'];

  display()
  {
    
  }
}
