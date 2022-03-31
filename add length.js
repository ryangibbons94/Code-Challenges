// Description:
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?


//i split the string into an array and then used map to go over the array and return the value at each index and the length of that value
function addLength(str) {
    return str.split(' ').map((a,b)=> `${a} ${a.length}`)
  }