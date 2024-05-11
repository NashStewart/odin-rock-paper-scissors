'use strict'

function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 1) {
    return 'rock';
  } else if (randNum === 2) {
    return 'paper';
  }
  return 'scissors';
}

function getHumanChoice() {
  return prompt('Do you choose: rock, paper, or scissors?');
}

console.log(getHumanChoice());
console.log(getComputerChoice());
