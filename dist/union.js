"use strict";
// Union accepts all the value
let id3;
id3 = 101;
id3 = "mohitid";
// id3 = true
console.log(id3);
// Union with function
function printId(id) {
    console.log(id);
}
printId("Alex");
// Type Narrowing with union type
function printData(data) {
    if (typeof data === "string") {
        console.log(data.toUpperCase());
    }
    else {
        console.log(data);
    }
}
printData("Alex Pandian");
