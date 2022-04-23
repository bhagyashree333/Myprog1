//let

const { Observable } = require("rxjs");

function somefn(data){
    console.log("data received by normal function fn"+data);

}
let i=100;
let someObservable=new Observable((subscriber)=>{
    //setInterval(()=>{subscriber.next(i++)},2000)
    setInterval(()=>{(i>104)
    subscriber.complete();
    subscriber.next(i++);
    if(i>104)
    subscriber.error("error occured");
},
2000)
});

someObservable.subscribe((data)=>{
    console.log("data received by subscriber"+data);
})

let myObserver={
    //next:function(data){console.log(data)}

    next:function(data){
        console.log("observer nect method called");
        console.log(data)
    },
        complete:function(){
            console.log("observable has completed sending data");
        },
        error:function(err){
            console.log("Errror has occured" +err)
        }
    }
 
   

someObservable.subscribe(myObserver);
somefn(i);