// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

//first i split the string into an array and then i used for each to check if each letter was a vowel and if it was i added its index+1 to an array
function vowelIndices(word) {
  var arr = [];

  word
    .split("")
    .forEach((x, i) => "aeiouy".indexOf(x) !== -1 && arr.push(i + 1));

  return arr;
}
