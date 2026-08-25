"use strict";
// Less Type Error and Improves Readability
// enum UserProfile{
//    ADMIN="Admin",
//    USER="User",
//    MANAGER="Manager"
// }
// const role = UserProfile.USER;
// console.log(role);
// Type Alias
// type User21 = {
//     name: string,
//     age: number
// }
// const user0: User21 = {
//     name: "Tovino",
//     age: 30
// }
// console.log(user0);
// Partial<T>
// interface User45 {
//    name: string;
//    email: string
// }
// type UpdatedUser2 = Partial<User>;
// const user62: UpdatedUser2 = {
//     name: "Alex"
// }
// console.log(user62.name);
// Pick
// interface User45 {
//     id: number;
//     name: string;
//     email: string
// }
// type UserInfo = Pick<User45, "name" | "email">
// const user39 : UserInfo = {
//     name : "Basil",
//     email: "basil12@gmail.com"
// }
// console.log(user39);
// Omit Method
// interface User45 {
//    id: number;
//    name: string;
//    email: string
// }
// type UserWithoutId = Omit<User45, "id">
// const user38 : UserWithoutId = {
//       name: "Alex",
//       email: "alex12@gmail.com"
// }
// console.log(user38);
// Readonly
// interface User45{
//    id: number,
//    name: string,
//    email: string
// }
// type ReadOnlyUser = Readonly<User45>;
// const user89: ReadOnlyUser = {
//     id: 1,
//     name: "Alex",
//     email: "al12@gmail.com"
// }
// console.log(user89);
