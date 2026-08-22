"use strict";
// Without generics we have to make function 
function printId(obj) {
    console.log(obj.id);
}
printId({
    id: 101,
    name: "Alex"
});
