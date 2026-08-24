"use strict";
// interface User31{
//     id: number,
//     name: string,
//     email: string
// }
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// async function getUser5(): Promise<User[]>{
//      const res = await fetch("https://jsonplaceholder.typicode.com/users");
//      const users58: User31[] = await res.json();
//      console.log(users58);
//      users58.forEach((user58) => {
//         console.log(users58.name);
//      })
// }
// getUser5()
// async function getUser23() {
//      try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const users58: User31[] = await res.json();
//      console.log(users58);
//      } catch (error) {
//         console.log("Something went wrong");
//      }
// }
const axios_1 = __importDefault(require("axios"));
async function getProduct() {
    const res = await axios_1.default.get("https://fakestoreapi.com/products");
    console.log(res.data);
}
getProduct();
