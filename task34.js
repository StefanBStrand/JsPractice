//profile lookup code challenge:

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "123456",
    likes: ["Pizza", "Games", "Movies"],
  },
  {
    firstName: "John",
    lastName: "Brown",
    number: "34568",
    likes: ["Cars", "Money", "Speed"],
  },
  {
    firstName: "Mary",
    lastName: "Johnson",
    number: "888777",
    likes: ["Knitting", "Tea", "Pills"],
  },
  {
    firstName: "Caine",
    lastName: "Evans",
    number: "666333",
    likes: ["Lottery", "Books"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name || contacts[i].lastName === name) {
      //I modified this if statement by adding another condition to take both first and lastname
      return contacts[i][prop] || "No such property";
    } // a fancy way in JS to say: "use this value if exists. Otherwise use other value.
  }
  return "No such contact";
}

let data = lookUpProfile("Caine", "number");

console.log(data);
