//check palindrome. I need to set up an if/else statement.

function checkPalindrome(str) {
  const modifiedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  /*converts the string to lowercase and removes spaces and punctuation.
    The ' ' after the comma in the replace() method represents the replacement string. 
    In this case, since it is an empty string, it means that any character matching the regular 
    expression will be replaced with nothing, effectively removing those characters from the string*/

  return modifiedStr === modifiedStr.split("").reverse().join("");

  /*if (modifiedStr === modifiedStr.split("").reverse().join("")) { 
    return true;
  } else {
    return false;
  } 
  
  NOTE: if/else not needed here:

 CHATGPT: It's worth noting that you can simplify the if/else statement in this particular case. 
  Since the expression modifiedStr === modifiedStr.split('').reverse().join('') 
  already evaluates to a boolean value (true or false), you can directly return that
  expression without the need for an explicit if/else structure.
  
  */
}
console.log(checkPalindrome("racecar")); // Output: true
console.log(checkPalindrome("level")); // Output: true
console.log(checkPalindrome("Hello")); // Output: false
console.log(checkPalindrome("A man, a plan, a canal, Panama")); // Output: true
