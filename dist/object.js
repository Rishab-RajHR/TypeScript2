"use strict";
// let user99: {
//    userName: string,
//    age: number
// }
// user99 = {
//   userName: "Alex",
//   age: 28
// }
// console.log(user99.userName);
// console.log(user99.age);
// Here we have other example
// let products = {
//     productName: "Laptop",
//     price: 5000
// }
// products.price = 45000;
// console.log(products.productName);
// console.log(products.price);
// Optional and readonly product
// let products:{
//     readonly productName: string,
//     price?: number
// }
// products = {
//     productName:"Laptop",
//     price: 5000
// }
// products.price = 4500;
// console.log(products.productName);
// console.log(products.price);
// Nested Object
let products = {
    productName: "Laptop",
    price: 5000,
    address: {
        city: "Delhi",
        pincode: 110056
    }
};
console.log(products.address.pincode);
