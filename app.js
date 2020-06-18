var score = 0;
var computerScore= 0;
finalScore = 5;


var coinFlip = document.getElementById("coinFlipHeads").addEventListener("click", function() {
  var random = Math.floor(Math.random() * 2) +1;
  // var cpuRandom = Math.floor(Math.random() * 2) +1;
  if (random === 1) {
    random = "heads";
    cpuRandom = "heads";
    document.getElementById("image").src="Head.png";
    document.getElementById("flipResult").innerHTML = "Heads";
    score +=1;
    document.getElementById("userScore").innerHTML = "Your score: " + score;
    } else if (random === 2){
    random = "tails";
    document.getElementById("image").src="Tails.png";
    document.getElementById("flipResult").innerHTML = "Tails";
    document.getElementById("userScore").innerHTML = "Your score: " + score;
  } 
  var cpuRandom = Math.floor(Math.random() * 2) +1;
  var random = Math.floor(Math.random() * 2) +1;
  if (cpuRandom === random) {
    cpuRandom = "heads";
    computerScore +=1;
    document.getElementById("computerScore").innerHTML = "Computer Score " + computerScore;
  } else if (cpuRandom === random) {
    cpuRandom = "tails";
    computerScore +=1;
    document.getElementById("computerScore").innerHTML = "Computer Score " + computerScore;
  };
});

var coinFlip = document.getElementById("coinFlipTails").addEventListener("click", function() {
  var random = Math.floor(Math.random() * 2) +1;
  if (random === 1) {
    random = "heads";
    document.getElementById("image").src="Head.png";
    document.getElementById("flipResult").innerHTML = "Heads";
    document.getElementById("userScore").innerHTML = "Your score: " + score;
    } else if (random === 2){
    random = "tails";
    document.getElementById("image").src="Tails.png";
    document.getElementById("flipResult").innerHTML = "Tails";
    score +=1;
    document.getElementById("userScore").innerHTML = "Your score: " + score;
  };
  var cpuRandom = Math.floor(Math.random() * 2) +1;
  var random = Math.floor(Math.random() * 2) +1;
  if (cpuRandom === random) {
    cpuRandom = "heads";
    computerScore +=1;
    document.getElementById("computerScore").innerHTML = "Computer Score " + computerScore;
  } else if (cpuRandom === random) {
    cpuRandom = "tails";
    computerScore +=1;
    document.getElementById("computerScore").innerHTML = "Computer Score " + computerScore;
  };
});




// computer = "heads";
// computerScore +=1;
//     document.getElementById("computerScore").innerHTML = "Your score: " + computerScore;

// var cpuRandom = Math.floor(Math.random() * 2) +1;
// if (cpuRandom === 1) {
//   cpuRandom = "heads";
//   computerScore +=1;
//   document.getElementById("computerScore").innerHTML = "Computer Score " + computerScore;
// } else if (cpuRandom === 2) {
//   cpuRandom = "tails";
//   computerScore +=1;
//   document.getElementById("computerScore").innerHTML = "Computer Score " + computerScore;
// };








