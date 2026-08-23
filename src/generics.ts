// Without generics we have to make function 

// function printString(value: string){
// }

// function printNumber(value: number){
// }


// With the help of Generics 

// function printValue<T>(value:T):T{
//     return value
// }
// console.log(printValue("Gurman"));
// console.log(printValue(100));
// console.log(printValue(true));



// function getData<T>(data:T):T{
//      return data;
// }
// let userName32 = getData<string>("Alex")
// let age23 = getData<number>(12)

// console.log(userName32);
// console.log(age23);





// Array function with generics

// function getFirstElement<T>(
//     arr:T[]
// ):T{
//     return arr[0]
// }

// console.log(getFirstElement([
//      "React",
//      "Angular",
//      "NextJS"
// ]));




// Generic with Interface

// interface ApiResponse<T>{
//     success: boolean;
//     data: T;
// }

// const response1: ApiResponse<string>={
//     success:true,
//     data:"User Found"
// }

// const response2: ApiResponse<{
//     name: string;
//     age: number
// }>={
//     success:true,
//     data:{
//        name:'Alex',
//        age: 23
//     }
// }

// console.log(response1);
// console.log(response2);



// Generic without constraint

// function printData<T>(data:T){
//     return data.length;
// }
// console.log(printData(101));


// Generic constraint

// function getLength<
//    T extends {length:number}>(item:T){
//       return item.length
//    }
// console.log(getLength([1,2,4]));



// Constraint with interface

// interface HasId{
//     id: number,
// }

// function printId<
//      T extends HasId>(obj: T){
//          console.log(obj.id)
//      }

// printId({
//     id:101,
//     name:"Alex"
// })