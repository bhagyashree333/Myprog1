import { Component, OnInit } from '@angular/core';
import {getJSONService} from '../services/jsonReaderservice';
@Component({
  selector: 'app-read-json',
  templateUrl: './read-json.component.html',
  styleUrls: ['./read-json.component.css']
})
export class ReadJsonComponent implements OnInit {
 books:any;

  constructor(private jsonReaderservice:getJSONService) {
    this.jsonReaderservice.getJSON().subscribe((data)=>{
      console.log(data);
      console.log("Readjson component")
      this.books=data;
      console.log(this.books);
    })
   }

  ngOnInit(): void {
  }

}
