'use strict'

let humanScore = 0;
let computerScore = 0;

const humanScoreDisplay = document.querySelector('#humanScore'); 
const computerScoreDisplay = document.querySelector('#computerScore'); 
const buttonContainer = document.querySelector('#buttonContainer');
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const humanChoiceDisplay = document.querySelector('#humanChoice');
const computerChoiceDisplay = document.querySelector('#computerChoice');
const roundWinnerDisplay = document.querySelector('#roundWinner');
const gameWinnerDisplay = document.querySelector('#gameWinner');
const playAgainButton = document.querySelector('#playAgain');

function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 1) {
    return 'rock';
  } else if (randNum === 2) {
    return 'paper';
  }
  return 'scissors';
};

function getRoundWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return 'tie';
  } else if (humanChoice === 'rock' && computerChoice === 'paper' ||
      humanChoice === 'paper' && computerChoice === 'scissors' ||
      humanChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    return 'computer';
  } else {
    humanScore++;
    return 'human';
  }
};

function checkGameEnd() {
  if (computerScore >= 5 || humanScore >= 5) {
    const gameWinner = (humanScore > computerScore) ? 'human' : 'computer';
    gameWinnerDisplay.textContent = `The ${gameWinner} wins the game!`;
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    playAgainButton.style.display = 'inline';
  }
};

function playRound(humanChoice) {
  if (humanChoice !== '') {
    const computerChoice = getComputerChoice();
    const roundWinner = getRoundWinner(humanChoice, computerChoice);

    humanScoreDisplay.textContent = humanScore; 
    computerScoreDisplay.textContent = computerScore; 
    humanChoiceDisplay.textContent = `Human Choice: ${humanChoice}\n`;
    computerChoiceDisplay.textContent = `Computer Choice: ${computerChoice}\n`;
    roundWinnerDisplay.textContent = `Round Winner: ${roundWinner}`;

    checkGameEnd();
  }
};

buttonContainer.addEventListener('click', (event) => {
  const target = event.target;
  let humanChoice = '';

  switch (target.id) {
    case 'rock':
      humanChoice = 'rock';
      break;
    case 'paper':
      humanChoice = 'paper';
      break;
    case 'scissors':
      humanChoice = 'scissors';
      break;    
  }
  playRound(humanChoice);
});

playAgainButton.addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  playAgainButton.style.display = 'none';

  humanScoreDisplay.textContent = humanScore; 
  computerScoreDisplay.textContent = computerScore; 
  humanChoiceDisplay.textContent = '';
  computerChoiceDisplay.textContent = '';
  roundWinnerDisplay.textContent = '';
  gameWinnerDisplay.textContent = '';
});
