// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples


//i set arr equal to the reduced sum version and then used a ternary to return that if it were true and 'INVLAID' if it was false
function sumMul(n,m){
    let arr = []
    for(let i = 0; i < m;i++){
      if(i%n==0){
        arr.push(i)
      }
    } arr = arr.reduce((a,b)=>a+b,0) 
    return arr?arr:'INVALID'
    }