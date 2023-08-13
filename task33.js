// Iterate with do... while loops. A do while loop will run the code within the loop at least one time before checking the condition.
// Review: A while loop first checks the condition within the loop before it runs any code within the loop.

let myArray = [];
let i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);

console.log(i, myArray);
