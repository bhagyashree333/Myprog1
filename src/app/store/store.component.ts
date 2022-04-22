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
    
    this.orderPlaced.emit(new Order("",2));
  }


  
}
class Order{
  public get prname(): string {
    return this._prname;
  }
  public set prname(value: string) {
    this._prname = value;
  }
  public get orderqty(): number {
    return this._orderqty;
  }
  public set orderqty(value: number) {
    this._orderqty = value;
  }
 
  constructor(private _prname: string,private _orderqty: number){}
}


