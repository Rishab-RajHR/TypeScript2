// Define Username for the whole file as string

// type Username = string;
// type Age = number;

// let myname:Username = "Rohan"
// console.log(myname);

// let userAge: Age = 27;
// console.log(userAge);



// type alias with object

// type User = {
//     username:string,
//     age:number
// }

// let user1:User={
//     username:"Kalan",
//     age: 23
// }

// let user2:User={
//     username:"Raman",
//     age: 34
// }

// console.log(user1);
// console.log(user2)



// type alias with function

// type AddFunction = (
//    a:number,
//    b:number
// ) => number;

// let add2: AddFunction = (x,y) => {
//     return x + y
// }
// console.log(add2(10, 5));




// Union and intersection

// Union  => Can take both the values

type ID = string | number;
let userId:ID = 101;
userId = "MOHIT101"
console.log(userId);



// Intersection => combine the value

type Person = {
    username: string
}

type Emp = {
    salary: number
}

type Staff = Person & Emp

let worker:Staff = {
    username: "Tovino",
    salary: 5000
}
console.log(worker);
