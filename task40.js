let catName = "Quincy";
let quote;

catName = "Beau";

function catTalk() {
  "use strict";
  catName = "Oliver";
  quote = catName + " " + "says" + " " + "Meow!";
  return quote;
}

console.log(catTalk(quote));
