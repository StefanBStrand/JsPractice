//using multiple ternary operators (nested within each other) condition ? statement-if-true : statement-if-false

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"; //nested entire ternary operator after the first colon
}

console.log(checkSign(10));
