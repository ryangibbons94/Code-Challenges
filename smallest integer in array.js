// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


//i made a new variable called min and set it equal to the array and used reduce to reduce the array to one number. i used an arrow function to look at two numbers at a time and if the first number was smaller it would return that number and if it was bigger I returned the smaller of the two
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min = args.reduce((a,b) => a<b?a:b)
      return min
    }
  }