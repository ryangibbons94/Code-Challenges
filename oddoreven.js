// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).


//i used reduce to sum all of the values in the array and then used a ternary to return even if it was even or odd if that was the case
function oddOrEven(array) {
    return array.reduce((a,b)=> a+b,0)%2===0?'even':'odd'
 }