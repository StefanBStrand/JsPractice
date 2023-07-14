function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

let numbers = [1, 5, 7, 78, 2, 300];
const result = sumArray(numbers);
console.log(result);
