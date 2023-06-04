function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}
let numbers = [1, 2, 3, 4, 5];
const result = calculateSum(numbers);
console.log(result);

/* In this code:

The calculateSum function takes an array of numbers as a parameter (numbers).

It initializes a variable sum to store the cumulative sum, starting from 0.

The for loop iterates over each element in the numbers array using the index i.
Within the loop, the value at index i is added to the sum using the += operator, which accumulates the sum.

After iterating through all the elements, the final sum is returned from the function.
Your implementation is correct and should work as expected. You have successfully summed up the numbers in the array.

To verify the correctness of your code, you've created an array numbers with some example values, 
passed it to the calculateSum function, and stored the result in the result variable. 
Finally, you've printed the result to the console using console.log(result).
*/
