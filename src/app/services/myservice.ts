import { Injectable } from "@angular/core";

@Injectable()
export class MyDataService{
    users:string[]=["vk","bk","jk"];
    getUsers()
    {
        return this.users;
    }
}