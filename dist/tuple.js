"use strict";
let user5 = ["Rohan", 25];
console.log(user5);
// Array
let numbers = [1, 2, 3, 4, 5];
// Tuple  => Fixed length and fixed type
let employees = ["Alex", 28000, true];
console.log(employees[0]);
let [username2, salary, isLogin] = employees;
console.log(salary);
// Tuple in function
function getUser() {
    return ["Pony", 24];
}
console.log(getUser());
