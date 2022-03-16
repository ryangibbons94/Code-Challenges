// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
    let total = 0
    for(let i = 0; i< games.length; i++){
      let score1 = Number(games[i].charAt(0))
      let score2 = Number(games[i].charAt(2))
      if(score1>score2){
        total += 3
      }else if(score1<score2){
        total = total
      }else{
        total +=1
      }
    }
    return total
  }

  //i stored each teams score in a variable and then compared them to each other and applied the given values based on the conditions 