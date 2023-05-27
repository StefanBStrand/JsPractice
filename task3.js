//Same task, calculateFactorial, but not using recursive method.

function calculateFactorial(n) {
  if (n < 0) {
    return undefined;
  }
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}
//example usage
const number = 4;
const result = calculateFactorial(number);
console.log(result);
