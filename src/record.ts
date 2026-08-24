// Record<keys,valueType>

// type UserRole = {
//     admin: string;
//     User: string;
//     guest: string;
// }



// type UserRole = Record<"admin" | "user" | "guest", string >;

// const roles: UserRole = {
//     admin:"Full Access",
//     user:"Limited Access",
//     guest:"Read Only"
// }
// console.log(roles);



// Record with number

// type StudentMarks = Record< string, number >;

// const marks33: StudentMarks = {
//     Mohit: 98,
//     Rahul: 60,
//     Amit: 30
// }
// console.log(marks33);



// type User = {
//     name: string;
//     age: number
// }
// type Users = Record<string,User>;

// const users:Users = {
//      user1:{
//         name:'Alex',
//         age:34
//      },
//      user2:{
//         name:'Sham',
//         age:45
//      },
// }
// console.log(users)