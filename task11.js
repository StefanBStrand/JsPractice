function capitalizeWords(str) {
  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  const modifiedString = capitalizedWords.join(" "); // Remember, I cant call/use a method directly on a function. The mistake was the missing "d in capitalizedWords"
  return modifiedString;
}

console.log(capitalizeWords("hi there"));

/*

CODE WITHOUT USING ARROW FUNCTION: 

function capitalizeWords(str) {
  const words = str.split(" ");
  const capitalizedWords = words.map(function(word) { 
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  const modifiedString = capitalizedWords.join(" ");
  return modifiedString;
}

Line 18 shows how to write this without using the arrow function (concise way)

*/
