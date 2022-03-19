// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.


//I used a sort method to put the array in order from smallest to biggest and then returned the value at the start which would have been the smallest.
var min = function(list){
    list.sort(function(a,b){
      return a>b?1:-1
    })
    return list[0];
}
//i did the exact opposite of what i did above 
var max = function(list){
        list.sort(function(a,b){
      return a>b?-1:1
    })
    return list[0];
}