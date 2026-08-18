let user5 : [string,number] = ["Rohan", 25]; 
console.log(user5);

// Array
let numbers: number[]=[1,2,3,4,5];

// Tuple  => Fixed length and fixed type
let employees: [string,number,boolean] = ["Alex",28000,true]
console.log(employees[0]);

let [username2,salary,isLogin] = employees;

console.log(salary);


// Tuple in function
 function getUser(): [string,number]{
     return["Pony",24]
 }
 console.log(getUser());