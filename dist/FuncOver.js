"use strict";
// Function Overloading => Function with same name different parameters (using different signatures)
// function add21(
//    a:number,
//    b:number
// ): number;
// function add21(
//    a:string,
//    b:string
// ):string
// Function with any data type
// function add21(
//     a:any,
//     b:any
// ){
//    return a+b;
// }
// console.log(add21(10,20));
// console.log(add21("Hello ","World"));
// Function with void type
// function show12(
//    value: string
// ):void
// function show12(
//     value: number
// ):void
// function show1(
//    value:any
// ){
//    console.log(value);
// }
// function search(
//     id: number
// ):string
// function search(
//    username: string
// ): string
function search(value) {
    if (typeof value === "number") {
        return `Search by id: ${value}`;
    }
    else {
        return `Search by value: ${value}`;
    }
}
console.log(search(101));
console.log(search("Alex"));
