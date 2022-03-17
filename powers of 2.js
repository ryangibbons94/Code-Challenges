// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n){
    var arry = []
    for (let i = 0; i <= n; i++){
      arry.push(2**i)
    }
    return  arry
  }

  //I tried to assign the (2**i) to a variable at first and then push it into the array but that didnt work so I looked up how to do this and it came back with this, basically.    