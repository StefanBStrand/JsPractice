// Iterating odd and even numbers with a for loop

let ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

console.log(ourArray);

let myArray = [];

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

console.log(myArray);

//Counting backwards with a for loop (even numbers)

let thisArray = [];

for (let i = 10; i > 0; i -= 2) {
  thisArray.push(i);
}

console.log(thisArray);

//Counting backwards with a for loop (odd numbers)

let thatArray = [];

for (let i = 9; i > 0; i -= 2) {
  thatArray.push(i);
}

console.log(thatArray);
