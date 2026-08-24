"use strict";
// const user23 = {
//    name: "Alex",
//    age: 24
// }
// const user25 = {
//     name: "Rohit",
//     age: 34
// }
class User42 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return "Welcome to NestJS";
    }
}
const user32 = new User42("Alex", 32);
const user35 = new User42("Tovino", 42);
console.log(user32);
console.log(user35);
console.log(user32.greet());
