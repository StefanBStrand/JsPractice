function reverseString(str) {
  const reverseStr = str.split("").reverse().join("");
  return reverseStr;
}
console.log(reverseString("Hello"));
console.log(reverseString("Hi there 2 you"));
