// Bracket notation can also be used to access object properties using variables:

let testObj = {
  12: "Adam",
  14: "John",
  16: "Dwayne",
};

//Here we use variables to access the testObj properties:

let playerNumber = 16;
let player = testObj[playerNumber];
console.log(player);

//Updating object properties using dot.notation:

let myCar = {
  name: "audi",
  color: "red",
  engine: "big",
  brakes: "ceramic",
};

myCar.name = "Mercedes"; //here we use the dot.notation to update the object property name.

//adding new properties to an object can be done by using both bracket and dot notation:

myCar.tyres = "Michelin";
myCar["transmission"] = "automatic";

console.log(myCar.name);
console.log(myCar["transmission"]);

//Properties can be deleted using the delete keyword. Just type for example: delete myCar.tyres
