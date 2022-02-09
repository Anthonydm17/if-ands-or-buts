const prompt = require("prompt-sync")();

let bill1 = Number(prompt("Enter the total that you paid: "));
let bill2 = Number(prompt("Enter the total person two paid: "));
let bill3 = Number(prompt("Enter the total person three paid: "));


// b1- b2>b3 & b2<b3
if (bill1 > bill2 && bill1 > bill3 && bill2 > bill3){
    let result = ((bill1 - bill2)/2);
    console.log("Friend 2 owes friend 1: $" + result)
    let result2 = ((bill1 - result) - bill3);
    console.log("Friend 3 owes friend 1: $" + result2)
}
else if (bill1 > bill2 && bill1 > bill3 && bill2 < bill3){
    let result = ((bill1 - bill3)/2);
    console.log("Friend 2 owes friend 1: $" + result)
    let result2 = ((bill1 - result) - bill2);
    console.log("Friend 3 owes friend 1: $" + result2)
}
// b2
else if (bill2 > bill1 && bill2 > bill3 && bill1 > bill3){
    let result = ((bill2 - bill1)/2);
    console.log("Friend 1 owes friend 2: $" + result)
    let result2 = ((bill2 - result) - bill3);
    console.log("Friend 3 owes friend 2: $" + result2)
}
else if (bill2 > bill1 && bill2 > bill3 && bill1 < bill3){
    let result = ((bill2 - bill1)/2);
    console.log("Friend 1 owes friend 2: $" + result)
    let result2 = ((bill2 - result) - bill3);
    console.log("Friend 3 owes friend 2: $" + result2)
}
// b3
else if (bill3 > bill1 && bill3 > bill2 && bill1 > bill2){
    let result = ((bill3 - bill1)/2);
    console.log("Friend 1 owes friend 2: $" + result)
    let result2 = ((bill3 - result) - bill2);
    console.log("Friend 3 owes friend 2: $" + result2)
}
else if (bill3 > bill1 && bill3 > bill2 && bill2 > bill1){
    let result = ((bill3 - bill2)/2);
    console.log("Friend 2 owes friend 3: $" + result)
    let result2 = ((bill3 - result) - bill1);
    console.log("Friend 1 owes friend 3: $" + result2)
}