//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "



//I split the string into an array of the characters and then itterated through the array and made each value in the array be doubled and then I joined the array back together as a string

function doubleChar(str) {
    // split the string into individual char array
  let arr = str.split('')
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] + arr[i]
  }
  return arr.join('')
}