const prompt = require("prompt-sync")();
const pincode = "1234"

let pin = prompt("Please enter your pin code: ")

if (pin === pincode){
    console.log("You have successfully entered your pin!")
}
else (
    console.log("The pin you have entered is incorrect!")
)