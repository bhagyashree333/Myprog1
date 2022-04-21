import { Component } from "@angular/core";

@Component({
    selector:'template-demo',
    templateUrl:'./bkdatabinding.html'
})

export class TemplateReference{
    name:string="bk";
  //  fname:string;

    saveUsingEvent($event:any){
        this.name=$event.target.value;

    }
     
    saveUsingTemplateRef(element:HTMLInputElement){
        alert("save method using temp ref called");
        this.name=element.value;
    }

    saveUsingId(id:string){
        alert("save method using id called");
        console.log(document.getElementById(id));
       let element =document.getElementById(id)as HTMLInputElement;
       this.name=element.value;
    }

    employees:Array<{name:string,salary:number}>=new Array();
    show:boolean=false;
    add(name:string,salary:number)
    {
        this.employees.push({name,salary});
    }
    showEmployees()
    {
        this.show=true;
    }
}