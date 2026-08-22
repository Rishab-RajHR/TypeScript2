// Public , Private and Protected



// Public => Can be accessed from anywhere
// class User33{
//    public name: string;
//    constructor(name:string){
//       this.name = name
//    }
// }

// const user6 = new User33("Alex");
// console.log(user6.name);


// Private => Can be accessed from  class only

// class BankAcc{
//     private balance: number;
//     constructor(balance: number){
//          this.balance = balance
//     }
//     showBalance(){
//         console.log(this.balance);
//     }
// }
// const account = new BankAcc(5000);
// account.showBalance();



class Emp34{
    protected salary:number;

    constructor(salary:number){
       this.salary = salary
    }
}

class Developer extends Emp34 {
     showSalary(){
       console.log(this.salary);
     }
}

const dev = new Developer(5000);
dev.showSalary()