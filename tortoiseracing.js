// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript
// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".

function race(v1, v2, g) {
  //put the time in a variable
  let time = g / (v2 - v1);
  //put the hours from the time in a variable
  let hour = Math.floor(time);
  //put the minutes from the time in a variable
  let min = Math.floor((time * 60) % 60);
  //put the seconds from the time in a variable
  let sec = Math.floor((time * 3600) % 60);
  //check if the second tortoise is behind and if it is then return an array of the hours, mins and seconds
  if (v2 > v1) {
    return [hour, min, sec];
    //if it is not behind, then return null
  } else {
    return null;
  }
}
