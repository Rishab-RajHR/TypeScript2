// interface User45 {
//     name: string;
//     email: string;
//     age: number
// }

// let user67:User45 = {
//    name: "Alex",
//    email: "alex12@gmail.com",
//    age: 34
// }


// console.log(user67);



// type User47{
//      name: string;
//      email: string;
//      age: number
// }

// let user900:User47 = {
//     name:"Alex",
//     email:'alex12@gmail.com',
//     age:30
// }

// console.log(user900);



interface User48 {
    readonly id: number,
    name: string;
    age?: number
}

// function printUser2(user66:User48): void{
//     console.log(user66.name);
//     console.log(user66.age);
// }

// printUser2({
//     name: "Alex",
//     age: 34
// })

const user24:User48 = {
    id:1,
    name:"Alex"
}
console.log(user24);