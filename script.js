let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  let num = Math.floor(Math.random() * 10);
  return num;
};
const compareGuesses = (userGuess, compGuess, secretTarget) => {
  // if (
  //   Math.abs(userGuess - secretTarget) <= Math.abs(compGuess - secretTarget)
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }
  return Math.abs(userGuess - secretTarget) <= Math.abs(compGuess - secretTarget);
};
const updateScore = (winner) => {
  switch (winner) {
    case "human":
      humanScore ++;
      break;
    case "computer":
      computerScore ++;
      break;
  }
};
const advanceRound = () => {
  currentRoundNumber ++;
};


// Write your code below:

