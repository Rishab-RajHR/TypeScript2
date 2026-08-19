"use strict";
// Giving structure to function
// let add2 : (
//     a:number,
//     b:number
// ) => number
// function greet6(username: string){
//     console.log("Hello", username);
// }
// greet6("Lampur")
// function add4(a: number, b: number){
//    console.log(a+b);
// }
// add4(10,20);
// function multiply8(
//     a:number,
//     b:number
// ):number {
//     return a*b;
// }
// console.log(multiply8(10,20));
// void returns nothing
// Function type expression 
// let subtract : (
//    x: number,
//    y: number
// )  => number
// subtract = (a,b) => {
//     return a-b
// }
// console.log(subtract(20,5));
// Function type with callback
// function processData(
//     callback:(
//        value: number
//     ) => void
// ){
//     callback(100)
// }
// processData((num)=>{
//     console.log(num);
// })
function calculate(a, b, operator) {
    return operator(a, b);
}
let result22 = calculate(10, 20, (x, y) => x + y);
console.log(result22);
