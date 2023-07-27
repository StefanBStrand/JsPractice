//phoneticLookup

function phoneticLookup(val) {
  let result = "";
  let lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
  };
  result = lookup[val];
  return result;
}

console.log(phoneticLookup("charlie"));
