// Manipulating complex objects:
// A javascript object is a way to store flexible data. You can store strings, numbers, arrays, even other objects.

// myMusic is an array. In this instance it stores an object withc strings, numbers and another array.
let myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  }, //comma needed after each element in an array.

  // Below is the secont element of the myMusic array, also an object that stores so called flexible data. Strings, numbers, and arrays.
  {
    artist: "Beau Carnes",
    title: "Cereal Man",
    release_year: 2003,
    formats: ["YouTube"],
  },
];

// Each object holds data and a property to go with that specific data. This is called the key value format, very similar to JSON.
