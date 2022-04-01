
//repeat a string a given number of times


var repeatIt = function(str, n) {
    let arr = []
      if(typeof str != 'string'){
        return 'Not a string'
      }else{
        for(let i = 0; i < n; i++){
          arr.push(str)
        }
      }
    return arr.join('')
    }