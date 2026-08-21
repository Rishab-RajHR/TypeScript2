// Mapped Type 

// type User = {
//     name: string;
//     age: number
// }

// type UserOptional = {
//     name?:string;
//     age?:number
// }


// Optional 

// type User = {
//     name: string;
//     age: number
// }

// type OptionalUser = {
//     [key in keyof User]?: User[key]
// }

// const user11:OptionalUser={
//      name:"Alex"
// }



// Readonly

// type User = {
//    name : string,
//    age: number
// }

// type ReadonlyUser = {
//     readonly [key in keyof User]: User[key]
// }

// const user1: ReadonlyUser = {
//     name: "Alex",
//     age: 23
// }

// user1.name = "Alex"



// Change value in properties


type User = {
    name: string,
    age: number
}

type BooleanUser = {
    [key in keyof User]: boolean
}

const userStatus: BooleanUser = {
    name: true,
    age: true
}
console.log(userStatus.name);
console.log(userStatus.age);