"use strict";
// Function reusable block of code
// function greet(){
//     console.log("Welcome to TS");
// }
// greet();
// function with parameter
// function greet(username:string){
//     console.log("Welcome to TS",username);
// }
// greet("Pony")
// function with  multiple parameter
// function add(a:number,b:number){
//     console.log(a+b);
// }
// add(10,20)
// Function with return type
// function add(a:number,b:number):number{
//      return a+b;
// }
// let result3 = add(10,20);
// console.log(result3);
// Function with type checking
// function test():number{
//     return 100;
// }
// let result5 = test();
// console.log(result5);
// Optional and Default Parameter
// Optional parameter
// function greetUser(
//   age: number,
//   username ?: string
// ){
//     console.log(username);
// }
// greetUser("Alex")
// Default parameter
// function  greetUser22(
//     username : string = "Guest"
// ){
//     console.log(username);
// }
// greetUser22('Alex')
// greetUser22()
// Arrow Function
const addNumber = (a, b) => {
    return a + b;
};
let result5 = addNumber(10, 20);
console.log(result5);
// Arrow function in one line
const square = (num) => num * num;
console.log(square(3));
