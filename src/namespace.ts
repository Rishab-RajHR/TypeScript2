
// namespace App{
//     export function greet4(){
//          console.log("Welcome to Alex");
//     }
// }
// App.greet4();


// Multiple namespace

// namespace User57{
//     export const company = "Alex Pandian"
//     export function login(){
//         console.log("User Logged In");
//     }
//     export class Emp7{
//        constructor(
//           public name:string
//        ){}
//        show(){
//           console.log(this.name);
//        }
//     }
// }

// console.log(User57.company);
// User57.login();

// const emp3 = new User57.Emp7("Nivin");
// emp3.show();



// Nested namespace

namespace Company {
    export namespace HR {
        export function hire(){
            console.log("Hiring Emp");
        }
    }
}
Company.HR.hire();