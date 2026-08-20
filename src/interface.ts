// Interface is like defining the structure of function

// Same Interface can be used mutliple times

interface Employee {
   readonly id: number,
   userName: string,
   salary?: number   // Optional
}

let employee1:Employee = {
    id: 123,
    userName: "Alex",
    salary: 45000
}

let employee2:Employee = {
    id: 234,
    userName: "Tovino",
    salary: 80000
}

console.log(employee1.userName);
console.log(employee2.userName);

