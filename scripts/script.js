'use strict';

const result = document.getElementById('result');
let [computer_score, user_score] = [0, 0];

let gameRules = {
  Rock: {
    Rock: 'draw',
    Scissors: 'win',
    Paper: 'lose',
    Lizard: 'lose',
    Spock: 'win',
  },
  Paper: {
    Paper: 'draw',
    Rock: 'win',
    Scissors: 'lose',
    Lizard: 'win',
    Spock: 'lose',
  },

  Scissors: {
    Scissors: 'draw',
    Paper: 'win',
    Rock: 'lose',
    Lizard: 'lose',
    Spock: 'win',
  },

  Lizard: {
    Scissors: 'win',
    Paper: 'lose',
    Rock: 'win',
    Lizard: 'draw',
    Spock: 'lose',
  },
  
  Spock: {
    Scissors: 'win',
    Paper: 'lose',
    Rock: 'lose',
    Lizard: 'win',
    Spock: 'draw',
  },

};

function clicked(input) {
  let choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  let randomNumber = Math.trunc(Math.random() * 5);
  let computer_choice = choices[randomNumber];
  document.getElementById(
    'user_choice'
  ).innerHTML = `Computer choose <span>${computer_choice.toUpperCase()}</span>`;
  document.getElementById(
    'computer_choice'
  ).innerHTML = `You Choose <span>${input.toUpperCase()}</span>`;

  switch (gameRules[input][computer_choice]) {
    case 'win':
      result.innerText = 'You win';
      result.style.cssText = 'background-color: green';
      user_score++;
      break;
    case 'lose':
      result.innerText = 'You lose';
      result.style.cssText = 'background-color: red';
      computer_score++; //
      break;
    case 'draw':
      result.innerText = 'You draw';
      break;
  }

  document.getElementById('computer_score').innerHTML = computer_score;
  document.getElementById('user_score').innerHTML = user_score;
}
