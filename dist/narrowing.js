"use strict";
// Type Narrowing => There is no restrictions in data type
// let value7: string | number = "Alex"
// // value = "Mohit";
// // value = 100;
// console.log(value7.toUpperCase());
// Type Narrowing 
// let value7: string | number = "Alex"
// if(typeof value7 === "string"){
//    console.log(value7.toUpperCase());
// }else{
//     console.log(value7);
// }
// With the help of function
// function printVal(value: string | number){
//     if(typeof value === "string"){
//         console.log(value.toUpperCase());
//     } else {
//         console.log(value.toFixed(2));
//     }
// }
// printVal("Hello");
// printVal(123);
// Using In Operator in Narrowing
// type Admin = {
//     name: string,
//     permission: string[]
// }
// type User = {
//      name: string,
//      email: string
// }
// function getInfo(person: Admin | User){
//      if("permission" in person){
//         console.log('Admin User');
//      } else {
//         console.log('Normal User');
//      }
// }
// getInfo({
//     name:"Alex",
//     permission: ["create","delete"]
// })
// getInfo({
//    name: "Tovino",
//    email: "tovino12@gmail.com"
// })
// Instance of through class
class Dog {
    bark() {
        console.log("Dog is barking");
    }
}
class Cat {
    meow() {
        console.log("Cat is meowing");
    }
}
function makesound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
makesound(new Dog());
makesound(new Cat());
