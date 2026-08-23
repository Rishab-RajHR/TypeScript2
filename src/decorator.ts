// function Logger(target: Function){
//     console.log("Class Created");
//     console.log(target.name);
// }

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

function LogParameter(
    target: any,
    methdName: string,
    parameterIndex:number
){
   console.log(`Parameter Index: ${parameterIndex}`);
}

class User45{
    login(
       @LogParameter
       username:string
    ){}
}