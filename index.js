function print() {
    console.log("hello word");
}
print();
console.log("--------------||..variables types..||--------------");
// Explicit type example
var a = true;
var b = 4;
var c = "aishu";
console.log(a + " " + b + " " + c);
// Implicit type example
var a1 = 5;
var b1 = false;
var c1 = "binu";
console.log(a1 + " " + b1 + " " + c1);
// special types = any (it will store all types of data)
var z = 123;
z = "aishu";
console.log(z);
// ----------------------typescript arrays-----------------     
console.log("// ----------------------typescript arrays-----------------");
var arr = [1, 2, 3, 4];
// arr.pop();
console.log(arr);
var arr1 = [5, 6, 7, 8, 9];
arr1.push(10);
console.log(arr1);
//iterate using for loop
for (var i = 0; i < arr1.length; i++) {
    console.log("element : " + arr1[i]);
}
//iterate using foreach loop
arr1.forEach(function (element) {
    console.log("element : " + element);
});
var names = [];
names.push("pari");
names.push("aaru");
names.push("shivu");
console.log(names);
// ----------------------typescript tuple-----------------  
var tuple1;
tuple1 = [9, false, "abhinav"];
console.log(tuple1);
tuple1.push(6);
tuple1.push(false);
tuple1.push("vaishu");
console.log(tuple1);
var tuple2 = [false, 4, "virat"];
tuple2.push(true);
tuple2.push("anushka");
tuple2.push(7);
console.log(tuple2);
// ----------------------typescript objects-----------------
var car = {
    type: "suv",
    model: "fortuner",
    year: 2009
};
console.log(car);
var car1 = { type: "thar", model: "mahindra", year: 2015 };
console.log(car1);
//---------------------functions----------------------
function print1() {
    console.log("hello typescript");
}
print1();
function add(a, b) {
    return a + b;
}
console.log(add(4, 5));
function printString(name, age) {
    console.log(name, age);
}
printString("virat", 35);
// -----------Arrow Function Example------------
var add1 = function (a, b) { return a + b; };
console.log(add(5, 3));
//----------------------typescript classes---------------------------
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
// Creating an object
var person1 = new Person("Aishwarya", 25);
person1.greet();
// Output: Hello, my name is Aishwarya.
