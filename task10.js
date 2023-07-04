function findMax(numbers) {
  const maxNumber = Math.max(...numbers);
  return maxNumber;
}

let numbers = [1, 4, 6, 7, 8, 9];
const result = findMax(numbers);
console.log(result);
