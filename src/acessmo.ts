// class User54{
//    public name = "Alex"
//    private password = 12345;
//    protected role = "Admin";
//    showPass(){
//       return this.password;
//    }
// }
// class Admin extends User54 {
//     getRole() {
//         return this.role;
//     }
      
// }
// const user9 = new User54();
// console.log(user9.name)
// console.log(user9.showPass());

// const admin = new Admin();
// console.log(admin.getRole());




// class User54{
//     readonly id = 1;
// }

// const user44 = new User54();
// console.log(user44.id);




class User34{
    constructor(
        public name:string,
        private password:string,
        readonly id: number
    ){}
}

const user22 = new User34(
    "Alex",
    "12344",
    1
)
console.log(user22.name);