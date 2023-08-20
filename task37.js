// Using the parseInt function - it takes a string and returns an integer. (Making sure you're dealing with integers, not strings, for example)

function convertToInteger(str) {
  return parseInt(str);
}

console.log(convertToInteger("56"));

//Using the parseInt function with a radix

function convertingToInteger(str) {
  return parseInt(str, 2); // Here we pass in the str, but also the number 2, so that the computer knows it is a binary number.
}

console.log(convertToInteger("10011"));
