// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

//first version
function toWeirdCase(string) {
  //array of each individual word
  let arrOfWords = string.split(" ");
  //array of an array of splitting each word into an array of letters
  let arrofArr = arrOfWords.map((x) => x.split(""));
  //map through first array to map through the array of each word broken down into letters
  return arrofArr
    .map((x) =>
      x
        .map((el, ind) => {
          if (ind % 2 !== 0) {
            return el.toLowerCase();
          } else {
            return el.toUpperCase();
          }
        })
        .join("")
    )
    .join(" ");
}

//take in a string
//return a string where each word has every other letter capitalizedv
