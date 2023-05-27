console.log("Hello world!");

function calculateAverage(numbers) {
  let sum = 0; //initializes a variable called sum and defines the function that takes the parameter "numbers"
  for (let i = 0; i < numbers.length; i++) sum += numbers[i]; //this part so far iterates over each number in the array.
  const average = sum / numbers.length; //This divides the sum by the length of the array to get the average
  return average;
}

//This is example usage.
let numbers = [1, 2, 3, 4, 5]; //Here is the input, an array. Without this the function does not have input.
const result = calculateAverage(numbers);
console.log(result);
