// Intersection => Combine the value

// type Person2 = {
//     username: string
// }

// type Emp2 = {
//     salary: number
// }

// type Staff2 = Person2 & Emp2



// Combine with the help of & operator

// type User = {
//     username: string
// }

// type Admin = {
//     permission: string[]
// }

// type AdminUser = User & Admin

// let admin: AdminUser = {
//     username : "Alex",
//     permission : ["read","write"]
// }

// console.log(admin);



// Interface 


interface Person3 {
    username: string
}

interface Emp3 {
   salary: number
}

type Staff3 = Person3 & Emp3

let worker3 : Staff3 = {
    username: "Alex",
    salary: 40000
}
console.log(worker3);