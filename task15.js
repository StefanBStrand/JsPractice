// Using switch statements. This can be used for example instead of chained else if statements

function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

console.log(caseInSwitch(3));
