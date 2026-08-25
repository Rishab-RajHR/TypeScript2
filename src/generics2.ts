// function getString(value:string):string{
//      return value;
// }
// function getNumber(value:number):number{
//      return value;
// }
// function getBool(value:boolean):boolean{
//      return value;
// }



// Without Generics

// function getData(value:any):any{
//     return value
// }



// With Generics

// function getData1<T>(value:T):T{
//      return value
// }

// console.log(getData1<string>("Alex"));
// console.log(getData1<number>(123));
// console.log(getData1<boolean>(true));



// class Box<T>{
//     value: T;
//     constructor(value:T){
//         this.value = value
//     }
// }

// const box1 = new Box<string>("Hello");
// const box2 = new Box<number>(123);

// console.log(box1.value);
// console.log(box2.value);




// interface ApiRes<T>{
//     success: boolean;
//     data: T;
// }

// const res : ApiRes<string>={
//     success: true,
//     data:"User Created"
// }

// console.log(res);




// Generic Constraint

function getLength<T extends {length:number}>(value:T){
    return value.length;
}

console.log(getLength("NestJS"));
console.log(getLength([1,2,3]));
// console.log(getLength(100));   => We cannot calculate length of number


