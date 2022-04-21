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
  

  constructor() { }

  ngOnInit(): void {
  }

  listenMyFun(){

  }
  //s1:Stock=new Stock("Pen",100);

  
}

class Stock{
  
  public get prdquantity(): number {
    return this._prdquantity;
  }
  public set prdquantity(value: number) {
    this._prdquantity = value;
  }
  public get prdname(): string {
    return this._prdname;
  }
  public set prdname(value: string) {
    this._prdname = value;
  }
  constructor(private _prdname: string,private _prdquantity: number){}
}

