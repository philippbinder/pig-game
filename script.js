'use strict';

// 1)
// let player1Score = document.getElementById('score--0').textContent;
// console.log(player1Score);
// player1Score = '0';
// Problem with the DOM: player1Score variable stores a value like "20". Then I reassign this value to 0. That's all I am doing, I never update the DOM at all
// 2)
// const score0El = document.getElementById('score--0');
// score0El.textContent = 0;
// Works score0El variable holds a reference to a DOM Element. Then I access .textContent property of this element and change it to 0, which means changing the DOM.

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
// scores array for both players to display their current scores
let scores = [0, 0];
// switch between players, 0 = player1, 1 = player2
let currentPlayer = 0;
let currentScore = 0;

// dice  roll functionality
// select dice button and add eventhandler
// 1. random dice roll
btnRoll.addEventListener('click', function () {
  // generate a number from 1 to 6
  const diceRoll = Math.trunc(Math.random() * 6) + 1;

  // 2. display dice roll
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceRoll}.png`;
  // 3. check if it is not a 1
  if (diceRoll !== 1) {
    currentScore += diceRoll;
    // gets the current players text
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
    // }
  } else {
    // stwitch player
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    // document
    //   .querySelector(`.player--${currentPlayer}`)
    //   .classList.remove('player--active');
    currentScore = 0;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    // Add class if it's not there and remove it if it's there
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    // document
    //   .querySelector(`.player--${currentPlayer}`)
    //   .classList.add('player--active');
  }
  console.log('rolled dice:', diceRoll);
  console.log('scores array:', scores);
  console.log('diceEl :', diceEl);
});
