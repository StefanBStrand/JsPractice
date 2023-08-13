// iterate through an array with a for loop. It is common in JS to iterate through the contents of an array.

let ourArr = [9, 10, 11, 12];
let ourTotal = 0;

for (let i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

console.log(ourTotal);
