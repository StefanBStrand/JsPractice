// Accessing nested arrays: (arrays are ordered lists of values. Each value is called an element)
// Arrays are suitable for collections of similar items, such as a list of names, numbers, or any other data where order matters.

let myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

let secondTree = myPlants[1].list[1]; //Chaining togehter bracket and dot notations to get what we want.
console.log(secondTree);
