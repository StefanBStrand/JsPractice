//Objects in javascript
// Objects are similar to arrays, but instead of using indexes to access data, we use properties (and values)

let ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything"],
  "my shoe": "Dolce Gabbana",
}; //semicolon after closing curly bracket.

//Poperties of objects are everything BEFORE the colon:. Values of properties come after the colon.
//Objects can have properties of any data type, strings, numbers, arrays, and so on.

// Two main ways of accessing object properties. First, Dot notation:

let nameValue = ourDog.name; //apparently quotes not needed when accessing properties with dot notation? Error with them I think?
console.log(nameValue);

// Second way of accessing properties in objects, [bracket notation]: Brackets can be used any time,
// but is required when there is a space in the property. e.g

let legsValue = ourDog["legs"];
console.log(legsValue);

let shoeValue = ourDog["my shoe"];
console.log(shoeValue);
