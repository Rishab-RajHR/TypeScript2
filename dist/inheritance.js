"use strict";
// class Animal {
//    name: string;
//    constructor(name:string){
//        this.name = name
//    }
//    eat(){
//       console.log(`${this.name} is Eating`);
//    }
// }
// class Dog2 extends Animal{
//       bark(){
//          console.log("Woff Woff");
//       }
// }
// const dog = new Dog2("Faly");
// dog.eat();
// dog.bark();
// Contructor Inheritance
// class Animal{
//     constructor(
//         public name:string
//     ){}
// }
// class Dog2 extends Animal {
//     constructor(
//         name: string,
//         public breed: string
//     ){
//         super(name)
//     }
// }
// const dog = new Dog2(
//      "Tommy",
//      "Alex"
// )
// console.log(dog);
// Protected Method
class Emp5 {
    salary;
    constructor(salary) {
        this.salary = salary;
    }
}
class Dev extends Emp5 {
    showSalary() {
        console.log(this.salary);
    }
}
const dev2 = new Dev(34455);
dev2.showSalary();
