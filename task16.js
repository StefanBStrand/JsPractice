//sequentialSizes - when you want to have the same output for multiple inputs

function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "high";
      break;
  }
  return answer;
}

console.log(sequentialSizes(2));
