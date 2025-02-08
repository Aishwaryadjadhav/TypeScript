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

// ----------------------typescript arrays-----------------     

let arr:number[]=[1,2,3,4];
arr.pop();
console.log(arr);

let arr1=[5,6,7,8,9];
arr1.push(10);
console.log(arr1);

//iterate using for loop

for(let i=0;i<arr1.length;i++){
    console.log("element : "+arr1[i]);  
}

//iterate using foreach loop

arr1.forEach((element)=>{
    console.log("element : "+element);
})

let names:string[]=[];
names.push("pari");
names.push("aaru");
names.push("shivu");

console.log(names);

// ----------------------typescript tuple-----------------  

let tuple1:[number, boolean, string];
tuple1=[9, false, "abhinav"]
console.log(tuple1);
tuple1.push(6);
tuple1.push(false);
tuple1.push("vaishu")
console.log(tuple1);

let tuple2=[false,4,"virat"]
tuple2.push(true);
tuple2.push("anushka");
tuple2.push(7);
console.log(tuple2);

// ----------------------typescript objects-----------------

let car :{type:string, model:string, year: number}={
    type:"suv",
    model:"fortuner",
    year: 2009 
};
console.log(car);

let car1={type:"thar", model:"mahindra", year:2015};
console.log(car1);
