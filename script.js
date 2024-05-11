'use strict'

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 1) {
    return 'rock';
  } else if (randNum === 2) {
    return 'paper';
  }
  return 'scissors';
};

function getHumanChoice() {
  let choice = String(prompt('Do you choose: rock, paper, or scissors?')).toLowerCase();
  while (['rock', 'paper', 'scissors'].indexOf(choice) < 0) {
    if (choice === 'null') { 
      choice = '';
    }
    choice = String(prompt(`'${choice}' is not a choice.\nChoose rock, paper, or scissors.`)).toLowerCase();
  } 
  return choice;
};

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `Tie! You both chose ${computerChoice}`;
  } else if (humanChoice === 'rock' && computerChoice === 'paper' ||
      humanChoice === 'paper' && computerChoice === 'scissors' ||
      humanChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  } else {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(playRound(humanChoice, computerChoice));
console.log(humanChoice);
console.log(computerChoice);
console.log(`Human Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);
