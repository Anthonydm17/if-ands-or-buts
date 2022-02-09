const prompt = require("prompt-sync")();

let bill1 = Number(prompt("Enter the total that you paid: "));
let bill2 = Number(prompt("Enter the total your friend paid: "));


if (bill1 > bill2){
    let result = ((bill1 - bill2)/2);
    console.log("Your friend owes you: $" + result)
}
else if (bill2 > bill1){
    let result2 = ((bill2 - bill1)/2);
    console.log("you owe your friend: $" + result2)
}else if (bill1 = bill2){
    console.log("You are even, no money is owed.")
}
