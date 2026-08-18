// Optional and Default

// Optional Parameter

// function greet7(
//     name ?: string
// ){
//    console.log(name);
// }

// greet7("Puneeth");
// greet7()




// Default Parameter

function welcome(
    country : string,
    age ?: number,
    username:string = "Guest"
){
    console.log(`Hello ${username}`);
    console.log(age);
    console.log(country);
}
welcome("India",25,"Alex")

