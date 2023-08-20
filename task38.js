// Using the (conditional) ternary operator: condition ? statement-if-true : statement-if-false
//

/*

function checkEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
} 
*/

//Here is how the ternary operator replaces the if/else:

function checkEqual(a, b) {
  return a === b ? true : false; //This would never be written, because the following line will do the same:
  // return a === b;
}

console.log(checkEqual(1, 2));
