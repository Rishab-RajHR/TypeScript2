// Abstract class is like the blueprint

// To provide the functionality

// abstract class Animal{
//      eat(){
//        console.log("Animal is eating")
//      }
// }

// class Dog3 extends Animal {}

// const dog4 = new Dog3();
// dog4.eat()






// abstract class Animal {
//     abstract makeSound(): void;
// }

// class Dog9 extends Animal {
//     makeSound(){
//          console.log("Woof Woof");
//     }
// }

// const dog4 = new Dog9()
// dog4.makeSound()




// Abstract class with property

abstract class Emp3{
   constructor(
      public name:string
   ){}
   abstract calCuSalary():number
}

class Dev3 extends Emp3{
    calCuSalary(): number {
         return 50000;
    }
}

const dev4 = new Dev3("Alex");
console.log(dev4.calCuSalary());



