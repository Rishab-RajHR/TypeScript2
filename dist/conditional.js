"use strict";
// type Result<T> = T extends string ? string : number
// type CheckString<T> = T extends string ? "Yes" : "No"
// type Result1 = CheckString<string>
// type Result2 = CheckString<number>
// const result3:Result1 = "Yes"
// console.log(result3)
// Role based checking the type
// type IsAdmin<T> = T extends "admin" ? true: false
// type User1 = IsAdmin<"admin">
// type User2 = IsAdmin<"user">
// interface Admin {
//     permission: string[]
// }
// interface Empl{
//    department: string
// }
// type UserType<T> = T extends Admin ? "Admin User" : "Emp User"
// type Result1 = UserType<Admin>
// Return type through function
// function getUser(){
//    return{
//       name:"Alex",
//       age: 30
//   }
// }
// type GetUserType<T> = T extends (...args: any[]) => infer R ? R : never
// type User2 = GetUserType< typeof getUser>;
