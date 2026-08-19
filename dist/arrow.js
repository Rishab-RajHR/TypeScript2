"use strict";
// => 
// function greet(){
//    console.log("Hello");
// }
// const greet = () => {
//     console.log("Hello");
// }
// greet();
// Arrow Function with Parameters
// const greet = (name:string)=>{
//     console.log('Hello', name);
// }
// greet("Mohit");
// Arrow Function with parameter and return type
// const add31 = (
//     a:number,
//     b:number
// ) : number => {
//     return a+b;
// }
// console.log(add31(10,20));
// Short syntax of arrow function
// const square2 = (num: number)=> num*num;
// console.log(square2(10));
// Double the array
// let nums = [1, 2, 3]
// let double = nums.map(
//     num => num*2
// )
// console.log(double);
// Filter the number greater than 2
let nums = [1, 2, 3];
let double = nums.filter(num => num > 2);
console.log(double);
