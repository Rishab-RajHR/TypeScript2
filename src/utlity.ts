// type User23 = {
//     id: number,
//     name: string,
//     age: number,
//     salary: number
// }

// // Partial 

// type UpdatedUser = Partial<User23>

// const user11:UpdatedUser = {
//    name:"Laman"
// }
// console.log(user11);


// Pick (selected properties)

// type User23 = {
//     id: number,
//     name: string,
//     email: string,
//     age: number
// }

// type UserBasicInfo = Pick<User23, "name"|"email">;

// const user11:UserBasicInfo={
//     name: "Alex",
//     email: "alex12@gmail.com"
// }
// console.log(user11);



// Omit Property

type User11 = {
    id: number;
    name: string;
    email: string;
    password: string
}

type PublisUser = Omit<User11,"password">;

const user21:PublisUser={
    id:1,
    name:"Alex",
    email:"alex12@gmail.com"
}
console.log(user21);