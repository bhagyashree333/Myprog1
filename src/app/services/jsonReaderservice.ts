import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

@Injectable()
export class getJSONService{
    constructor(private http: HttpClient){
        var obj;
    }
    public getJSON(){
        return this.http.get("./assets/mydata.json");
    }
}