// Union accepts all the value

let id3: string | number;
id3 = 101;
id3 = "mohitid";
// id3 = true
console.log(id3);



// Union with function

function printId(
    id:string | number
){
   console.log(id);
}
printId("Alex")



// Type Narrowing with union type

function printData(
   data: string | number
){
   if(typeof data === "string"){
      console.log(data.toUpperCase());
   } else {
      console.log(data);
   }
}
printData("Alex Pandian")