'use strict'

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

console.log(getHumanChoice());
console.log(getComputerChoice());
