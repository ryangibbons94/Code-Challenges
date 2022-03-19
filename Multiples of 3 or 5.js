// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.


//first I returned 0 for all results under 4, then i used a for loop to get all of the numbers below the number given and then and if statement to push the ones that were multiples of either 3 or 5 into an array. Finally i used arr.reduce to sum up all of the numbers in the array
function solution(number){
    let arr = []
    if (number < 4){
      return 0
    }else{
      for (let i = 1; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0){
        arr.push(i)
        }
      }
      return arr.reduce((sum, current) => sum + current, 0);
    }
  }