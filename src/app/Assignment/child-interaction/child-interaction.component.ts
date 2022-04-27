import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-interaction',
  templateUrl: './child-interaction.component.html',
  styleUrls: ['./child-interaction.component.css']
})
export class ChildInteractionComponent implements OnInit {

  @Input()
  productCategory!:string;
  
  @Input()
    categories !:string;
  

  products:any[]=[];
   constructor() {
    let p1 = new Products('RC_Car','Remote Car',1000,'Toys');
    let p2 = new Products('DOll','Chhan Mazi Bahuli ',100,'Toys');
    let p3 = new Products('TShirt','Cotton T-Shirt',700,'Mens');
    let p4 = new Products('Trouser','Casual Trouser',1700,'Mens');
    let p5 = new Products('Chappal','Casual Kolhapuri',2700,'FootWear');
    let p6 = new Products('Joggers','Casual Nike Shoes',5700,'FootWear');
    let p7 = new Products('TennisRacket','Kids Tennis Racket',900,'Sports');
    this.products=[p1,p2,p3,p4,p5,p6,p7];

    }
  ngOnInit(): void {
    
  }
}

export class Products{
  public get category(): string {
    return this._category;
  }
  public set category(value: string) {
    this._category = value;
  }
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  
  constructor(private _name: string,private _description: string,private _price: number,private _category: string){}
}