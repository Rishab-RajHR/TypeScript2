"use strict";
// const msgPromise: Promise<string> =
//     new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Welcome to MD")
//         }, 2000)
//     })
// msgPromise.then((message)=>{
//     console.log(message);
// })
// const agePromise: Promise<number> = 
//    new Promise((resolve)=>{
//        setTimeout(()=>{
//           resolve(30)
//        },2000)
//    })
// agePromise.then((message)=>{
//     console.log(message);
// })
// Promise with Async Await
// function getUser1(): Promise<string>{
//      return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Alex')
//         },1000)
//      })
// }
// async function showUser(){
//      const user44 = await getUser1();
//      console.log(user44);
// }
// showUser();
// Promise with Generic type
// interface User73{
//     id: number;
//     name: string;
// }
// function getUser4(): Promise<User73>{
//     return Promise.resolve({
//         id: 1,
//         name: "Alex"
//     })
// }
// getUser4().then((user9)=>{
//     console.log(user9.name);
// })
// Error handling
function login2() {
    return new Promise((resolve, reject) => {
        const success = false;
        if (success) {
            resolve("Login Fine");
        }
        else {
            reject("Invalid Username");
        }
    });
}
login2().then((msg) => {
    console.log(msg);
}).catch((error) => {
    console.log(error);
});
