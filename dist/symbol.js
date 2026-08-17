"use strict";
// Symbol is unique identifier
// let id1 = Symbol();
// let id2 = Symbol();
// console.log(id1 === id2);
// To avoid property name conflict we use symbols
// let user = {
//     id: 1,
//     id: 2
// }
// With the help of symbol no conflict
// let id1 = Symbol("id");
// let id2 = Symbol("id");
// let user = {
//     [id1]:1,
//     [id2]:2
// }
// console.log(user[id1]);
// With the Explicit TypeScript
// let token : symbol = Symbol("token")
let obj = {
    id: 1
};
const id = Symbol("id");
let opj = {
    [id]: 1
};
// console.log("ID: "+ Symbol());  => This is not recomended
// console.log(Symbol("id").toString());   // This is correct
