function countVowels(str) {
  const vowels = str.match(/[aeiou]/gi);
  let count = 0;
  for (let i = 0; i < vowels.length; i++) {
    count++; // not : count += vowels[i];
  }

  return count;
}

let str = "Wabooba";
const result = countVowels(str);
console.log(result);
