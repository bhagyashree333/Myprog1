import { Component } from "@angular/core";


@Component({
    selector: 'login-demo',
    templateUrl: './login.html'
})

export class LoginPage {

    userId: string = "userid";
    password: string = "password";
    newuserid!: string;
    newpassword!: string;
    errormsg=false;

    
   validation($event:any)
   {
   
     this.newuserid=$event.target['newuserid'].value;
     this.newpassword=$event.target['newpassword'].value;
     console.log(this.newuserid);
      if(this.newuserid.length<4 || this.newuserid.length >10 )
      {
          console.log("error length");
        this.errormsg=true;
      }
      else{
          this.errormsg=false;
      }
      return false; 
     
   }
   passwordCheck(){
       
   }

}
  


    

