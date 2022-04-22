import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  
  valueEmittedFromChildComponent:string="";
  
  
  parentEventHandlerFunction(valueEmitted:any)
  {
    this.valueEmittedFromChildComponent=valueEmitted;
    console.log(valueEmitted);
  }
  
 productMap:Map<Product,number>=new Map();
  constructor() { }
 p1=new Product("mobile",100,"samsung")
 p2=new Product("pen",100,"fountain")
 p3=new Product("washing machine",20000,"sony")
  ngOnInit(): void {
    this.productMap.set(this.p1,100);
    this.productMap.set(this.p2,500);
    this.productMap.set(this.p3,10)
  }


  listenMyFun(){

  }
  
  
}

// class Stock{
  
//   public get prdquantity(): number {
//     return this._prdquantity;
//   }
//   public set prdquantity(value: number) {
//     this._prdquantity = value;
//   }
//   public get prdname(): string {
//     return this._prdname;
//   }
//   public set prdname(value: string) {
//     this._prdname = value;
//   }
//   constructor(private _prdname: string,private _prdquantity: number){}
// }

class Product{
  public get prbrand(): string {
    return this._prbrand;
  }
  public set prbrand(value: string) {
    this._prbrand = value;
  }
  public get sprprice(): number {
    return this._sprprice;
  }
  public set sprprice(value: number) {
    this._sprprice = value;
  }
  
  public get sprname(): string {
    return this._sprname;
  }
  public set sprname(value: string) {
    this._sprname = value;
  }
  constructor(private _sprname: string,private _sprprice: number,private _prbrand: string){}
}

//console.log($event._prdname)

