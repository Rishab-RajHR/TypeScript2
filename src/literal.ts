// Literal Type (One variable can hold specific value)

// let role : string;

// role = "Alex"

// console.log(role);



// type UserRole = "admin";

// let role: UserRole = "admin";
// console.log(role);



// type UserRole = "admin" | "user" | "guest";

// let role: UserRole = "user";

// console.log(role);



// Number Literal

// type DiceValue = 
//    |1
//    |2
//    |3
//    |4
//    |5
//    |6

// let dice: DiceValue = 4;
// console.log(dice);



// Boolean Literal

// let isVerified = true;
// isVerified = true;
// console.log(isVerified);



// Literal with function

function setTheme(
    theme: "light" | "dark"
){
    console.log(theme);
}
setTheme("dark")