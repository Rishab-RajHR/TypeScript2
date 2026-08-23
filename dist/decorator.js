"use strict";
// function Logger(target: Function){
//     console.log("Class Created");
//     console.log(target.name);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// @Logger
// class User37{
//    constructor(){
//       console.log("User Const");
//    }
// }
// const user11 = new User37()
// Method Decorator
// function LogMethod(
//     target:any,
//     propertyKey: string,
//     description: PropertyDescriptor
// ){
//     console.log(`Method: ${propertyKey}`);
// }
// class User76{
//     @LogMethod
//     login(){
//         console.log("Login");
//     }
// }
// Property Decorator
// function LogProperty(
//       target: any,
//       propertyKey: string
// ){
//     console.log(`Property: ${propertyKey}`);
// }
// class User90 { 
//     @LogProperty
//     name = "Alex"
// }
// Parameter Decorator
function LogParameter(target, methdName, parameterIndex) {
    console.log(`Parameter Index: ${parameterIndex}`);
}
class User45 {
    login(username) { }
}
__decorate([
    __param(0, LogParameter)
], User45.prototype, "login", null);
