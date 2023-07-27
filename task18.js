// Return early pattern from functions.

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined; // If a or b is less than 0 then the function returns undefined (early).
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(9, 16));
