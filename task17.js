/* When you want a function to return a boolean (true or false value). Remember, 
all comparison operators return a true or false boolean value */

function isLess(a, b) {
  // fix this code
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

// Since all comparison operators return boolean values, we can skip the whole if statement, like this:

function isLess(a, b) {
  return a < b;
}

console.log(isLess(10, 15));
