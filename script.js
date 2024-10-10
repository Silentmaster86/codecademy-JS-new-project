let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDiffrence = Math.abs(targetGuess - humanGuess);
  const computerDiffrence = Math.abs(targetGuess - computerGuess);

if (humanDiffrence <= computerDiffrence) {
  return true;
} else {
  return false;
}
};

const updateScore = winner => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}