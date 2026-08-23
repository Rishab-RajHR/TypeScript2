import { company, greet8 } from "./user";
import { Employee2 } from "./employee";
import add from "./math";
import * as Utils from "./utils";

console.log(company);
console.log(greet8("Laxman"));

const emp = new Employee2("Basil");
emp.showInfo();

console.log(add(10,20));

console.log(Utils.PI);
console.log(Utils.Square2(4));