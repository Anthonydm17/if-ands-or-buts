const prompt = require("prompt-sync")();

let bill1 = Number(prompt("Enter the total that you paid: "));
let bill2 = Number(prompt("Enter the total person two paid: "));
let bill3 = Number(prompt("Enter the total person three paid: "));

// instance 1+2
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
// instance 3+4
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
// instance 4+5 
else if (bill3 > bill1 && bill3 > bill2 && bill1 > bill2){
    let result = ((bill3 - bill1)/2);
    console.log("Friend 1 owes friend 3: $" + result)
    let result2 = ((bill3 - result) - bill2);
    console.log("Friend 2 owes friend 3: $" + result2)
}
else if (bill3 > bill1 && bill3 > bill2 && bill2 > bill1){
    let result = ((bill3 - bill2)/2);
    console.log("Friend 2 owes friend 3: $" + result)
    let result2 = ((bill3 - result) - bill1);
    console.log("Friend 1 owes friend 3: $" + result2)
}
// instance 6
else if (bill1 = bill2 = bill3){
    console.log("Nobody owes any money")
}
// instance 7
else if (bill1 = bill2 && bill2 > bill3){
    let result = (((bill1 - bill3) + bill3) / 2);
    console.log("friend 3 owes friend 1 and 2 each: $" + result)
}
// instance 8
else if (bill1 = bill3 && bill3 > bill2){
    let result = (((bill1 - bill2) + bill2) / 2);
    console.log("friend 2 owes friend 1 and 3 each: $" + result)
}
else if (bill3 = bill2 && bill2 > bill1){
    let result = (((bill3 - bill1) + bill1) / 2);
    console.log("friend 1 owes friend 2 and 3 each: $" + result)
}
