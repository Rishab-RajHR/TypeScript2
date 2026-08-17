"use strict";
// Any vs Unknown
// Any Type  => Value can be changed 
let data1 = "Tovino";
data1 = 123;
data1 = true;
console.log(data1);
let value = "Hello";
// value = 122;  // value can be any type
console.log(value.toUpperCase());
// Unknown Type  => does typechecking
let value1 = "TS";
if (typeof value1 === "string") {
    console.log(value1.toUpperCase());
}
