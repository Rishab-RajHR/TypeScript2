// Call Signatures in TypeScript

// type FunctionName = {
//     (
//         parameter:type
//     ):Return Type;
// }


// function starts with small letter and type starts with capital letter

// type Multiple = {
//     (
//         x:number,
//         y:number
//     ): number;
// }

// let multiplyNumber : Multiple = (a,b)=>{
//     return a*b;
// }
// console.log(multiplyNumber(10,5));



// With the help of interface

// interface Multiple {
//    (
//       x:number,
//       y:number
//    ): number;
// }

// let multiplyNumber : Multiple = (a,b) => {
//     return a*b;
// }

// console.log(multiplyNumber(10,5));




interface LoginFunction{
    (
        email: string,
        password: string
    ): boolean;
}

let login:LoginFunction = 
(email,password)=>{
    return true;
}

console.log(login("alex12@gmail.com","1234"));