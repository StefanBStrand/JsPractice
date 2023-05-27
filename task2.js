function calculateFactorial(n) {
  // Base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }

  // Recursive function: calculate factorial using recursion
  return n * calculateFactorial(n - 1);
}
// Example usage
const number = 3;
const result = calculateFactorial(number);
console.log(result); // Output: 120
