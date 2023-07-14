function wordBlanks(myNoun, myAdjectice, myVerb, myAdverb) {
  let result = "";
  result +=
    "The" +
    " " +
    myAdjectice +
    " " +
    myNoun +
    " " +
    myVerb +
    " " +
    "drunk into a wall" +
    " " +
    myAdverb;
  return result;
}

console.log(wordBlanks("shark", "tiny", "jumped", "slowly"));
