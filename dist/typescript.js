"use strict";
const inputField = document.getElementById("username");
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    console.log(inputField.value);
    if (value.trim() === "") {
        alert("Please Enter a Name");
    }
    else {
        console.log(value);
    }
});
