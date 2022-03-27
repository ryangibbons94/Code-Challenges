// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.


//I multiplied each time unit by the thing that it needs to be multiplied by to convert it to seconds, then I multiplied all of them by 1000 to convert them to miliseconds
function past(h, m, s){
    return ((h*3600) + (m*60) + s) * 1000
  }