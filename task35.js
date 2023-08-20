// Generate random fractions

function randomFraction() {
  return Math.random(); //this could be a number betwen 0 and 0,999....(cannot be 1)
}

console.log(randomFraction());

// Generate random whole numbers

//Example 1:

let randomNumber0and19 = Math.floor(Math.random() * 20); //Math.floor rounds downt to nearest whole number.

//Example 2:

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());
console.log(randomNumber0and19);
