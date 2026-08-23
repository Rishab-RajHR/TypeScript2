"use strict";
// We cannot access object with static properties
// class MathUtils{
//     static appName = 'Calculator'
// }
// console.log(MathUtils.appName);
// class Company {
//     static companyName = "Alex Pandian"
// }
// console.log(Company.companyName);
// Static Methods
// class MathUtils {
//     static add3(
//         a:number,
//         b:number
//     ){
//          return a+b;
//     }
// }
// console.log(MathUtils.add3(10,5));
// Static vs Instance Members
class User77 {
    static appName = "Alex Pandian";
    name;
    constructor(name) {
        this.name = name;
    }
}
const user55 = new User77("Ram");
console.log(user55);
console.log(User77.appName);
