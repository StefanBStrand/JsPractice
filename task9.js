function reverseString(str) {
  const reverseStr = str.split("").reverse().join("");
  return reverseStr;
}
console.log(reverseString("Hello"));
console.log(reverseString("Hi there 2 you"));

/*The reverse() method is not available directly on a string; it's actually a method for arrays. 
To reverse a string, you can convert it to an array, reverse the array, and then convert it back to a string.
In this code, we use the following methods:

split(''): This method splits the string into an array of individual characters. We pass an empty string '' as the delimiter, 
which results in each character being treated as a separate element in the array.

reverse(): This method reverses the order of elements in the array.

join(''): This method joins the elements of the array into a single string. Again, we pass an empty string '' as the delimiter, 
so the elements are concatenated without any separator.

By chaining these methods together (split('').reverse().join('')), we can achieve the desired result of reversing the string.


*/
