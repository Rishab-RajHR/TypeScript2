// interface User31{
//     id: number,
//     name: string,
//     email: string
// }

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


import axios from "axios";

interface Products{
    id: number;
    title: string;
    price: string
}

async function getProduct(){
     const res = await axios.get<Products[]>("https://fakestoreapi.com/products")

     console.log(res.data);
}
getProduct()