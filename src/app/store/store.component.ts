import { Component, OnInit, Output,EventEmitter} from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @Output()
 orderPlaced: EventEmitter<Order>=new EventEmitter<Order>();


  constructor() { }

  ngOnInit(): void {
  }
  storeFun()
  {
    
    this.orderPlaced.emit(new Order(new Product("freeze",50000,"godrej"),1,2));
  }


  
}
class Order{
  public get orderqty(): number {
    return this._orderqty;
  }
  public set orderqty(value: number) {
    this._orderqty = value;
  }
  public get orderid(): number {
    return this._orderid;
  }
  public set orderid(value: number) {
    this._orderid = value;
  }
  constructor(private _prod:Product,private _orderid: number,private _orderqty: number){}
}


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