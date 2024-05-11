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

function playGame() {
  let round = 1;
  
  while (round < 6) {
    console.log(`Round: ${round}`);

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const roundWinner = getRoundWinner(humanChoice, computerChoice);
    
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

    console.log(`\nPlayer chooses ${humanChoice}`);
    console.log(`Computer chooses ${computerChoice}`);
    
    console.log(`Round winner: ${roundWinner}\n\n`);
    
    if (roundWinner !== 'tie') {
      round++;
    }
  }
  const gameWinner = (humanScore > computerScore) ? 'human' : 'computer';
  console.log(`The ${gameWinner} wins the game!`);
};

playGame();
