// Never Data Type  => Returns nothing


// function throwError(message: string): never{
//     throw new Error(message);
// }
// throwError("404 Error")



// This function returns nothing and it never stops execution

// function inifinityLoop():never {
//    while(true){
//        console.log("Running...");
//    }
// }
// inifinityLoop();



// void => does not return anything

function greet2():void{
    console.log("Hello");   // Hello
}
const result2 = greet2();
console.log(result2);   // undefined
