//Accessing nested objects:

let myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

let gloveBoxContents = myStorage.car.inside["glove box"]; //Here, we chain together the dot and/or bracket notation.
// Bracket notation required in this case at the end because of the space in the parameter "glove box".

console.log(gloveBoxContents);

/*

1. myStorage is an object. It has a property called "car"
2. "car" is a property of myStorage, but also an object. Its value is another object with the properties "inside" and "outside"
3. "inside" is a property of the "car" object, but also an object.
4. "inside" (object) has 2 properties, glove box and passenger seat
5. "glove box" and "passenger seat" are both properties of the inside object
6. "outside" is another property of the car object. Outside is also an object.
7. "outside" (object) has a sinlge property called "trunk", with a string value "jack"
8. In total we have 4 objects: myStorage, car, inside and outside

*/

// Objects are collections of key-value pairs, where each key is a unique string (or symbol),
// that acts as an identifier for its corresponding value.

// You can store any type of data (primitive or complex - see notes further down) as the value in an objects's key-value pair,
// including numbers, strings, booleans, arrays, other objects and functions.
// Elements(values) in an object are accessed using their keys. E.g obj.key provides the value for this key.

// Objects are suitable for storing related data as properties, where each property represents a specific attribute of the object.
// Example:

let myObject = {
  name: "John",
  age: 30,
  isStudent: true,
  hobbies: ["reading", "gaming"],
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

//myObject contains several properties: name, age, hobbies and so on.
//Each of these properties represent a specific attribute of the object, e.g "name" represents the object's name.
//The object myObject stores related data as (named) properties, making it easier to work with structured data in JS.

/* 

- In summary, both arrays and objects are versatile data structures that can store different data types in JavaScript. 
- Arrays are used for ordered collections, while objects are used for storing related data with named properties. 
- The choice between using an array or an object depends on the nature of the data you need to represent and
  the operations you want to perform on that data.


*/

/* 

In programming languages, data types can be categorized into two main groups: Primitive data types and Complex data types
 -Primitive data types are the most basic data types in a programming language 
 -They represent single values that are immutable, which means their value cannot be changed after they are created. 

 In JS, primitive data types are: 
  - numbers
  - string 
  - boolean
  - undefined 
  - null
  - Symbol (represents a unique and immutable value used as an identifier for object properties)

  Complex data types:

   - Complex data types are made up of multiple values or sub-values and can hold a collection of values  
   - They can be mutable, meaning their values can be changed after they are created. 

 In JS, complex data types include: 
  - Objects: represents a collection of key-value pairs where each key is a string, or symbol, and each value can be 
   any data type, including other objects and functions.

  - Arrays: represents an ordered list of values, where each value can be of any data type, including other arrays and objects

  - Functions: represents a reusable block of code that can be called with arguments and can return a value. 


*/
