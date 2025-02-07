function print():void{
    console.log("hello word");
    
}print();

console.log("--------------||..variables types..||--------------");

// Explicit type example
let a:boolean=true;
let b:number=4;
let c:string="aishu";

console.log(a+ " "+ b +" "+c);

// Implicit type example
let a1=5;
let b1=false;
let c1="binu";

console.log(a1+ " "+ b1 +" "+c1);

// special types = any (it will store all types of data)

let z:any=123;
z="aishu";
console.log(z);




