"use strict";
// getter and setter is used for fetching private values
// class User22{
//    public name:string = "";
// }
// const user33 = new User22();
// user33.name = "Alex";
// console.log(user33.name);
// Getter Method
// class User22{
//     private _name = "Alex";
//     get name(){
//         return this._name
//     }
// }
// const user6 = new User22();
// console.log(user6.name);
// Setter Method
class User22 {
    _name = "";
    set name(value) {
        if (value.length < 3) {
            console.log("Name Must be atleast 3 characters");
            return;
        }
        ;
        this._name = value;
    }
    get name() {
        return this._name;
    }
}
const user6 = new User22();
user6.name = "Tovino";
console.log(user6.name);
