// Record collection (challenge)

let collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

//making a copy of the original for tests:

let collectionCopy = JSON.stringify(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] =
      value; /* Even if I now do not quite understand that this line can do what it does, because of the way it is
    written, I'll just have to learn that this line has dynamic capabilites that can both update existing properties but also create 
    new ones if the property does not already exist. For it to be dynamic, bracket notation has to be used. Dot 
    notation does not have the same capabilities. */
  }
  return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));
console.log(collection[5439].album);

/* In JS, both dot notation and bracket notation can be used to access properties of objects.
However, bracket notation provides more flexibility and dynamism compared to dot notation.  

Dynamic property names: 

One of the primary advantages of bracket notation is its ability to access 
properties dynamically using variables or expressions. With bracket notation, you can use a variable to specify the property 
name you want to access, making it useful when the property name is determined at runtime (by using functions or if statements, for instance)
to determine propertyName value at runtime, so to speak.
This is not possible with dot notation. 

Bracket notation can access property names with special characters or spaces.

Bracket notation allows you to use expressions as property names. 

Example: 

const prefix = "property";
const index = 1;

const myObj = {
  [prefix + index]: "Hello",
};

console.log(myObj); // Output: { "property1": "Hello" }

In summary, bracket notation in JavaScript offers more dynamism and versatility compared to dot notation. 
It allows you to access properties dynamically, handle special characters or spaces in property names, 
compute property names, and work with property names as strings, among other things. However, 
dot notation is still useful for accessing static properties with straightforward names and is generally more concise 
when you know the property name beforehand. 
Both notations have their place, and choosing one over the other depends on the specific requirements of your code.



*/
