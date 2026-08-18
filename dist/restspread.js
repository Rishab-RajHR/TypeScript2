"use strict";
// Rest Operator
// function addNumber3(...num:number[]){
//     console.log(num);
// }
// addNumber3(10,20,30,40)
// function total1(
//     ...prices:number[]
// ):number
// {
//     return prices.reduce(
//         (sum,price) => sum + price,
//         0
//     )
// }
// console.log(total1(100,200,300));
// Spread Operator => Expand the Value
// let num1 = [1,2,3];
// let num2 = [...num1];
// let num1 = [1,2,3];
// let num2 = [6,7,8];
// let result9 = [...num1, ...num2];
// console.log(result9);
// Spread operator with object
let user4 = {
    name: 'Alex',
    age: 24
};
let updatedUser = {
    ...user4,
    city: 'Delhi'
};
console.log(updatedUser);
