// Object Oriented Programming

// class User8{
//    name="Alex"
// }
// const user2=new User8();
// console.log(user2);


// Add Property in the class

// class User77{
//     name:string;
//     age:number
// }
// const user55 = new User77();
// user55.name = "Alex";
// user55.age = 34;

// console.log(user55);



// Contructor is used for object initialization

// class User55{
//    name: string;
//    age: number;

//    constructor (
//       name: string,
//       age: number
//    ){
//       this.name = name;
//       this.age = age
//    }
// }

// const user3 = new User55(
//     "Alex",
//     45
// )

// const user8 = new User55(
//    "Tovino",
//    43
// )

// console.log(user3);
// console.log(user8);



// Shortcut method for constructor


class User67 {
    constructor(
        public name:string,
        public age:number
    ){}
}

const user56 = new User67(
     "Poniyan",
     34
)
console.log(user56);