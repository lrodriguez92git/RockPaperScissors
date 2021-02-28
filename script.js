let rounds = prompt("please enter the number of rounds you want to play")

let rndNums = parseInt(rounds);
console.log(rndNums)
let wins = 0;
let losses = 0;
let ties = 0;


const winDiv = document.querySelector ("#wins span")
const lossesDiv = document.querySelector ("#losses span")
const tiesDiv = document.querySelector ("#ties span")

for (let i = 0; i < rndNums; i++) {
  // TODO random num 0-2
    // NOTE 0:rock, 1:paper, 2:scissors
    let randNum = Math.floor(Math.random() * 3); 
    
    // TODO prompt for p, h, s
    let rockPaperScissors = prompt(`Round ${i+1}: Please enter enter r for Rock, p for Paper, or s for Scissors.`);

    if ((rockPaperScissors === 'r' && randNum === 0) ||(rockPaperScissors === 'p' && randNum === 1) || (rockPaperScissors === "s" && randNum === 2)) {
      ++ties;
        tiesDiv.innerText = ties;
        console.log('ties: ', ties);
        alert("You've Tied")
    } else 
      if (((rockPaperScissors === 'r') && (randNum === 2)) || ((rockPaperScissors === 'p') && (randNum === 0)) || ((rockPaperScissors === 's') && (randNum === 1))) {
        ++wins;
          console.log('wins: ', wins);
            winDiv.innerText = wins;
            alert("You've Won!!")     
      } else 
      if ( ((rockPaperScissors === 'r') && (randNum === 1)) || ((rockPaperScissors === 's') && (randNum === 0)) || ((rockPaperScissors === 'p') && (randNum === 2)) ) 
      {
         ++losses;
                console.log('loses: ', losses);
                lossesDiv.innerText = losses; 
                alert("You've Loss.") 
      }
}

alert(`You have won ${wins} You have lost ${losses} You have tied ${ties}`)




// RPS Outcomes
// Me (rockPaperScissors)	      App (randNum)
// R 							R
// P 							P
// S 							S

// R 							P
// R 							S

// P 							R
// P 							S

// S 							R
// S 							P
